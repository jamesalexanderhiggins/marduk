(function () {
'use strict';

// ══════════════════════════════════════════════════════════════
//  URL PARAMS
// ══════════════════════════════════════════════════════════════
const PARAMS   = new URLSearchParams(location.search);
const REDIRECT = PARAMS.get('redirect');
const _sl      = parseInt(PARAMS.get('level'));
const _rp      = PARAMS.get('range');
let LVL_MIN = 1, LVL_MAX = 100;
if (!isNaN(_sl) && _sl >= 1 && _sl <= 100) {
  LVL_MIN = LVL_MAX = _sl;
} else if (_rp) {
  const [a, b] = _rp.split('-').map(Number);
  if (!isNaN(a)) LVL_MIN = Math.max(1, Math.min(100, a));
  if (!isNaN(b)) LVL_MAX = Math.max(LVL_MIN, Math.min(100, b));
}

// ══════════════════════════════════════════════════════════════
//  SEEDED RNG
// ══════════════════════════════════════════════════════════════
function mkRng(seed) {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  const nx = () => {
    s = Math.imul(1664525, s) + 1013904223 >>> 0;
    return s / 4294967296;
  };
  return {
    f : (a, b) => a + nx() * (b - a),
    i : (a, b) => Math.floor(a + nx() * (b - a + 1))
  };
}

// ══════════════════════════════════════════════════════════════
//  THREE.JS CORE
// ══════════════════════════════════════════════════════════════
const canvas = document.getElementById('c');
const W = () => window.innerWidth;
const H = () => window.innerHeight;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0x000308);
renderer.setSize(W(), H());

const scene  = new THREE.Scene();
scene.fog    = new THREE.Fog(0x000308, 60, 140);

const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 200);

window.addEventListener('resize', () => {
  renderer.setSize(W(), H());
  camera.aspect = W() / H();
  camera.updateProjectionMatrix();
});

// ══════════════════════════════════════════════════════════════
//  ORBIT CONTROLS  (manual)
// ══════════════════════════════════════════════════════════════
const orb      = { theta: 0.4, phi: 1.3, r: 20 };
const focal    = new THREE.Vector3();
let dragging   = false;
let dragStart  = { x: 0, y: 0 };
let clickStart = { x: 0, y: 0 };

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
canvas.addEventListener('wheel',      e => {
  orb.r = Math.max(3, Math.min(110, orb.r + e.deltaY * 0.04));
  camSync();
}, { passive: true });

// ══════════════════════════════════════════════════════════════
//  AUDIO  (Web Audio API — synthesised, no samples)
// ══════════════════════════════════════════════════════════════
let AC = null;
const getAC = () => {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
};

function playTone(freq, type, dur, vol, delay) {
  delay = delay || 0;
  const ac = getAC();
  const t  = ac.currentTime + delay;
  const o  = ac.createOscillator();
  const g  = ac.createGain();
  o.type            = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  g.connect(ac.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];

function sndConnect(n) {
  const octave = 1 + Math.floor(n / 8) * 0.5;
  const freq   = SCALE[n % 8] * octave;
  playTone(freq,       'sine', 0.4,  0.10);
  playTone(freq * 1.5, 'sine', 0.25, 0.04, 0.025);
}

function sndWrong()  { playTone(65, 'sawtooth', 0.12, 0.07); }
function sndHover(i) { playTone(480 + i * 35, 'sine', 0.07, 0.022); }
function sndDone() {
  [261.63, 329.63, 392.0, 523.25, 659.26, 783.99].forEach(
    (f, i) => playTone(f, 'sine', 0.55, 0.09, i * 0.09)
  );
}

// ══════════════════════════════════════════════════════════════
//  TESSERACT GEOMETRY  (4D hypercube)
// ══════════════════════════════════════════════════════════════

// 16 vertices: all (±1, ±1, ±1, ±1)
const T4V = [];
for (let x = -1; x <= 1; x += 2)
  for (let y = -1; y <= 1; y += 2)
    for (let z = -1; z <= 1; z += 2)
      for (let w = -1; w <= 1; w += 2)
        T4V.push([x, y, z, w]);

// 32 edges: vertices differing in exactly one coordinate
const T4E = [];
for (let i = 0; i < 16; i++)
  for (let j = i + 1; j < 16; j++) {
    let d = 0;
    for (let k = 0; k < 4; k++) d += (T4V[i][k] !== T4V[j][k]) ? 1 : 0;
    if (d === 1) T4E.push([i, j]);
  }

// Rotate in XW then YW planes
function rot4(v, axw, ayw) {
  let [x, y, z, w] = v;
  const c1 = Math.cos(axw), s1 = Math.sin(axw);
  const nx  = x * c1 - w * s1;
  const nw  = x * s1 + w * c1;
  const c2  = Math.cos(ayw), s2 = Math.sin(ayw);
  const ny  = y * c2 - nw * s2;
  const nw2 = y * s2 + nw * c2;
  return [nx, ny, z, nw2];
}

// Perspective-project from 4D to 3D
function proj4(v, scale) {
  const [x, y, z, w] = v;
  const f = 2.5 / (2.5 - w * 0.68);
  return new THREE.Vector3(x * f * scale, y * f * scale, z * f * scale);
}

// ══════════════════════════════════════════════════════════════
//  SCENE GROUPS
// ══════════════════════════════════════════════════════════════
const bgGrp = new THREE.Group();
const lvGrp = new THREE.Group();
scene.add(bgGrp, lvGrp);

// ══════════════════════════════════════════════════════════════
//  STARFIELD
// ══════════════════════════════════════════════════════════════
(function buildStars() {
  const pos = [];
  for (let i = 0; i < 600; i++) {
    const r  = 85 + Math.random() * 55;
    const th = Math.random() * Math.PI;
    const ph = Math.random() * Math.PI * 2;
    pos.push(
      r * Math.sin(th) * Math.cos(ph),
      r * Math.sin(th) * Math.sin(ph),
      r * Math.cos(th)
    );
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo,
    new THREE.PointsMaterial({ color: 0x1a2c44, size: 0.11, sizeAttenuation: true })
  ));
})();

// ══════════════════════════════════════════════════════════════
//  BACKGROUND BUILDER
// ══════════════════════════════════════════════════════════════
let tessLines = [];
let bgPhase   = 0;
let axw = 0, ayw = 0;

function makeLine(a, b, color, alpha) {
  const g = new THREE.BufferGeometry().setFromPoints([a, b]);
  return new THREE.Line(g,
    new THREE.LineBasicMaterial({ color, transparent: alpha < 1, opacity: alpha, depthWrite: false })
  );
}

function buildBg(ph) {
  bgPhase = ph;
  while (bgGrp.children.length) bgGrp.remove(bgGrp.children[0]);
  tessLines = [];

  // Grid floor — always present
  const GS = 5, GR = 50;
  for (let i = -GR; i <= GR; i += GS) {
    bgGrp.add(makeLine(new THREE.Vector3(i, -14, -GR), new THREE.Vector3(i, -14,  GR), 0x000e1f, 0.30));
    bgGrp.add(makeLine(new THREE.Vector3(-GR, -14, i), new THREE.Vector3( GR, -14,  i), 0x000e1f, 0.30));
  }

  if (ph >= 2) addCube(14, 0x001530, 0.14);
  if (ph >= 3) addCube(7,  0x001a38, 0.10);

  // Vertex connectors between inner and outer cube (phase 3+)
  if (ph >= 3) {
    const outer = [[ 14, 14, 14],[ 14, 14,-14],[ 14,-14, 14],[ 14,-14,-14],[-14, 14, 14],[-14, 14,-14],[-14,-14, 14],[-14,-14,-14]];
    const inner = [[  7,  7,  7],[  7,  7, -7],[  7, -7,  7],[  7, -7, -7],[ -7,  7,  7],[ -7,  7, -7],[ -7, -7,  7],[ -7, -7, -7]];
    for (let i = 0; i < 8; i++) {
      bgGrp.add(makeLine(new THREE.Vector3(...outer[i]), new THREE.Vector3(...inner[i]), 0x001228, 0.07));
    }
  }

  // Animated tesseract wireframe (phase 4+)
  if (ph >= 4) {
    const alpha = ph >= 5 ? 0.22 : 0.11;
    const color = ph >= 5 ? 0x003088 : 0x001555;
    T4E.forEach(([i, j]) => {
      const pts = [new THREE.Vector3(), new THREE.Vector3()];
      const g   = new THREE.BufferGeometry().setFromPoints(pts);
      const ln  = new THREE.Line(g,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: alpha, depthWrite: false })
      );
      bgGrp.add(ln);
      tessLines.push({ line: ln, i, j });
    });
  }
}

function addCube(s, color, alpha) {
  const edges = [
    [[-s,-s,-s],[s,-s,-s]], [[-s,s,-s],[s,s,-s]], [[-s,-s,s],[s,-s,s]], [[-s,s,s],[s,s,s]],
    [[-s,-s,-s],[-s,s,-s]], [[s,-s,-s],[s,s,-s]], [[-s,-s,s],[-s,s,s]], [[s,-s,s],[s,s,s]],
    [[-s,-s,-s],[-s,-s,s]], [[s,-s,-s],[s,-s,s]], [[-s,s,-s],[-s,s,s]], [[s,s,-s],[s,s,s]]
  ];
  edges.forEach(([a, b]) =>
    bgGrp.add(makeLine(new THREE.Vector3(...a), new THREE.Vector3(...b), color, alpha))
  );
}

function tickTesseract(dt) {
  if (!tessLines.length) return;
  axw += dt * 0.14;
  ayw += dt * 0.085;
  const sc = bgPhase >= 5 ? 8.5 : 5.5;
  tessLines.forEach(({ line, i, j }) => {
    const pa  = proj4(rot4(T4V[i], axw, ayw), sc);
    const pb  = proj4(rot4(T4V[j], axw, ayw), sc);
    const arr = line.geometry.attributes.position.array;
    arr[0] = pa.x; arr[1] = pa.y; arr[2] = pa.z;
    arr[3] = pb.x; arr[4] = pb.y; arr[5] = pb.z;
    line.geometry.attributes.position.needsUpdate = true;
  });
}

// ══════════════════════════════════════════════════════════════
//  LEVEL PHASE
// ══════════════════════════════════════════════════════════════
function getPhase(lv) {
  if (lv <=  5) return 1;
  if (lv <= 20) return 2;
  if (lv <= 50) return 3;
  if (lv <= 80) return 4;
  return 5;
}

const PHASE_NAMES = [
  '',
  'DIMENSION I · THE POINT',
  'DIMENSION II · THE LINE',
  'DIMENSION III · SPACE',
  'DIMENSION IV · HYPERSPACE',
  'DIMENSION V · THE TESSERACT'
];

// ══════════════════════════════════════════════════════════════
//  FIXED LEVELS  (1–5)
// ══════════════════════════════════════════════════════════════
const FIXED = {
  1: [[0, 0, 0]],
  2: [[-3.2, 0, 0], [3.2, 0, 0]],
  3: [[0, 3.5, 0], [-3.0, -1.75, 0], [3.0, -1.75, 0]],
  4: [[0, 3.5, 0], [-3.0, -1.75, 0], [3.0, -1.75, 0], [0, 0.5, 3.2]],
  5: [[0, 3.5, 0], [-3.0, -1.75, 0], [3.0, -1.75, 0], [0, 0.5, 3.2], [0, 0.5, -3.2]],
};

// ══════════════════════════════════════════════════════════════
//  LEVEL 100 — TREFOIL KNOT + TESSERACT + RING
// ══════════════════════════════════════════════════════════════
function genLevel100() {
  const dots = [];
  for (let i = 0; i < 60; i++) {           // trefoil knot
    const t = (i / 60) * Math.PI * 2;
    dots.push(new THREE.Vector3(
      (2 + Math.cos(3 * t)) * Math.cos(2 * t) * 4.2,
      (2 + Math.cos(3 * t)) * Math.sin(2 * t) * 4.2,
      Math.sin(3 * t) * 4.2
    ));
  }
  for (let i = 0; i < 16; i++) {           // tesseract vertices
    dots.push(proj4(rot4(T4V[i], Math.PI / 4, Math.PI / 5.5), 4.5));
  }
  for (let i = 0; i < 24; i++) {           // great-circle ring
    const t = (i / 24) * Math.PI * 2;
    dots.push(new THREE.Vector3(Math.cos(t) * 10.5, Math.sin(t * 2) * 2.2, Math.sin(t) * 10.5));
  }
  return dots; // 100 total
}

// ══════════════════════════════════════════════════════════════
//  PROCEDURAL LEVEL GENERATION
// ══════════════════════════════════════════════════════════════
function genDots(lv) {
  if (FIXED[lv]) return FIXED[lv].map(v => new THREE.Vector3(...v));
  if (lv === 100) return genLevel100();

  const rg     = mkRng(lv * 8191 + 54321);
  const ph     = getPhase(lv);
  const n      = lv;
  const spread = 3.5 + Math.log(lv) * 2.2;
  const dots   = [];

  for (let idx = 0; idx < n; idx++) {
    let x, y, z;

    if (ph === 2) {
      const th  = rg.f(0, Math.PI), phi = rg.f(0, Math.PI * 2), r = spread * rg.f(0.5, 1.0);
      x = r * Math.sin(th) * Math.cos(phi);
      y = r * Math.sin(th) * Math.sin(phi);
      z = r * Math.cos(th);

    } else if (ph === 3) {
      if (idx % 3 === 0) {
        const g = Math.max(2, Math.floor(spread / 2));
        x = rg.i(-g, g) * 2.2;
        y = rg.i(-g, g) * 2.2;
        z = rg.i(-g, g) * 2.2;
      } else {
        const th = rg.f(0, Math.PI), phi = rg.f(0, Math.PI * 2), r = spread * rg.f(0.3, 1.0);
        x = r * Math.sin(th) * Math.cos(phi);
        y = r * Math.sin(th) * Math.sin(phi);
        z = r * Math.cos(th);
      }

    } else {
      const tv = T4V[idx % 16];
      const wa = lv * 0.042;
      const pr = proj4(rot4(tv, wa, wa * 0.61), spread * 0.36);
      x = pr.x + rg.f(-1.3, 1.3);
      y = pr.y + rg.f(-1.3, 1.3);
      z = pr.z + rg.f(-1.3, 1.3);
    }

    dots.push(new THREE.Vector3(x, y, z));
  }

  return dots;
}

// ══════════════════════════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════════════════════════
let CUR_LV     = LVL_MIN;
let dots       = [];
let dotMeshes  = [];
let glowMeshes = [];
let hitMeshes  = [];
let next       = 0;

const GEO_DOT  = new THREE.SphereGeometry(0.22, 10, 10);
const GEO_GLOW = new THREE.SphereGeometry(0.52, 8, 8);
const GEO_HIT  = new THREE.SphereGeometry(0.65, 6, 6);
const MAT_HIT  = new THREE.MeshBasicMaterial({ visible: false });

function loadLevel(lv) {
  while (lvGrp.children.length) lvGrp.remove(lvGrp.children[0]);
  dotMeshes = []; glowMeshes = []; hitMeshes = []; next = 0;

  dots     = genDots(lv);
  const ph = getPhase(lv);
  buildBg(ph);

  dots.forEach((pos, i) => {
    const isNext = i === 0;

    const dotMat = new THREE.MeshBasicMaterial({ color: isNext ? 0x00ffee : 0xd0e8ff });
    const dot    = new THREE.Mesh(GEO_DOT, dotMat);
    dot.position.copy(pos);
    dot.userData.idx = i;

    const glowMat = new THREE.MeshBasicMaterial({
      color: isNext ? 0x00aaff : 0x112233,
      transparent: true,
      opacity: isNext ? 0.22 : 0.07,
      depthWrite: false
    });
    const glow = new THREE.Mesh(GEO_GLOW, glowMat);
    glow.position.copy(pos);

    const hit = new THREE.Mesh(GEO_HIT, MAT_HIT);
    hit.position.copy(pos);
    hit.userData.idx = i;

    lvGrp.add(glow, dot, hit);
    dotMeshes.push(dot);
    glowMeshes.push(glow);
    hitMeshes.push(hit);
  });

  const maxD = Math.max(1, ...dots.map(d => d.length()));
  orb.r     = Math.max(12, maxD * 2.6);
  orb.phi   = 1.30;
  orb.theta = 0.40;
  focal.set(0, 0, 0);
  camSync();

  setUI(lv, 0, dots.length);
  document.getElementById('phase-label').textContent = PHASE_NAMES[ph];
}

// ══════════════════════════════════════════════════════════════
//  UI HELPERS
// ══════════════════════════════════════════════════════════════
const $badge = document.getElementById('lv-badge');
const $msg   = document.getElementById('lv-msg');
const $prog  = document.getElementById('lv-prog');
const $flash = document.getElementById('flash');

const SPECIAL_MSG = {
  1:'THE POINT EXISTS', 2:'THE LINE FORMS', 3:'PLANES EMERGE',
  4:'SPACE STIRS', 5:'GEOMETRY WAKES', 6:'THREE DIMENSIONS OPEN',
  10:'DEPTH UNFOLDS', 15:'NAVIGATE THE VOID', 20:'FIND THE PATH THROUGH SPACE',
  25:'THE GEOMETRY DEEPENS', 30:'ROTATION IS YOUR COMPASS', 40:'SEARCH THE DARK',
  50:'THE FOURTH DIMENSION STIRS', 60:'HYPERSPACE EMERGES', 70:'FEEL THE FOLD',
  80:'THE TESSERACT BREATHES', 90:'EVE TAKES SHAPE', 100:'THE MIND CRYSTALLISES'
};

const PHASE_MSG = ['', 'THE POINT EXISTS', 'SPACE OPENS', 'NAVIGATE THE VOID', 'DIMENSIONS FOLD', 'THE TESSERACT BREATHES'];

function setUI(lv, done, total) {
  $badge.innerHTML = 'MARDUK\'S TESSERACT &nbsp;&middot;&nbsp; LEVEL ' + lv;
  if (done === 0) {
    $msg.textContent = SPECIAL_MSG[lv] || PHASE_MSG[getPhase(lv)];
  } else if (done === total) {
    $msg.textContent = 'SEQUENCE COMPLETE';
  } else {
    $msg.textContent = (total - done) + ' NODE' + (total - done !== 1 ? 'S' : '') + ' REMAINING';
  }
  $prog.textContent = total <= 24
    ? '\u25A0'.repeat(done) + '\u25A1'.repeat(total - done)
    : done + ' / ' + total;
}

function flashScreen(color, alpha) {
  $flash.style.background = color;
  $flash.style.opacity    = alpha;
  setTimeout(() => { $flash.style.opacity = 0; }, 70);
}

// ══════════════════════════════════════════════════════════════
//  GLOW CONNECTION LINES
// ══════════════════════════════════════════════════════════════
function addConnectLine(a, b) {
  lvGrp.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([a.clone(), b.clone()]),
    new THREE.LineBasicMaterial({ color: 0x00eeff, transparent: true, opacity: 0.90 })
  ));
  lvGrp.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([a.clone(), b.clone()]),
    new THREE.LineBasicMaterial({ color: 0x0044cc, transparent: true, opacity: 0.22 })
  ));
}

// ══════════════════════════════════════════════════════════════
//  RAYCASTING + INPUT
// ══════════════════════════════════════════════════════════════
const RAY     = new THREE.Raycaster();
const MP      = new THREE.Vector2();
let lastHover = -1;

function castAndHandle(cx, cy) {
  getAC();
  MP.set((cx / W()) * 2 - 1, -(cy / H()) * 2 + 1);
  RAY.setFromCamera(MP, camera);
  const hits = RAY.intersectObjects(hitMeshes);
  if (hits.length) onDotClick(hits[0].object.userData.idx);
}

canvas.addEventListener('mousedown', e => { clickStart = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('click', e => {
  if (Math.hypot(e.clientX - clickStart.x, e.clientY - clickStart.y) > 8) return;
  castAndHandle(e.clientX, e.clientY);
});
canvas.addEventListener('touchend', e => {
  const t = e.changedTouches[0];
  castAndHandle(t.clientX, t.clientY);
}, { passive: true });

canvas.addEventListener('mousemove', e => {
  if (dragging) return;
  MP.set((e.clientX / W()) * 2 - 1, -(e.clientY / H()) * 2 + 1);
  RAY.setFromCamera(MP, camera);
  const hits = RAY.intersectObjects(hitMeshes);
  const idx  = hits.length ? hits[0].object.userData.idx : -1;
  if (idx !== lastHover) {
    lastHover = idx;
    canvas.style.cursor = idx >= 0 ? 'crosshair' : 'default';
    if (idx === next && idx >= 0) sndHover(idx);
  }
});

// ══════════════════════════════════════════════════════════════
//  GAME LOGIC
// ══════════════════════════════════════════════════════════════
function onDotClick(idx) {
  if (idx !== next) {
    sndWrong();
    flashScreen('rgba(255,30,30,1)', 0.07);
    const m = dotMeshes[idx], orig = m.position.clone();
    let t = 0;
    const iv = setInterval(() => {
      m.position.x = orig.x + (Math.random() - 0.5) * 0.32;
      if (++t >= 9) { clearInterval(iv); m.position.copy(orig); }
    }, 28);
    return;
  }

  const pos = dots[idx];
  if (idx > 0) addConnectLine(dots[idx - 1], pos);

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

  if (next === dots.length) {
    sndDone();
    flashScreen('rgba(0,130,255,1)', 0.13);
    setTimeout(advanceLevel, 1700);
  }
}

function advanceLevel() {
  if (CUR_LV >= LVL_MAX) { showVictory(); return; }
  const el = document.getElementById('transition');
  el.style.opacity = 1;
  setTimeout(() => {
    CUR_LV++;
    loadLevel(CUR_LV);
    el.style.opacity = 0;
  }, 300);
}

function showVictory() {
  document.getElementById('victory').classList.add('show');
  sndDone();
  if (REDIRECT) setTimeout(() => { location.href = REDIRECT; }, 3200);
}

// ══════════════════════════════════════════════════════════════
//  ANIMATION LOOP
// ══════════════════════════════════════════════════════════════
let tick  = 0;
let lastT = performance.now();

function animate(ts) {
  requestAnimationFrame(animate);
  const dt = Math.min((ts - lastT) / 1000, 0.05);
  lastT    = ts;
  tick    += dt;

  tickTesseract(dt);

  if (next < dotMeshes.length) {
    const pulse = 1 + Math.sin(tick * 4.6) * 0.18;
    dotMeshes[next].scale.setScalar(pulse);
    if (glowMeshes[next]) {
      glowMeshes[next].scale.setScalar(1 + Math.sin(tick * 3.1) * 0.40);
    }
  }

  if (bgPhase >= 4 && !dragging) {
    orb.theta += dt * 0.012;
    camSync();
  }

  renderer.render(scene, camera);
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════
loadLevel(LVL_MIN);
requestAnimationFrame(animate);

})();
