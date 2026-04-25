// main.js — orchestrator: boot, scene/camera, controls, frame loop, AI

import * as THREE from 'three';
import { Environment, ENV_CONSTANTS } from './environment.js';
import { EveCloud } from './eve.js';
import { GameUI } from './ui.js';
import { ensureAudio, sounds } from './audio.js';

const { GROUND_Y } = ENV_CONSTANTS;

// ─── URL params ───
const params = new URLSearchParams(window.location.search);
function clampInt(v, def, lo, hi) {
  const n = parseInt(v, 10);
  if (!isFinite(n)) return def;
  return Math.max(lo, Math.min(hi, n));
}
const startLevel = clampInt(params.get('level'), 0, -99999, 99999);
const rangeParam = (params.get('range') || '-1000,1000').split(',').map(n => parseInt(n, 10));
const MIN_SCORE = isFinite(rangeParam[0]) ? rangeParam[0] : -1000;
const MAX_SCORE = isFinite(rangeParam[1]) ? rangeParam[1] : 1000;
const redirectURL = params.get('redirect') || '';
const failURL = params.get('fail') || '';

document.getElementById('neg-bound').textContent = MIN_SCORE;
document.getElementById('pos-bound').textContent = (MAX_SCORE > 0 ? '+' : '') + MAX_SCORE;

// ─── Shared game state ───
const state = {
  score: Math.max(MIN_SCORE + 1, Math.min(MAX_SCORE - 1, startLevel)),
  minScore: MIN_SCORE,
  maxScore: MAX_SCORE,
};

// ─── Three.js setup ───
const stage = document.getElementById('stage');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020410);   // mood is updated each frame by Environment
const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.05, 3000);
camera.position.set(0, 1.6, 0);   // user "eye" height

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
stage.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ─── Camera controls (smooth) ───
const camRot = { yaw: 0, pitch: -0.18 };
let targetFov = 58;
let dragging = false;
let lastX = 0, lastY = 0;
const ptrs = new Map();
let lastPinchDist = 0;

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

stage.addEventListener('pointerdown', e => {
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    dragging = true;
    lastX = e.clientX; lastY = e.clientY;
    stage.classList.add('grabbing');
    try { stage.setPointerCapture(e.pointerId); } catch(_) {}
  } else if (ptrs.size === 2) {
    dragging = false;
    const pts = [...ptrs.values()];
    lastPinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  }
  ensureAudio();
});

stage.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size >= 2) {
    const pts = [...ptrs.values()];
    const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    if (lastPinchDist > 0) {
      const ratio = lastPinchDist / d;
      targetFov = clamp(targetFov * ratio, 26, 92);
    }
    lastPinchDist = d;
    return;
  }
  if (!dragging) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  camRot.yaw -= dx * 0.0040;
  camRot.pitch = clamp(camRot.pitch - dy * 0.0040, -1.0, 0.5);
});

function endPtr(e) {
  ptrs.delete(e.pointerId);
  if (ptrs.size === 0) {
    dragging = false;
    stage.classList.remove('grabbing');
    lastPinchDist = 0;
  } else if (ptrs.size === 1) {
    const remaining = [...ptrs.values()][0];
    lastX = remaining.x; lastY = remaining.y;
    dragging = true;
    lastPinchDist = 0;
  }
}
stage.addEventListener('pointerup', endPtr);
stage.addEventListener('pointercancel', endPtr);

stage.addEventListener('wheel', e => {
  e.preventDefault();
  // smooth zoom: change targetFov, lerp toward it each frame
  targetFov = clamp(targetFov + e.deltaY * 0.04, 26, 92);
}, { passive: false });

// ─── Scene contents ───
const env = new Environment(scene);
const eveCloud = new EveCloud(scene);
console.log('Eve:', eveCloud.pointCount(), 'points,', eveCloud.lineCount(), 'lines');

// ─── Eve world state (group transform) ───
const eve = {
  position: new THREE.Vector3(0, GROUND_Y, -8),
  yaw: 0,
  scale: 1.1,
  target: new THREE.Vector3(0, GROUND_Y, -8),
  pauseUntil: 0,
};

function pickNewTarget() {
  // Eve walks within a forward arc so she stays visible from default cam angle
  const angle = (Math.random() - 0.5) * Math.PI * 0.95;   // ±85° around -Z
  const dist = 8 + Math.random() * 14;
  eve.target.set(
    Math.sin(angle) * dist,
    GROUND_Y,
    -Math.cos(angle) * dist
  );
}
pickNewTarget();

// ─── UI hookup ───
const ui = new GameUI(state);

ui.onAsk = () => {
  if (!eveCloud.isLocked()) eveCloud.setAnim('speaking', 2.4);
  sounds.ask();
};

ui.onAnswer = (delta) => {
  state.score += delta;
  if (state.score >= MAX_SCORE) { state.score = MAX_SCORE; finishGame('pass'); return; }
  if (state.score <= MIN_SCORE) { state.score = MIN_SCORE; finishGame('fail'); return; }

  if (delta < 0) {
    ui.flash('red');
    sounds.error();
    eveCloud.setAnim('seizure', 0.9);
  } else if (delta > 0) {
    if (state.score > 300) {
      ui.flash('gold');
      sounds.chime();
      eveCloud.setAnim('dance', 1.8);
    } else {
      ui.flash('blue');
      sounds.tick();
    }
  }
  ui.updateScore();
  setTimeout(() => { if (!ui.ended) ui.ask(); }, 1100);
};

let gameEnded = false;
function finishGame(result) {
  if (gameEnded) return;
  gameEnded = true;
  ui.updateScore();
  if (result === 'pass') {
    eveCloud.setAnim('dance', 6);
    sounds.pass();
  } else {
    eveCloud.setAnim('seizure', 6);
    sounds.fail();
  }
  ui.end(result, redirectURL, failURL);
}

// ─── Eve AI: walks on ground, sometimes stands still, never floats ───
function updateEveBehaviour(dt) {
  const now = performance.now() / 1000;
  if (eveCloud.isLocked()) return;   // hold during speaking/seizure/dance bursts

  const posN = Math.max(0, Math.min(1, state.score / 1000));
  const negN = Math.max(0, Math.min(1, -state.score / 1000));

  if (now < eve.pauseUntil) {
    if (eveCloud.animName !== 'idle') eveCloud.setAnim('idle');
    // face user during pause
    const desired = Math.atan2(-eve.position.x, -eve.position.z);
    let yawDiff = desired - eve.yaw;
    while (yawDiff >  Math.PI) yawDiff -= Math.PI * 2;
    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
    eve.yaw += yawDiff * Math.min(1, 4 * dt);
    return;
  }

  const dx = eve.target.x - eve.position.x;
  const dz = eve.target.z - eve.position.z;
  const distSq = dx*dx + dz*dz;

  if (distSq < 0.4) {
    eve.pauseUntil = now + 1.0 + Math.random() * 2.5;
    eveCloud.setAnim('idle');
    if (negN > 0.4 && Math.random() < 0.25) {
      // glitch teleport when in hell
      eveCloud.group.visible = false;
      setTimeout(() => { eveCloud.group.visible = true; pickNewTarget(); }, 130 + Math.random() * 240);
    } else {
      pickNewTarget();
    }
    return;
  }

  // pick gait: skip more often in paradise, walk in neutral, faster in hell
  if (eveCloud.animName !== 'walk' && eveCloud.animName !== 'skip') {
    const skipChance = 0.18 + posN * 0.35;
    eveCloud.setAnim(Math.random() < skipChance ? 'skip' : 'walk');
  }

  const baseSpeed = eveCloud.animName === 'skip' ? 3.0 : 1.9;
  const speed = baseSpeed * (1 + negN * 0.6);

  const dist = Math.sqrt(distSq);
  const nx = dx / dist, nz = dz / dist;
  eve.position.x += nx * speed * dt;
  eve.position.z += nz * speed * dt;

  // face direction of travel (smooth)
  const desiredYaw = Math.atan2(nx, nz);
  let yawDiff = desiredYaw - eve.yaw;
  while (yawDiff >  Math.PI) yawDiff -= Math.PI * 2;
  while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
  eve.yaw += yawDiff * Math.min(1, 8 * dt);
}

// ─── Eve scale/colour driven by score ───
const _eveColorWhite = new THREE.Color(0xffffff);
const _eveColorGold  = new THREE.Color(0xffe9a0);
const _eveColorRed   = new THREE.Color(0xff4040);

function updateEveAppearance(dt) {
  const posN = Math.max(0, Math.min(1, state.score / 1000));
  const negN = Math.max(0, Math.min(1, -state.score / 1000));

  // Scale: starts at 1.1, grows enormously in heaven, stays ~normal in hell
  const targetScale = 1.1 + Math.pow(posN, 1.35) * 7.5;
  eve.scale += (targetScale - eve.scale) * Math.min(1, 2 * dt);

  // Colour: white default → gold in heaven → red in hell
  const c = _eveColorWhite.clone();
  if (posN > 0) c.lerp(_eveColorGold, posN * 0.85);
  if (negN > 0) c.lerp(_eveColorRed, negN);
  eveCloud.setColor(c);
}

// ─── Frame loop ───
let lastFrame = performance.now();
let nowSec = 0;

function frame() {
  const now = performance.now();
  const dt = Math.min(0.05, (now - lastFrame) / 1000);
  lastFrame = now;
  nowSec = now / 1000;

  // smooth FOV
  camera.fov += (targetFov - camera.fov) * Math.min(1, 8 * dt);
  camera.updateProjectionMatrix();

  // camera rotation
  const cp = Math.cos(camRot.pitch), sp = Math.sin(camRot.pitch);
  const cy = Math.cos(camRot.yaw),   sy = Math.sin(camRot.yaw);
  camera.lookAt(
    camera.position.x + (-sy * cp),
    camera.position.y + sp,
    camera.position.z + (-cy * cp)
  );

  // game logic
  if (!gameEnded) updateEveBehaviour(dt);
  updateEveAppearance(dt);

  // apply group transform (Eve walks on ground, scales in place)
  eveCloud.group.position.copy(eve.position);
  eveCloud.group.rotation.y = eve.yaw;
  eveCloud.group.scale.setScalar(eve.scale);

  // update Eve point cloud (skinning + noise)
  eveCloud.update(nowSec, dt, state.score);

  // update environment
  env.update(nowSec, state.score, eve);

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// ─── Boot ───
window.__eveStart = function() {
  ensureAudio();
  ui.updateScore();
  requestAnimationFrame(frame);
  setTimeout(() => ui.ask(), 1300);
};

ui.updateScore();
window.__eveReady = true;
if (window.__eveQueued) {
  // user clicked while module was loading
  const intro = document.getElementById('intro');
  if (intro) intro.classList.add('hide');
  window.__eveStart();
}
