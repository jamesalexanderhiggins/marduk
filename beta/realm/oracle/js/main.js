// main.js — scene boot, camera, render loop, input wiring.
// Adapted from the EVE Turing Gate orchestrator.

import * as THREE from 'three';
import { Environment } from './environment.js';
import { MardukHead  } from './marduk.js';
import { Oracle      } from './oracle.js';
import { Admin       } from './admin.js';

// ─── SCENE ───
const stage  = document.getElementById('stage');
const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x010208);

const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.05, 2000);
camera.position.set(0, -0.8, 8);
camera.lookAt(0, -1.5, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
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

// ─── CAMERA CONTROLS (drag-to-orbit, pinch zoom) ───
const camRot = { yaw: 0, pitch: 0 };
let dragging = false, lastX = 0, lastY = 0;
const ptrs = new Map();
let lastPinchDist = 0;
let targetFov = 52;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

stage.addEventListener('pointerdown', e => {
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    stage.classList.add('grabbing');
    try { stage.setPointerCapture(e.pointerId); } catch(_) {}
  } else if (ptrs.size === 2) {
    dragging = false;
    const pts = [...ptrs.values()];
    lastPinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  }
});
stage.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size >= 2) {
    const pts = [...ptrs.values()];
    const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    if (lastPinchDist > 0) targetFov = clamp(targetFov * (lastPinchDist / d), 28, 85);
    lastPinchDist = d; return;
  }
  if (!dragging) return;
  camRot.yaw   -= (e.clientX - lastX) * 0.0035;
  camRot.pitch  = clamp(camRot.pitch - (e.clientY - lastY) * 0.0035, -0.9, 0.4);
  lastX = e.clientX; lastY = e.clientY;

  // Also feed mouse to marduk for head tracking
  const nx = (e.clientX / window.innerWidth)  * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  marduk.setMouseTarget(nx, -ny);
});
const endPtr = e => {
  ptrs.delete(e.pointerId);
  if (ptrs.size === 0) { dragging = false; stage.classList.remove('grabbing'); }
};
stage.addEventListener('pointerup', endPtr);
stage.addEventListener('pointercancel', endPtr);

// Mouse-only head tracking (no drag)
stage.addEventListener('mousemove', e => {
  if (dragging) return;
  const nx = (e.clientX / window.innerWidth)  * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  marduk.setMouseTarget(nx * 0.6, ny * 0.3);
});

stage.addEventListener('wheel', e => {
  targetFov = clamp(targetFov + e.deltaY * 0.04, 28, 85);
}, { passive: true });

// ─── INTRO BOOT ───
let started = false;
function start() {
  if (started) return; started = true;
  document.getElementById('intro').classList.add('hide');
  document.getElementById('search-input').focus();
}
document.getElementById('begin-btn').addEventListener('click', start);
document.getElementById('intro').addEventListener('click', e => { if (e.target === document.getElementById('intro')) start(); });

// ─── RENDER LOOP ───
let prevTime = 0;
function tick(now) {
  requestAnimationFrame(tick);
  const t  = now * 0.001;
  const dt = Math.min(t - prevTime, 0.05);
  prevTime = t;

  // Smooth camera
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 5);
  camera.updateProjectionMatrix();
  camera.position.x = Math.sin(camRot.yaw) * 8 * Math.cos(camRot.pitch);
  camera.position.y = -0.8 + Math.sin(camRot.pitch) * 6;
  camera.position.z = Math.cos(camRot.yaw) * 8 * Math.cos(camRot.pitch);
  camera.lookAt(0, -1.5, 0);

  env.update(t);
  marduk.update(t, dt);
  renderer.render(scene, camera);
}
requestAnimationFrame(tick);

// Signal ready for external loading checks
window.__oracleReady = true;
