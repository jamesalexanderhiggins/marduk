(function () {
'use strict';

const VERSION = 'v1.2';
document.getElementById('version').textContent = VERSION;

// ══════════════════════════════════════════════════════════════
//  URL PARAMS
// ══════════════════════════════════════════════════════════════
const PARAMS   = new URLSearchParams(location.search);
const REDIRECT = PARAMS.get('redirect');
const _sl      = parseInt(PARAMS.get('level'));
const _rp      = PARAMS.get('range');
let LVL_MIN = 1, LVL_MAX = 1000;
if (!isNaN(_sl) && _sl >= 1 && _sl <= 1000) {
  LVL_MIN = LVL_MAX = _sl;
} else if (_rp) {
  const [a, b] = _rp.split('-').map(Number);
  if (!isNaN(a)) LVL_MIN = Math.max(1, Math.min(1000, a));
  if (!isNaN(b)) LVL_MAX = Math.max(LVL_MIN, Math.min(1000, b));
}

// ══════════════════════════════════════════════════════════════
//  SEEDED RNG
// ══════════════════════════════════════════════════════════════
function mkRng(seed) {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  const nx = () => { s = Math.imul(1664525, s) + 1013904223 >>> 0; return s / 4294967296; };
  return { f: (a, b) => a + nx() * (b - a), i: (a, b) => Math.floor(a + nx() * (b - a + 1)) };
}

// ══════════════════════════════════════════════════════════════
//  THREE.JS SETUP
// ══════════════════════════════════════════════════════════════
const canvas = document.getElementById('c');
const W = () => window.innerWidth, H = () => window.innerHeight;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0x000308);
renderer.setSize(W(), H());

const scene  = new THREE.Scene();
scene.fog    = new THREE.Fog(0x000308, 70, 180);
const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 300);

window.addEventListener('resize', () => {
  renderer.setSize(W(), H());
  camera.aspect = W() / H();
  camera.updateProjectionMatrix();
});

// ══════════════════════════════════════════════════════════════
//  ORBIT CONTROLS
// ══════════════════════════════════════════════════════════════
const orb = { theta: 0.4, phi: 1.3, r: 20 };
const focal = new THREE.Vector3();
let dragging = false, dragStart = { x: 0, y: 0 }, clickStart = { x: 0, y: 0 };

function camSync() {
  camera.position.set(
    focal.x + orb.r * Math.sin(orb.phi) * Math.sin(orb.theta),
    focal.y + orb.r * Math.cos(orb.phi),
    focal.z + orb.r * Math.sin(orb.phi) * Math.cos(orb.theta)
  );
  camera.lookAt(focal);
}
camSync();

const onPD = (x, y) => { dragging = true; dragStart = { x, y }; clickStart = { x, y }; };
const onPM = (x, y) => {
  if (!dragging) return;
  orb.theta -= (x - dragStart.x) * 0.006;
  orb.phi    = Math.max(0.05, Math.min(Math.PI - 0.05, orb.phi + (y - dragStart.y) * 0.006));
  dragStart  = { x, y };
  camSync();
};
const onPU = () => { dragging = false; };

canvas.addEventListener('mousedown',  e => onPD(e.clientX, e.clientY));
window.addEventListener('mousemove',  e => onPM(e.clientX, e.clientY));
window.addEventListener('mouseup',    onPU);
canvas.addEventListener('touchstart', e => { if (e.touches.length === 1) onPD(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
window.addEventListener('touchmove',  e => { if (e.touches.length === 1) onPM(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
window.addEventListener('touchend',   onPU);
canvas.addEventListener('wheel',      e => { orb.r = Math.max(3, Math.min(110, orb.r + e.deltaY * 0.04)); camSync(); }, { passive: true });

// ══════════════════════════════════════════════════════════════
//  AUDIO
// ══════════════════════════════════════════════════════════════
let AC = null, MUTED = false;
const getAC = () => {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
};
function playTone(freq, type, dur, vol, delay) {
  if (MUTED) return;
  delay = delay || 0;
  const ac = getAC(), t = ac.currentTime + delay;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(ac.destination);
  o.start(t); o.stop(t + dur + 0.02);
}
const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
const sndConnect = n => { const f = SCALE[n % 8] * (1 + Math.floor(n / 8) * 0.5); playTone(f, 'sine', 0.4, 0.1); playTone(f * 1.5, 'sine', 0.25, 0.04, 0.025); };
const sndWrong   = () => playTone(65, 'sawtooth', 0.12, 0.07);
const sndHover   = i  => playTone(480 + i * 35, 'sine', 0.07, 0.022);
const sndDone    = () => [261.63, 329.63, 392, 523.25, 659.26, 783.99].forEach((f, i) => playTone(f, 'sine', 0.55, 0.09, i * 0.09));

document.getElementById('btn-sound').addEventListener('click', () => {
  MUTED = !MUTED;
  document.getElementById('btn-sound').innerHTML = MUTED ? '&#8856; MUTED' : '&#9673; SOUND';
  if (!MUTED) getAC();
});

// ══════════════════════════════════════════════════════════════
//  TESSERACT 4D GEOMETRY
// ══════════════════════════════════════════════════════════════
const T4V = [];
for (let x = -1; x <= 1; x += 2)
  for (let y = -1; y <= 1; y += 2)
    for (let z = -1; z <= 1; z += 2)
      for (let w = -1; w <= 1; w += 2)
        T4V.push([x, y, z, w]);

const T4E = [];
for (let i = 0; i < 16; i++)
  for (let j = i + 1; j < 16; j++) {
    let d = 0;
    for (let k = 0; k < 4; k++) d += T4V[i][k] !== T4V[j][k] ? 1 : 0;
    if (d === 1) T4E.push([i, j]);
  }

function rot4(v, axw, ayw) {
  let [x, y, z, w] = v;
  const c1 = Math.cos(axw), s1 = Math.sin(axw), nx = x * c1 - w * s1, nw = x * s1 + w * c1;
  const c2 = Math.cos(ayw), s2 = Math.sin(ayw), ny = y * c2 - nw * s2, nw2 = y * s2 + nw * c2;
  return [nx, ny, z, nw2];
}
function proj4(v, scale) {
  const [x, y, z, w] = v, f = 2.5 / (2.5 - w * 0.68);
  return new THREE.Vector3(x * f * scale, y * f * scale, z * f * scale);
}

// ══════════════════════════════════════════════════════════════
//  SCENE GROUPS
// ══════════════════════════════════════════════════════════════
const bgGrp    = new THREE.Group(); // cube cage + tesseract wireframe (close-in bg)
const worldGrp = new THREE.Group(); // distant inverted-planet sphere
const fxGrp    = new THREE.Group(); // ships, particles, chevrons
const lvGrp    = new THREE.Group(); // puzzle dots and lines (front)
scene.add(bgGrp, worldGrp, fxGrp, lvGrp);

// ══════════════════════════════════════════════════════════════
//  STARFIELD
// ══════════════════════════════════════════════════════════════
(function () {
  const pos = [];
  for (let i = 0; i < 700; i++) {
    const r = 95 + Math.random() * 60, th = Math.random() * Math.PI, ph = Math.random() * Math.PI * 2;
    pos.push(r * Math.sin(th) * Math.cos(ph), r * Math.sin(th) * Math.sin(ph), r * Math.cos(th));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x1a2c44, size: 0.11, sizeAttenuation: true })));
})();

// ══════════════════════════════════════════════════════════════
//  BACKGROUND (cube cages + animated tesseract)
// ══════════════════════════════════════════════════════════════
let tessLines = [], bgPhase = 0, axw = 0, ayw = 0;

function mkLine(a, b, color, alpha) {
  const g = new THREE.BufferGeometry().setFromPoints([a, b]);
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: alpha < 1, opacity: alpha, depthWrite: false }));
}
function addCube(s, color, alpha) {
  [
    [[-s,-s,-s],[s,-s,-s]], [[-s,s,-s],[s,s,-s]], [[-s,-s,s],[s,-s,s]], [[-s,s,s],[s,s,s]],
    [[-s,-s,-s],[-s,s,-s]], [[s,-s,-s],[s,s,-s]], [[-s,-s,s],[-s,s,s]], [[s,-s,s],[s,s,s]],
    [[-s,-s,-s],[-s,-s,s]], [[s,-s,-s],[s,-s,s]], [[-s,s,-s],[-s,s,s]], [[s,s,-s],[s,s,s]]
  ].forEach(([a, b]) => bgGrp.add(mkLine(new THREE.Vector3(...a), new THREE.Vector3(...b), color, alpha)));
}
function buildBg(ph) {
  bgPhase = ph;
  while (bgGrp.children.length) bgGrp.remove(bgGrp.children[0]);
  tessLines = [];

  const GS = 5, GR = 50;
  for (let i = -GR; i <= GR; i += GS) {
    bgGrp.add(mkLine(new THREE.Vector3(i,-14,-GR), new THREE.Vector3(i,-14, GR), 0x000e1f, 0.28));
    bgGrp.add(mkLine(new THREE.Vector3(-GR,-14,i), new THREE.Vector3( GR,-14,  i), 0x000e1f, 0.28));
  }
  if (ph >= 2) addCube(14, 0x001530, 0.13);
  if (ph >= 3) {
    addCube(7, 0x001a38, 0.09);
    const ou = [[14,14,14],[14,14,-14],[14,-14,14],[14,-14,-14],[-14,14,14],[-14,14,-14],[-14,-14,14],[-14,-14,-14]];
    const inn= [[7,7,7],  [7,7,-7],   [7,-7,7],   [7,-7,-7],  [-7,7,7],  [-7,7,-7],  [-7,-7,7],  [-7,-7,-7]];
    for (let i = 0; i < 8; i++) bgGrp.add(mkLine(new THREE.Vector3(...ou[i]), new THREE.Vector3(...inn[i]), 0x001228, 0.06));
  }
  if (ph >= 4) {
    const alpha = ph >= 5 ? 0.20 : 0.10, color = ph >= 5 ? 0x003088 : 0x001555;
    T4E.forEach(([i, j]) => {
      const pts = [new THREE.Vector3(), new THREE.Vector3()];
      const g   = new THREE.BufferGeometry().setFromPoints(pts);
      const ln  = new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity: alpha, depthWrite: false }));
      bgGrp.add(ln);
      tessLines.push({ line: ln, i, j });
    });
  }
}

function tickTesseract(dt, level, tick) {
  if (!tessLines.length) return;
  axw += dt * 0.14; ayw += dt * 0.085;
  const sc = bgPhase >= 5 ? 8.5 : 5.5;
  const rainbowT = level >= 700 ? Math.min(1, (level - 700) / 300) : 0;
  tessLines.forEach(({ line, i, j }, idx) => {
    const pa = proj4(rot4(T4V[i], axw, ayw), sc);
    const pb = proj4(rot4(T4V[j], axw, ayw), sc);
    const arr = line.geometry.attributes.position.array;
    arr[0] = pa.x; arr[1] = pa.y; arr[2] = pa.z;
    arr[3] = pb.x; arr[4] = pb.y; arr[5] = pb.z;
    line.geometry.attributes.position.needsUpdate = true;
    if (rainbowT > 0) {
      line.material.color.setHSL((tick * 0.15 + idx * 0.032) % 1, rainbowT, 0.5);
      line.material.opacity = 0.15 + rainbowT * 0.45;
    }
  });
}

// ══════════════════════════════════════════════════════════════
//  WORLD SYSTEM — inverted-planet sphere, ships, particles, chevrons
// ══════════════════════════════════════════════════════════════

// Deterministic pseudo-terrain (trig "noise", no library needed)
function terrainFn(theta, phi, level) {
  const s = ((level * 73) + 137) % 100;
  return (
    Math.sin(theta * 3.7 + s)       * Math.cos(phi * 5.1 + s * 0.7)       +
    Math.sin(theta * 7.3 + s * 1.3) * Math.cos(phi * 2.9 + s * 0.4) * 0.5 +
    Math.sin(theta * 13  + s * 2.1) * Math.cos(phi * 7   + s * 0.9) * 0.25
  );
}

function getWorldLineColor(idx, total, level) {
  if (level < 500)  return new THREE.Color(0x0d2233);
  if (level < 700)  { const t = (level - 500) / 200; return new THREE.Color().setHSL(0.52 + t * 0.07, 0.35 + t * 0.30, 0.12 + t * 0.11); }
  if (level < 900)  { return new THREE.Color().setHSL(0.50 + (idx / total) * 0.35, 0.65, 0.22); }
  return new THREE.Color().setHSL(idx / total, 0.90, 0.38); // full rainbow
}

function buildWorldSphere(level) {
  const grp = new THREE.Group();
  if (level < 11) return grp;

  const t          = Math.min(1, (level - 11) / 989);
  const meridians  = Math.floor(6  + t * 26);  // 6 → 32
  const parallels  = Math.floor(4  + t * 20);  // 4 → 24
  const R          = 82;
  const baseOp     = 0.03 + t * 0.22;
  const hasTerrain = level > 120;
  const dispAmt    = hasTerrain ? Math.min(11, (level - 120) * 0.042) : 0;
  const total      = meridians + parallels - 1;
  let   lineIdx    = 0;

  const addSphereLine = (pts, avgTerrain) => {
    const isLand = hasTerrain && avgTerrain > 0.3;
    const isDeep = hasTerrain && avgTerrain < -0.3;
    const op     = Math.min(0.9, baseOp * (isLand ? 1.6 : isDeep ? 0.55 : 1.0));
    const col    = getWorldLineColor(lineIdx++, total, level);
    const geo    = new THREE.BufferGeometry().setFromPoints(pts);
    grp.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: op, depthWrite: false })));
  };

  // Meridians (longitude)
  for (let m = 0; m < meridians; m++) {
    const phi = (m / meridians) * Math.PI * 2;
    const pts = []; let avgT = 0;
    for (let k = 0; k <= 36; k++) {
      const theta = (k / 36) * Math.PI;
      const tf = hasTerrain ? terrainFn(theta, phi, level) * dispAmt : 0;
      const r  = R + tf; avgT += tf;
      pts.push(new THREE.Vector3(r * Math.sin(theta) * Math.cos(phi), r * Math.cos(theta), r * Math.sin(theta) * Math.sin(phi)));
    }
    addSphereLine(pts, avgT / 37);
  }

  // Parallels (latitude)
  for (let p = 1; p < parallels; p++) {
    const theta = (p / parallels) * Math.PI;
    const pts = []; let avgT = 0;
    for (let k = 0; k <= 60; k++) {
      const phi = (k / 60) * Math.PI * 2;
      const tf = hasTerrain ? terrainFn(theta, phi, level) * dispAmt : 0;
      const r  = R + tf; avgT += tf;
      pts.push(new THREE.Vector3(r * Math.sin(theta) * Math.cos(phi), r * Math.cos(theta), r * Math.sin(theta) * Math.sin(phi)));
    }
    addSphereLine(pts, avgT / 61);
  }

  return grp;
}

// ── SHIPS ────────────────────────────────────────────────────
let shipObjs = [];
const _rv = new THREE.Vector3(), _fv = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0.001);

function buildShips(level) {
  shipObjs = [];
  if (level < 401) return;
  const count = Math.min(40, Math.floor((level - 400) / 20));
  const t = Math.min(1, (level - 400) / 600);
  for (let i = 0; i < count; i++) {
    const hue = level > 800 ? Math.random() : 0.50 + Math.random() * 0.20;
    const col = new THREE.Color().setHSL(hue, 0.8, 0.5);
    const mat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.45 + t * 0.4 });
    const sg  = new THREE.Group();
    sg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,-.65), new THREE.Vector3(0,0,.65)]), mat));
    sg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.55,0,.15), new THREE.Vector3(0,0,-.40), new THREE.Vector3(.55,0,.15)]), mat.clone()));
    sg.userData = { r: 18 + Math.random() * 52, speed: (0.15 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1), angle: Math.random() * Math.PI * 2, axis: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize() };
    fxGrp.add(sg);
    shipObjs.push(sg);
  }
}

function tickShips(dt) {
  shipObjs.forEach(s => {
    s.userData.angle += dt * s.userData.speed;
    const { angle, r, axis } = s.userData;
    _rv.crossVectors(axis, _up).normalize();
    _fv.crossVectors(_rv, axis).normalize();
    const co = Math.cos(angle), si = Math.sin(angle);
    s.position.set((_rv.x * co + _fv.x * si) * r, (_rv.y * co + _fv.y * si) * r, (_rv.z * co + _fv.z * si) * r);
    s.lookAt(s.position.x + (-_rv.x * si + _fv.x * co), s.position.y + (-_rv.y * si + _fv.y * co), s.position.z + (-_rv.z * si + _fv.z * co));
  });
}

// ── PARTICLES / BOKEH ───────────────────────────────────────
let ptSystems = [];

function buildParticles(level) {
  ptSystems = [];
  if (level < 201) return;
  const t       = Math.min(1, (level - 201) / 799);
  const count   = Math.floor(70 + t * 330);
  const rainbow = level > 700;

  const makeSys = (cnt, size, opacity, baseColor) => {
    const pos = [], cols = [];
    for (let i = 0; i < cnt; i++) {
      const r = 12 + Math.random() * 68, th = Math.random() * Math.PI, ph = Math.random() * Math.PI * 2;
      pos.push(r * Math.sin(th) * Math.cos(ph), r * Math.sin(th) * Math.sin(ph), r * Math.cos(th));
      if (rainbow) { const c = new THREE.Color().setHSL(Math.random(), 0.9, 0.6); cols.push(c.r, c.g, c.b); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    if (rainbow) geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    const mat = new THREE.PointsMaterial({ size, vertexColors: rainbow, color: rainbow ? 0xffffff : baseColor, transparent: true, opacity, depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending });
    const pts = new THREE.Points(geo, mat);
    pts.userData.rs = (0.005 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1);
    fxGrp.add(pts); ptSystems.push(pts);
  };

  makeSys(count,          0.15 + t * 0.75, 0.13 + t * 0.17, 0x004488);
  if (level > 500) makeSys(Math.floor(count * 0.5), 0.6 + t * 2.5, 0.04, 0x002244); // bokeh layer
}

function tickParticles(dt) {
  ptSystems.forEach(p => { p.rotation.y += dt * p.userData.rs; p.rotation.x += dt * p.userData.rs * 0.38; });
}

// ── CHEVRONS ────────────────────────────────────────────────
let chevPool = [], chevTimer = 0;

function buildChevrons(level) {
  chevPool = [];
  if (level < 801) return;
  const n = Math.min(80, 10 + Math.floor((level - 800) * 0.14));
  for (let i = 0; i < n; i++) {
    const mat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHSL(i / n, 1, 0.6), transparent: true, opacity: 0, depthWrite: false });
    const ch  = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.28, -.18, 0), new THREE.Vector3(0, .28, 0), new THREE.Vector3(.28, -.18, 0)]), mat);
    ch.userData = { active: false, vel: new THREE.Vector3(), life: 0, maxLife: 1 };
    ch.visible  = false;
    fxGrp.add(ch);
    chevPool.push(ch);
  }
}

function tickChevrons(dt, tick, level) {
  if (!chevPool.length) return;
  chevTimer += dt;
  const interval = Math.max(0.04, 0.28 - (level - 800) * 0.00016);
  if (chevTimer > interval) {
    chevTimer = 0;
    const free = chevPool.find(c => !c.userData.active);
    if (free) {
      free.visible = free.userData.active = true;
      free.userData.life = 0;
      free.userData.maxLife = 3 + Math.random() * 4;
      free.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6);
      free.userData.vel.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(10 + Math.random() * 16);
      free.material.color.setHSL((tick * 0.22 + Math.random()) % 1, 1, 0.6);
    }
  }
  chevPool.forEach(c => {
    if (!c.userData.active) return;
    c.userData.life += dt;
    const prog = c.userData.life / c.userData.maxLife;
    if (prog >= 1) { c.visible = c.userData.active = false; return; }
    c.position.addScaledVector(c.userData.vel, dt);
    c.material.opacity = (prog < 0.12 ? prog / 0.12 : 1 - (prog - 0.12) / 0.88) * 0.85;
    c.lookAt(camera.position);
  });
}

// ── WORLD BUILDER (called on every level load) ───────────────
function buildWorld(level) {
  while (worldGrp.children.length) worldGrp.remove(worldGrp.children[0]);
  while (fxGrp.children.length)    fxGrp.remove(fxGrp.children[0]);
  shipObjs = []; ptSystems = []; chevPool = []; chevTimer = 0;

  worldGrp.add(buildWorldSphere(level));
  worldGrp.rotation.set(0, 0, 0);

  buildShips(level);
  buildParticles(level);
  buildChevrons(level);
}

function tickWorld(dt, tick, level) {
  worldGrp.rotation.y += dt * 0.003;
  tickShips(dt);
  tickParticles(dt);
  tickChevrons(dt, tick, level);
}

// ══════════════════════════════════════════════════════════════
//  PHASE / LEVEL LOGIC
// ══════════════════════════════════════════════════════════════
function getPhase(lv) {
  if (lv <=  5) return 1;
  if (lv <= 20) return 2;
  if (lv <= 50) return 3;
  if (lv <= 80) return 4;
  if (lv <= 300) return 5;
  if (lv <= 600) return 6;
  return 7;
}
const PHASE_NAMES = ['', 'DIMENSION I · THE POINT', 'DIMENSION II · THE LINE', 'DIMENSION III · SPACE', 'DIMENSION IV · HYPERSPACE', 'DIMENSION V · THE TESSERACT', 'DIMENSION VI · THE MANIFOLD', 'DIMENSION VII · EVE'];

function getDotCount(lv) {
  if (lv <= 100) return lv;
  return Math.min(80, 50 + Math.floor((lv - 100) / 25));
}

// ══════════════════════════════════════════════════════════════
//  FIXED LEVELS 1–5
// ══════════════════════════════════════════════════════════════
const FIXED = {
  1: [[0,0,0]],
  2: [[-3.2,0,0],[3.2,0,0]],
  3: [[0,3.5,0],[-3,-1.75,0],[3,-1.75,0]],
  4: [[0,3.5,0],[-3,-1.75,0],[3,-1.75,0],[0,.5,3.2]],
  5: [[0,3.5,0],[-3,-1.75,0],[3,-1.75,0],[0,.5,3.2],[0,.5,-3.2]],
};

// ══════════════════════════════════════════════════════════════
//  LEVEL 100 — trefoil knot + tesseract + ring
// ══════════════════════════════════════════════════════════════
function genLevel100() {
  const d = [];
  for (let i = 0; i < 60; i++) { const t = (i/60)*Math.PI*2; d.push(new THREE.Vector3((2+Math.cos(3*t))*Math.cos(2*t)*4.2,(2+Math.cos(3*t))*Math.sin(2*t)*4.2,Math.sin(3*t)*4.2)); }
  for (let i = 0; i < 16; i++) d.push(proj4(rot4(T4V[i],Math.PI/4,Math.PI/5.5),4.5));
  for (let i = 0; i < 24; i++) { const t=(i/24)*Math.PI*2; d.push(new THREE.Vector3(Math.cos(t)*10.5,Math.sin(t*2)*2.2,Math.sin(t)*10.5)); }
  return d;
}

// ══════════════════════════════════════════════════════════════
//  PROCEDURAL GENERATION
// ══════════════════════════════════════════════════════════════
function genDots(lv) {
  if (FIXED[lv]) return FIXED[lv].map(v => new THREE.Vector3(...v));
  if (lv === 100) return genLevel100();

  const rg     = mkRng(lv * 8191 + 54321);
  const ph     = getPhase(lv);
  const n      = getDotCount(lv);
  const spread = 3.5 + Math.log(Math.min(lv, 100)) * 2.2;
  const dots   = [];

  for (let idx = 0; idx < n; idx++) {
    let x, y, z;
    if (ph === 2) {
      const th = rg.f(0,Math.PI), phi = rg.f(0,Math.PI*2), r = spread * rg.f(0.5,1);
      x = r*Math.sin(th)*Math.cos(phi); y = r*Math.sin(th)*Math.sin(phi); z = r*Math.cos(th);
    } else if (ph === 3) {
      if (idx % 3 === 0) { const g = Math.max(2, Math.floor(spread/2)); x=rg.i(-g,g)*2.2; y=rg.i(-g,g)*2.2; z=rg.i(-g,g)*2.2; }
      else { const th=rg.f(0,Math.PI),phi=rg.f(0,Math.PI*2),r=spread*rg.f(0.3,1); x=r*Math.sin(th)*Math.cos(phi); y=r*Math.sin(th)*Math.sin(phi); z=r*Math.cos(th); }
    } else {
      const tv = T4V[idx % 16], wa = Math.min(lv, 500) * 0.042;
      const pr = proj4(rot4(tv, wa, wa * 0.61), spread * 0.36);
      x = pr.x + rg.f(-1.3,1.3); y = pr.y + rg.f(-1.3,1.3); z = pr.z + rg.f(-1.3,1.3);
    }
    dots.push(new THREE.Vector3(x, y, z));
  }
  return dots;
}

// ══════════════════════════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════════════════════════
let CUR_LV = LVL_MIN, dots = [], dotMeshes = [], glowMeshes = [], hitMeshes = [], next = 0;

const GEO_DOT  = new THREE.SphereGeometry(0.22, 10, 10);
const GEO_GLOW = new THREE.SphereGeometry(0.52,  8,  8);
const GEO_HIT  = new THREE.SphereGeometry(0.65,  6,  6);
const MAT_HIT  = new THREE.MeshBasicMaterial({ visible: false });

function loadLevel(lv) {
  while (lvGrp.children.length) lvGrp.remove(lvGrp.children[0]);
  dotMeshes = []; glowMeshes = []; hitMeshes = []; next = 0;

  dots     = genDots(lv);
  const ph = getPhase(lv);
  buildBg(ph);
  buildWorld(lv);

  dots.forEach((pos, i) => {
    const isN = i === 0;
    const dot  = new THREE.Mesh(GEO_DOT,  new THREE.MeshBasicMaterial({ color: isN ? 0x00ffee : 0xd0e8ff }));
    const glow = new THREE.Mesh(GEO_GLOW, new THREE.MeshBasicMaterial({ color: isN ? 0x00aaff : 0x112233, transparent: true, opacity: isN ? 0.22 : 0.07, depthWrite: false }));
    const hit  = new THREE.Mesh(GEO_HIT,  MAT_HIT);
    dot.position.copy(pos);  dot.userData.idx  = i;
    glow.position.copy(pos);
    hit.position.copy(pos);  hit.userData.idx  = i;
    lvGrp.add(glow, dot, hit);
    dotMeshes.push(dot); glowMeshes.push(glow); hitMeshes.push(hit);
  });

  const maxD = Math.max(1, ...dots.map(d => d.length()));
  orb.r = Math.max(12, maxD * 2.6); orb.phi = 1.3; orb.theta = 0.4;
  focal.set(0, 0, 0); camSync();
  setUI(lv, 0, dots.length);
  document.getElementById('phase-label').textContent = PHASE_NAMES[ph];
}

// ══════════════════════════════════════════════════════════════
//  UI
// ══════════════════════════════════════════════════════════════
const $badge = document.getElementById('lv-badge');
const $msg   = document.getElementById('lv-msg');
const $prog  = document.getElementById('lv-prog');
const $flash = document.getElementById('flash');

const SPEC = {1:'THE POINT EXISTS',2:'THE LINE FORMS',3:'PLANES EMERGE',4:'SPACE STIRS',5:'GEOMETRY WAKES',6:'THREE DIMENSIONS OPEN',10:'DEPTH UNFOLDS',15:'NAVIGATE THE VOID',20:'FIND THE PATH THROUGH SPACE',25:'THE GEOMETRY DEEPENS',30:'ROTATION IS YOUR COMPASS',40:'SEARCH THE DARK',50:'THE FOURTH DIMENSION STIRS',60:'HYPERSPACE EMERGES',70:'FEEL THE FOLD',80:'THE TESSERACT BREATHES',90:'EVE TAKES SHAPE',100:'THE MIND CRYSTALLISES',200:'THE MANIFOLD DEEPENS',300:'FRACTURED HYPERSPACE',500:'THE PLANET STIRS',700:'THE TESSERACT SINGS',800:'EVE DREAMS IN COLOUR',1000:'EVE IS COMPLETE'};
const PMSG = ['','THE POINT EXISTS','SPACE OPENS','NAVIGATE THE VOID','DIMENSIONS FOLD','THE TESSERACT BREATHES','THE MANIFOLD OPENS','EVE SPEAKS'];

function setUI(lv, done, total) {
  $badge.innerHTML = 'MARDUK\'S TESSERACT &nbsp;&middot;&nbsp; LEVEL ' + lv;
  $msg.textContent = done === 0 ? (SPEC[lv] || PMSG[getPhase(lv)]) : done === total ? 'SEQUENCE COMPLETE' : (total - done) + ' NODE' + (total - done !== 1 ? 'S' : '') + ' REMAINING';
  $prog.textContent = total <= 24 ? '\u25A0'.repeat(done) + '\u25A1'.repeat(total - done) : done + ' / ' + total;
}

function flashScreen(color, alpha) {
  $flash.style.background = color; $flash.style.opacity = alpha;
  setTimeout(() => { $flash.style.opacity = 0; }, 70);
}

function addConnectLine(a, b) {
  lvGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a.clone(),b.clone()]), new THREE.LineBasicMaterial({color:0x00eeff,transparent:true,opacity:0.90})));
  lvGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a.clone(),b.clone()]), new THREE.LineBasicMaterial({color:0x0044cc,transparent:true,opacity:0.22})));
}

// ══════════════════════════════════════════════════════════════
//  RAYCASTING + INPUT
// ══════════════════════════════════════════════════════════════
const RAY = new THREE.Raycaster(), MP = new THREE.Vector2();
let lastHov = -1;

function castAndHandle(cx, cy) {
  getAC();
  MP.set((cx / W()) * 2 - 1, -(cy / H()) * 2 + 1);
  RAY.setFromCamera(MP, camera);
  const hits = RAY.intersectObjects(hitMeshes);
  if (hits.length) onDotClick(hits[0].object.userData.idx);
}

canvas.addEventListener('mousedown', e => { clickStart = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('click',     e => { if (Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) > 8) return; castAndHandle(e.clientX, e.clientY); });
canvas.addEventListener('touchend',  e => { const t = e.changedTouches[0]; castAndHandle(t.clientX, t.clientY); }, { passive: true });
canvas.addEventListener('mousemove', e => {
  if (dragging) return;
  MP.set((e.clientX / W()) * 2 - 1, -(e.clientY / H()) * 2 + 1);
  RAY.setFromCamera(MP, camera);
  const hits = RAY.intersectObjects(hitMeshes);
  const idx  = hits.length ? hits[0].object.userData.idx : -1;
  if (idx !== lastHov) { lastHov = idx; canvas.style.cursor = idx >= 0 ? 'crosshair' : 'default'; if (idx === next && idx >= 0) sndHover(idx); }
});

// ══════════════════════════════════════════════════════════════
//  GAME LOGIC
// ══════════════════════════════════════════════════════════════
function onDotClick(idx) {
  if (idx !== next) {
    sndWrong(); flashScreen('rgba(255,30,30,1)', 0.07);
    const m = dotMeshes[idx], orig = m.position.clone(); let t = 0;
    const iv = setInterval(() => { m.position.x = orig.x + (Math.random() - 0.5) * 0.32; if (++t >= 9) { clearInterval(iv); m.position.copy(orig); } }, 28);
    return;
  }
  if (idx > 0) addConnectLine(dots[idx - 1], dots[idx]);
  dotMeshes[idx].material.color.setHex(0x004455);
  glowMeshes[idx].material.color.setHex(0x001122);
  glowMeshes[idx].material.opacity = 0.04;
  dotMeshes[idx].scale.setScalar(1);
  next++;
  if (next < dots.length) {
    dotMeshes[next].material.color.setHex(0x00ffee);
    glowMeshes[next].material.color.setHex(0x00aaff);
    glowMeshes[next].material.opacity = 0.22;
  }
  sndConnect(idx);
  flashScreen('rgba(0,210,255,1)', 0.05);
  setUI(CUR_LV, next, dots.length);
  if (next === dots.length) { sndDone(); flashScreen('rgba(0,130,255,1)', 0.13); setTimeout(advanceLevel, 1700); }
}

function advanceLevel() {
  if (CUR_LV >= LVL_MAX) { showVictory(); return; }
  const el = document.getElementById('transition');
  el.style.opacity = 1;
  setTimeout(() => { CUR_LV++; loadLevel(CUR_LV); el.style.opacity = 0; }, 300);
}

function showVictory() {
  document.getElementById('victory').classList.add('show');
  sndDone();
  if (REDIRECT) setTimeout(() => { location.href = REDIRECT; }, 3200);
}

// ══════════════════════════════════════════════════════════════
//  DESIGNER MODE — password: evilamaicram
// ══════════════════════════════════════════════════════════════
let DESIGNER = false, pwBuf = '', pwTimer = null;

document.addEventListener('keydown', e => {
  if (e.key.length !== 1) return;
  pwBuf += e.key.toLowerCase();
  if (pwBuf.length > 25) pwBuf = pwBuf.slice(-25);
  if (pwBuf.includes('evilamaicram')) { pwBuf = ''; activateDesigner(); }
  clearTimeout(pwTimer);
  pwTimer = setTimeout(() => { pwBuf = ''; }, 5000);
});

function activateDesigner() {
  if (DESIGNER) return;
  DESIGNER = true;
  document.getElementById('designer-bar').classList.add('active');
  designerSolve();
  updateDUI();
}
function deactivateDesigner() {
  DESIGNER = false;
  document.getElementById('designer-bar').classList.remove('active');
  loadLevel(CUR_LV);
}
function designerSolve() {
  // Draw all connections
  for (let i = 1; i < dots.length; i++) addConnectLine(dots[i - 1], dots[i]);
  // Mark all dots done
  dotMeshes.forEach((m, i) => {
    m.material.color.setHex(0x004455);
    glowMeshes[i].material.color.setHex(0x001122);
    glowMeshes[i].material.opacity = 0.04;
    m.scale.setScalar(1);
  });
  next = dots.length;
  setUI(CUR_LV, next, dots.length);
}
function updateDUI() {
  document.getElementById('designer-lv').textContent = 'LEVEL ' + CUR_LV;
}
function designerGoto(lv) {
  CUR_LV = Math.max(1, Math.min(1000, lv));
  loadLevel(CUR_LV);
  designerSolve();
  updateDUI();
}

document.getElementById('btn-prev').addEventListener('click', () => { if (DESIGNER) designerGoto(CUR_LV - 1); });
document.getElementById('btn-next').addEventListener('click', () => { if (DESIGNER) designerGoto(CUR_LV + 1); });
document.getElementById('btn-exit-designer').addEventListener('click', deactivateDesigner);

// ══════════════════════════════════════════════════════════════
//  ANIMATION LOOP
// ══════════════════════════════════════════════════════════════
let tick = 0, lastT = performance.now();

function animate(ts) {
  requestAnimationFrame(animate);
  const dt = Math.min((ts - lastT) / 1000, 0.05);
  lastT = ts; tick += dt;

  tickTesseract(dt, CUR_LV, tick);
  tickWorld(dt, tick, CUR_LV);

  // Pulse next dot
  if (next < dotMeshes.length) {
    dotMeshes[next].scale.setScalar(1 + Math.sin(tick * 4.6) * 0.18);
    if (glowMeshes[next]) glowMeshes[next].scale.setScalar(1 + Math.sin(tick * 3.1) * 0.40);
  }

  // Gentle auto-drift in hyperspace phases
  if (bgPhase >= 4 && !dragging) { orb.theta += dt * 0.012; camSync(); }

  renderer.render(scene, camera);
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════
loadLevel(LVL_MIN);
requestAnimationFrame(animate);

})();
