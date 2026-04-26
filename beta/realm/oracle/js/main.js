// main.js — scene boot, smooth spherical orbital camera, audio, sparks.

import * as THREE from 'three';
import { Environment } from './environment.js';
import { MardukHead  } from './marduk.js';
import { Oracle      } from './oracle.js';
import { Admin       } from './admin.js';
import { SFX         } from './audio.js';
import { Sparks      } from './sparks.js';

// ─── SCENE ───
const stage  = document.getElementById('stage');
const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x010208);

const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.05, 2000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
stage.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ─── SUBSYSTEMS ───
const env    = new Environment(scene);
const marduk = new MardukHead(scene);
const oracle = new Oracle(marduk, env);
const admin  = new Admin();
const sparks = new Sparks(scene);

// ─── SMOOTH SPHERICAL ORBITAL CAMERA ────────────────────────────────────────
// Always looks at head center. Drag=orbit, scroll/pinch=zoom.
// theta = azimuth (0..2π), phi = elevation (-π/2..π/2), radius = distance.

const CAM_TARGET = new THREE.Vector3(0, -0.5, 0);
const cam = {
  theta:  0.0,  tTheta:  0.0,
  phi:    0.08, tPhi:    0.08,
  radius: 7.5,  tRadius: 7.5,
};
const CLAMP = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

function updateCamera(dt) {
  // Shortest-arc lerp for theta (avoids spinning the wrong way)
  let dTheta = cam.tTheta - cam.theta;
  if (dTheta >  Math.PI) dTheta -= Math.PI * 2;
  if (dTheta < -Math.PI) dTheta += Math.PI * 2;
  cam.theta  += dTheta              * Math.min(1, dt * 7);
  cam.phi    += (cam.tPhi    - cam.phi)    * Math.min(1, dt * 7);
  cam.radius += (cam.tRadius - cam.radius) * Math.min(1, dt * 5);

  const cp = Math.cos(cam.phi), sp = Math.sin(cam.phi);
  const ct = Math.cos(cam.theta), st = Math.sin(cam.theta);
  camera.position.set(
    CAM_TARGET.x + cam.radius * cp * st,
    CAM_TARGET.y + cam.radius * sp,
    CAM_TARGET.z + cam.radius * cp * ct
  );
  camera.lookAt(CAM_TARGET);
  camera.updateProjectionMatrix();
}

// ─── POINTER / DRAG STATE ───────────────────────────────────────────────────
const ptrs = new Map();
let   dragActive      = false;
let   lastDragX       = 0, lastDragY = 0;
let   lastPinchDist   = 0;
let   pointerDownX    = 0, pointerDownY = 0;
const TAP_THRESHOLD   = 10; // px — below this = tap, not drag

// ─── RAYCASTER for touch→world position ─────────────────────────────────────
const raycaster = new THREE.Raycaster();
const _mouse    = new THREE.Vector2();

function touchWorldPos(clientX, clientY) {
  _mouse.x = (clientX / window.innerWidth)  *  2 - 1;
  _mouse.y = (clientY / window.innerHeight) * -2 + 1;
  raycaster.setFromCamera(_mouse, camera);

  // Intersect a sphere of radius 3.5 centred on CAM_TARGET
  const o  = raycaster.ray.origin.clone().sub(CAM_TARGET);
  const d  = raycaster.ray.direction;
  const R  = 3.5;
  const a  = d.dot(d);
  const b  = 2 * o.dot(d);
  const c_ = o.dot(o) - R * R;
  const disc = b * b - 4 * a * c_;
  if (disc >= 0) {
    const t1 = (-b - Math.sqrt(disc)) / (2 * a);
    const t2 = (-b + Math.sqrt(disc)) / (2 * a);
    const t  = t1 > 0.01 ? t1 : t2 > 0.01 ? t2 : null;
    if (t !== null)
      return raycaster.ray.origin.clone().addScaledVector(d, t);
  }
  // Fallback: point on a plane at fixed distance
  return raycaster.ray.origin.clone().addScaledVector(d, cam.radius * 0.6);
}

// ─── POINTER EVENTS ─────────────────────────────────────────────────────────

stage.addEventListener('pointerdown', e => {
  SFX.unlock();
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  pointerDownX = e.clientX; pointerDownY = e.clientY;

  if (ptrs.size === 1) {
    dragActive = true;
    lastDragX  = e.clientX; lastDragY = e.clientY;
    stage.classList.add('grabbing');
    try { stage.setPointerCapture(e.pointerId); } catch(_) {}
  } else if (ptrs.size === 2) {
    dragActive = false;
    const pts = [...ptrs.values()];
    lastPinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  }

  // Sparks on every touch — fired immediately at pointer-down
  const wp = touchWorldPos(e.clientX, e.clientY);
  sparks.burst(wp.x, wp.y, wp.z);
  marduk.reactToTouch(wp);
  SFX.touch();
});

stage.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (ptrs.size >= 2) {
    // Pinch zoom
    const pts = [...ptrs.values()];
    const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    if (lastPinchDist > 0) {
      const ratio = lastPinchDist / d;
      cam.tRadius = CLAMP(cam.tRadius * ratio, 1.5, 20);
    }
    lastPinchDist = d;
    return;
  }

  if (!dragActive) return;
  const dx = e.clientX - lastDragX;
  const dy = e.clientY - lastDragY;
  lastDragX = e.clientX; lastDragY = e.clientY;

  cam.tTheta -= dx * 0.006;
  cam.tPhi    = CLAMP(cam.tPhi - dy * 0.006, -Math.PI * 0.47, Math.PI * 0.47);
});

const endPtr = e => {
  ptrs.delete(e.pointerId);
  if (ptrs.size === 0) { dragActive = false; stage.classList.remove('grabbing'); }
};
stage.addEventListener('pointerup',     endPtr);
stage.addEventListener('pointercancel', endPtr);

// Hover tracking — head tracks mouse gently when not dragging
stage.addEventListener('mousemove', e => {
  if (dragActive) return;
  const nx = (e.clientX / window.innerWidth)  * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  marduk.setMouseTarget(nx * 0.5, ny * 0.28);
});

// Scroll wheel zoom
stage.addEventListener('wheel', e => {
  const factor = 1 + e.deltaY * 0.0012;
  cam.tRadius = CLAMP(cam.tRadius * factor, 1.5, 20);
}, { passive: true });

// ─── AUDIO ON UI ELEMENTS ────────────────────────────────────────────────────

// Keypress sounds — wire to search input
const searchInput = document.getElementById('search-input');
let   _keyN = 0;
searchInput.addEventListener('keydown', e => {
  SFX.unlock();
  if (e.key === 'Escape') { SFX.clear(); return; }
  if (e.key === 'Enter')  { SFX.searchStart(); return; }
  SFX.keypress(_keyN++);
});

// Button sounds — wire to any element with class 'abtn' or 'intro-begin'
document.addEventListener('click', e => {
  if (e.target.classList.contains('abtn') ||
      e.target.classList.contains('intro-begin') ||
      e.target.id === 'detail-back') {
    SFX.buttonClick();
  }
});

// ─── INTRO ───────────────────────────────────────────────────────────────────

let started = false;
function start() {
  if (started) return; started = true;
  SFX.unlock();
  document.getElementById('intro').classList.add('hide');
  searchInput.focus();
}
document.getElementById('begin-btn').addEventListener('click', start);
document.getElementById('intro').addEventListener('click', e => {
  if (e.target === document.getElementById('intro')) start();
});

// ─── RENDER LOOP ─────────────────────────────────────────────────────────────

let prevTime = 0;
function tick(now) {
  requestAnimationFrame(tick);
  const t  = now * 0.001;
  const dt = Math.min(t - prevTime, 0.05);
  prevTime = t;

  updateCamera(dt);
  env.update(t);
  marduk.update(t, dt);
  sparks.update(dt, camera);
  renderer.render(scene, camera);
}
requestAnimationFrame(tick);

window.__oracleReady = true;
