// MARDUK ORACLE v1.3 — main.js
// main.js v1.2 — clean spherical orbital camera, no lag on rotation.
// Drag = instant 1:1 orbit. Scroll/pinch = smoothly-lerped zoom.

import * as THREE from 'three';
import { Environment } from './environment.js';
import { MardukHead  } from './marduk.js';
import { Oracle      } from './oracle.js';
import { Admin       } from './admin.js';
import { SFX         } from './audio.js';
import { Sparks      } from './sparks.js';

// ─── SCENE SETUP ─────────────────────────────────────────────────────────────
const stage  = document.getElementById('stage');
const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x010208);

const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.05, 2000);
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
stage.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();               // only on resize
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ─── BLOCK ALL NATIVE BROWSER TOUCH HANDLING ON THE STAGE ────────────────────
// Must use passive:false so we can call preventDefault().
// This stops: iOS Safari page scroll, browser pinch-zoom, pan, and overscroll.
// Scrollable UI panels (results, detail, admin) have touch-action:pan-y in CSS
// and handle their own scroll — they are not children of #stage so unaffected.
function blockNativeTouch(e) {
  // Allow scrolling inside explicitly scrollable panels
  let el = e.target;
  while (el && el !== document.body) {
    const ta = window.getComputedStyle(el).touchAction;
    if (ta === 'pan-y' || ta === 'auto') return; // let panel scroll
    el = el.parentElement;
  }
  e.preventDefault();
}
document.addEventListener('touchstart', blockNativeTouch, { passive: false });
document.addEventListener('touchmove',  blockNativeTouch, { passive: false });
// Also block gesturestart (Safari-specific pinch-zoom event)
document.addEventListener('gesturestart',  e => e.preventDefault(), { passive: false });
document.addEventListener('gesturechange', e => e.preventDefault(), { passive: false });
document.addEventListener('gestureend',    e => e.preventDefault(), { passive: false });

// ─── SUBSYSTEMS ──────────────────────────────────────────────────────────────
const env    = new Environment(scene);
const marduk = new MardukHead(scene);
const oracle = new Oracle(marduk, env);
const admin  = new Admin();
const sparks = new Sparks(scene);

// ─── CAMERA STATE ────────────────────────────────────────────────────────────
// theta = azimuth (horizontal), phi = elevation (vertical)
// Drag updates theta/phi DIRECTLY — no spring lag on rotation.
// Only zoom (radius) uses a smooth lerp target.
const CAM_TARGET = new THREE.Vector3(0, -0.4, 0);
const CLAMP = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const cam = {
  theta:   0.0,           // current azimuth  (updated directly by drag)
  phi:     0.06,          // current elevation (updated directly by drag)
  radius:  7.5,           // current radius    (lerps toward tRadius)
  tRadius: 7.5,           // zoom target
};

function positionCamera() {
  const cp = Math.cos(cam.phi), sp = Math.sin(cam.phi);
  const ct = Math.cos(cam.theta), st = Math.sin(cam.theta);
  camera.position.set(
    CAM_TARGET.x + cam.radius * cp * st,
    CAM_TARGET.y + cam.radius * sp,
    CAM_TARGET.z + cam.radius * cp * ct
  );
  camera.lookAt(CAM_TARGET);
}

// ─── POINTER STATE ────────────────────────────────────────────────────────────
const ptrs        = new Map();   // pointerId → {x,y}
let   dragActive  = false;
let   lastDragX   = 0,  lastDragY   = 0;
let   lastPinchDist = 0;

// Sensitivity — pixels per radian
const ORBIT_SENS = 0.0045;

// ─── RAYCASTER (touch → 3-D world position) ──────────────────────────────────
const raycaster = new THREE.Raycaster();
const _ndc      = new THREE.Vector2();

function touchWorldPos(clientX, clientY) {
  _ndc.set(
    (clientX / window.innerWidth)  *  2 - 1,
    (clientY / window.innerHeight) * -2 + 1
  );
  raycaster.setFromCamera(_ndc, camera);
  // Intersect sphere of radius 3.2 centred on CAM_TARGET
  const o  = raycaster.ray.origin.clone().sub(CAM_TARGET);
  const d  = raycaster.ray.direction;
  const R  = 3.2;
  const b  = 2 * o.dot(d);
  const c  = o.dot(o) - R * R;
  const disc = b * b - 4 * c;
  if (disc >= 0) {
    const sq = Math.sqrt(disc);
    const t1 = (-b - sq) * 0.5;
    const t2 = (-b + sq) * 0.5;
    const t  = t1 > 0.01 ? t1 : t2 > 0.01 ? t2 : null;
    if (t !== null) return raycaster.ray.origin.clone().addScaledVector(d, t);
  }
  return raycaster.ray.origin.clone().addScaledVector(d, cam.radius * 0.55);
}

// ─── POINTER EVENTS ──────────────────────────────────────────────────────────

stage.addEventListener('pointerdown', e => {
  SFX.unlock();

  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  try { stage.setPointerCapture(e.pointerId); } catch (_) {}

  if (ptrs.size === 1) {
    dragActive = true;
    lastDragX  = e.clientX;
    lastDragY  = e.clientY;
    stage.classList.add('grabbing');
  } else if (ptrs.size === 2) {
    // Entering pinch — freeze drag, record initial pinch distance
    dragActive = false;
    const vals = [...ptrs.values()];
    lastPinchDist = Math.hypot(vals[0].x - vals[1].x, vals[0].y - vals[1].y);
  }

  // Spark + head react on every touch
  const wp = touchWorldPos(e.clientX, e.clientY);
  sparks.burst(wp.x, wp.y, wp.z);
  marduk.reactToTouch(wp);
  SFX.touch();
});

stage.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (ptrs.size >= 2) {
    // Pinch zoom — compare current distance to last frame's distance
    const vals = [...ptrs.values()];
    const dist = Math.hypot(vals[0].x - vals[1].x, vals[0].y - vals[1].y);
    if (lastPinchDist > 0) {
      // Smaller fingers = zoom in (radius shrinks)
      cam.tRadius = CLAMP(cam.tRadius * (lastPinchDist / dist), 1.5, 22);
    }
    lastPinchDist = dist;
    return;
  }

  if (!dragActive) return;

  // Apply orbit delta INSTANTLY to actual camera angles
  const dx = e.clientX - lastDragX;
  const dy = e.clientY - lastDragY;
  lastDragX = e.clientX;
  lastDragY = e.clientY;

  cam.theta -= dx * ORBIT_SENS;
  cam.phi    = CLAMP(cam.phi - dy * ORBIT_SENS, -1.45, 1.45);
});

stage.addEventListener('pointerup', e => {
  ptrs.delete(e.pointerId);
  if (ptrs.size === 0) {
    dragActive = false;
    stage.classList.remove('grabbing');
  } else if (ptrs.size === 1) {
    // Dropped from pinch back to single-finger — resume drag
    const remaining = [...ptrs.entries()][0];
    dragActive = true;
    lastDragX  = remaining[1].x;
    lastDragY  = remaining[1].y;
  }
});
stage.addEventListener('pointercancel', e => {
  ptrs.delete(e.pointerId);
  if (ptrs.size === 0) { dragActive = false; stage.classList.remove('grabbing'); }
});

// Hover: head tracks mouse when not dragging
stage.addEventListener('mousemove', e => {
  if (dragActive) return;
  const nx = (e.clientX / window.innerWidth)  * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  marduk.setMouseTarget(nx * 0.48, ny * 0.25);
});

// Scroll wheel zoom — passive:false lets us preventDefault, blocking trackpad page-zoom
stage.addEventListener('wheel', e => {
  e.preventDefault();
  const factor = 1 + e.deltaY * 0.0011;
  cam.tRadius = CLAMP(cam.tRadius * factor, 1.5, 22);
}, { passive: false });

// ─── UI AUDIO ────────────────────────────────────────────────────────────────
const searchInput = document.getElementById('search-input');
let   _keyN = 0;
searchInput.addEventListener('keydown', e => {
  SFX.unlock();
  if (e.key === 'Escape') { SFX.clear(); return; }
  if (e.key === 'Enter')  { SFX.searchStart(); return; }
  SFX.keypress(_keyN++);
});

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
  if (started) return;
  started = true;
  SFX.unlock();
  document.getElementById('intro').classList.add('hide');
  searchInput.focus();
}
document.getElementById('begin-btn').addEventListener('click', start);
document.getElementById('intro').addEventListener('click', e => {
  if (e.target === document.getElementById('intro')) start();
});

// ─── RENDER LOOP ─────────────────────────────────────────────────────────────
// Initial position
positionCamera();

let prevTime = 0;
function tick(now) {
  requestAnimationFrame(tick);
  const t  = now * 0.001;
  const dt = Math.min(t - prevTime, 0.05);
  prevTime = t;

  // Zoom lerp only — rotation is already at its target
  cam.radius += (cam.tRadius - cam.radius) * Math.min(1, dt * 6);
  positionCamera();

  env.update(t);
  marduk.update(t, dt);
  sparks.update(dt, camera);
  renderer.render(scene, camera);
}
requestAnimationFrame(tick);

window.__oracleReady = true;
