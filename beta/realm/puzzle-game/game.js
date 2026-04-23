(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');
  const sliderZ = document.getElementById('sliderZ');
  const sliderW = document.getElementById('sliderW');
  const zoomSlider = document.getElementById('zoomSlider');
  const soundButton = document.getElementById('soundButton');
  const overlay = document.getElementById('overlay');
  const overlayButton = document.getElementById('overlayButton');


  const params = new URLSearchParams(location.search);
  const redirect = params.get('redirect') || '';
  const levelParam = params.get('level');
  const rangeParam = params.get('range');
  const lineHue = Number(params.get('hue') || '205');
  const queue = parseQueue();
  let queueIndex = 0;

  function parseQueue() {
    if (rangeParam && /^\d+\-\d+$/.test(rangeParam)) {
      const [a0, b0] = rangeParam.split('-').map(Number);
      const a = clamp(Math.min(a0, b0), 1, 100);
      const b = clamp(Math.max(a0, b0), 1, 100);
      return Array.from({ length: b - a + 1 }, (_, i) => a + i);
    }
    if (levelParam && /^\d+$/.test(levelParam)) return [clamp(Number(levelParam), 1, 100)];
    return Array.from({ length: 100 }, (_, i) => i + 1);
  }

  const state = {
    level: queue[0],
    phase: 0,
    startTime: 0,
    timeLimit: 60,
    solved: false,
    failed: false,
    transitioning: false,
    player: { x: 0, y: 0, z: 0, w: 1 },
    target: { x: 0, y: 0, z: 0, w: 1 },
    worldSpin: 0,
    worldTilt: 0,
    worldRoll: 0,
    zoom: 1,
    zoomTarget: 1,
    sparkPhase: 0,
    mesh: [],
    ghostMesh: [],
    background: initBackground(),
  };

  const pointer = {
    down: false,
    x: innerWidth / 2,
    y: innerHeight / 2,
    lastX: innerWidth / 2,
    lastY: innerHeight / 2,
    pinch: false,
    pinchDistance: 0,
  };

  let audioCtx = null;
  let masterGain = null;
  let humOsc = null;
  let humGain = null;
  let audioReady = false;
  let audioMuted = true;
  let lastBleepAt = 0;
  let lastLaserAt = 0;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function mix(a, b, t) { return a * (1 - t) + b * t; }
  function easeInOut(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2; }
  function phase01(level) { return clamp((level - 1) / 99, 0, 1); }
  function rand(n) { return Math.abs(Math.sin(n * 127.1 + 311.7)) % 1; }
  function signedRand(n) { return rand(n) * 2 - 1; }
  function wrapAngle(a) {
    while (a > Math.PI) a -= Math.PI * 2;
    while (a < -Math.PI) a += Math.PI * 2;
    return a;
  }
  function angleDiff(a, b) {
    const d = wrapAngle(a - b);
    return Math.abs(d);
  }
  function sliderToAngle(v) { return Number(v) / 100 * Math.PI; }
  function angleToSlider(v) { return clamp(Math.round(wrapAngle(v) / Math.PI * 100), -100, 100); }
  function linesForLevel(level) {
    const t = phase01(level);
    return Math.round(3 + 297 * Math.pow(t, 1.05));
  }
  function toleranceForLevel(level) {
    const t = phase01(level);
    const base = lerp(0.42, 0.13, t);
    return base * (1 + 0.10 * (1 - t));
  }
  function rotationSpeedForLevel(level) {
    const t = phase01(level);
    return lerp(0.00018, 0.00155, t);
  }
  function timerForLevel(level) {
    const t = phase01(level);
    return lerp(92, 54, t);
  }
  function assistanceForLevel(level) {
    const t = phase01(level);
    return lerp(0.12, 0.02, t);
  }

  function initBackground() {
    return {
      stars: [],
      bokeh: [],
      hexes: [],
      fighters: [],
      lasers: [],
      sparks: [],
    };
  }

  function rebuildBackground() {
    const p = phase01(state.level);
    state.background.stars = Array.from({ length: 100 + Math.round(160 * p) }, (_, i) => ({
      x: rand(i * 1.13 + 2.1),
      y: rand(i * 2.41 + 4.8),
      z: 0.25 + rand(i * 3.07 + 8.3) * 1.6,
      s: 0.5 + rand(i * 4.17 + 5.5) * 2.1,
      tw: rand(i * 7.31 + 6.5) * Math.PI * 2,
    }));
    state.background.bokeh = Array.from({ length: 14 + Math.round(20 * p) }, (_, i) => ({
      x: rand(i * 9.11 + 5.3),
      y: rand(i * 11.7 + 7.8),
      r: 34 + rand(i * 13.1 + 1.2) * 120,
      a: 0.03 + rand(i * 14.8 + 2.7) * 0.08,
      hue: (lineHue + i * 31) % 360,
      drift: signedRand(i * 19.7 + 2.5) * (0.02 + p * 0.05),
    }));
    state.background.hexes = Array.from({ length: 22 + Math.round(26 * p) }, (_, i) => ({
      x: rand(i * 5.77 + 1.3),
      y: rand(i * 6.19 + 3.8),
      r: 14 + rand(i * 7.21 + 4.7) * 28,
      a: 0.02 + rand(i * 9.9 + 0.5) * 0.05,
      drift: signedRand(i * 12.1 + 8.3) * (0.01 + p * 0.06),
      rot: rand(i * 15.4 + 1.1) * Math.PI,
    }));
    state.background.fighters = Array.from({ length: 3 + Math.round(7 * p) }, (_, i) => makeFighter(i));
    state.background.lasers = [];
    state.background.sparks = [];
  }

  function makeFighter(seed) {
    const p = phase01(state.level);
    return {
      x: rand(seed * 13.1 + 0.9) * 1.4 - 0.2,
      y: rand(seed * 17.3 + 0.4),
      z: 0.3 + rand(seed * 19.7 + 0.7) * 1.5,
      vx: -(0.025 + p * 0.09 + rand(seed * 21.5 + 0.1) * 0.05),
      vy: signedRand(seed * 23.7 + 0.2) * 0.02,
      hue: (lineHue + 40 + seed * 24) % 360,
      fireAt: performance.now() + 600 + rand(seed * 33.1 + 0.3) * 4000,
    };
  }

  function ensureAudio() {
    if (audioCtx) return audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.38;
    masterGain.connect(audioCtx.destination);
    return audioCtx;
  }

  async function unlockAudio(forceOn = false) {
    const ctxA = ensureAudio();
    if (!ctxA) return;
    if (ctxA.state === 'suspended') {
      try { await ctxA.resume(); } catch (e) {}
    }
    audioReady = ctxA.state === 'running';
    if (forceOn) audioMuted = false;
    if (audioReady && !humOsc) startHum();
    if (audioReady && !audioMuted) { chirp(620, 0.1, 'square', 0.16, 160); chirp(980, 0.07, 'triangle', 0.10, -220, 0.05); }
    updateSoundButton();
  }

  function updateSoundButton() {
    soundButton.classList.toggle('is-on', audioReady && !audioMuted);
    soundButton.classList.toggle('is-muted', !audioReady || audioMuted);
  }

  function startHum() {
    if (!audioCtx || humOsc) return;
    humOsc = audioCtx.createOscillator();
    humOsc.type = 'triangle';
    humGain = audioCtx.createGain();
    humGain.gain.value = 0.0001;
    humOsc.frequency.value = 72;
    humOsc.connect(humGain).connect(masterGain);
    humOsc.start();
  }

  function soundOn() { return audioReady && !audioMuted && audioCtx; }

  function chirp(freq = 400, dur = 0.08, type = 'square', gain = 0.08, glide = 0, when = 0) {
    if (!soundOn()) return;
    const t0 = audioCtx.currentTime + when;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(40, freq), t0);
    if (glide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + glide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  function crackle(dur = 0.06, gain = 0.03, hp = 1100) {
    if (!soundOn()) return;
    const sr = audioCtx.sampleRate;
    const buffer = audioCtx.createBuffer(1, Math.max(1, Math.floor(sr * dur)), sr);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = audioCtx.createBufferSource();
    src.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'highpass'; filter.frequency.value = hp;
    const g = audioCtx.createGain();
    const t0 = audioCtx.currentTime;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter).connect(g).connect(masterGain);
    src.start(t0); src.stop(t0 + dur + 0.02);
  }

  function sliderSound() {
    if (!soundOn()) return;
    const n = coherence();
    const now = performance.now();
    if (now - lastBleepAt < 30) return;
    lastBleepAt = now;
    const freq = 210 + n * 480 + Math.random() * 50;
    chirp(freq, 0.08, 'square', 0.09, 120);
    chirp(freq * 1.8, 0.05, 'triangle', 0.05, -70, 0.014);
    if (n > 0.62) crackle(0.04, 0.02 + n * 0.03, 1400);
  }

  function laserSound() {
    if (!soundOn()) return;
    const now = performance.now();
    if (now - lastLaserAt < 80) return;
    lastLaserAt = now;
    chirp(1200 + Math.random() * 300, 0.17, 'square', 0.11, -620);
    chirp(640 + Math.random() * 120, 0.2, 'sawtooth', 0.08, -500, 0.018);
    crackle(0.08, 0.028, 1800);
  }

  function solveSound() {
    chirp(380, 0.07, 'square', 0.09, 80, 0);
    chirp(560, 0.09, 'square', 0.08, 160, 0.06);
    chirp(900, 0.12, 'triangle', 0.08, 260, 0.12);
    crackle(0.09, 0.03, 1500);
  }

  function updateHum() {
    if (!soundOn() || !humOsc || !humGain) return;
    const n = coherence();
    humOsc.frequency.setTargetAtTime(72 + phase01(state.level) * 36 + n * 44, audioCtx.currentTime, 0.08);
    humGain.gain.setTargetAtTime(audioMuted ? 0.0001 : (0.01 + n * 0.028), audioCtx.currentTime, 0.08);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rebuildBackground();
  }

  function buildLevel(level) {
    state.level = level;
    state.phase = phase01(level);
    state.solved = false;
    state.failed = false;
    state.transitioning = false;
    state.startTime = performance.now();
    state.timeLimit = timerForLevel(level);
    state.worldSpin = 0;
    state.worldTilt = 0;
    state.worldRoll = 0;
    state.zoom = 1;
    state.zoomTarget = 1;
    zoomSlider.value = '100';

    const seed = level * 17.311 + 1.7;
    const randAngle = (s) => {
      let a = wrapAngle((rand(seed + s) * 2 - 1) * Math.PI);
      if (Math.abs(a) < 0.25) a += Math.sign(a || 1) * 0.45;
      return wrapAngle(a);
    };

    state.target.x = randAngle(1.1);
    state.target.y = randAngle(2.7);
    state.target.z = randAngle(4.5);
    state.target.w = 0.82 + rand(seed + 5.9) * 0.34;

    const offsetMin = lerp(1.0, 0.85, state.phase);
    const pickStart = (targetAngle, s) => {
      const sign = signedRand(seed + s) >= 0 ? 1 : -1;
      return wrapAngle(targetAngle + sign * (offsetMin + rand(seed + s * 2.4) * 0.9));
    };
    state.player.x = pickStart(state.target.x, 6.1);
    state.player.y = pickStart(state.target.y, 7.9);
    state.player.z = pickStart(state.target.z, 9.7);
    state.player.w = clamp(state.target.w + (signedRand(seed + 11.3) >= 0 ? 1 : -1) * (0.12 + rand(seed + 13.1) * 0.12), 0.7, 1.4);

    sliderX.value = String(angleToSlider(state.player.x));
    sliderY.value = String(angleToSlider(state.player.y));
    sliderZ.value = String(angleToSlider(state.player.z));
    sliderW.value = String(Math.round(state.player.w * 100));

    const mesh = buildMaskLines(linesForLevel(level));
    state.mesh = mesh;
    state.ghostMesh = mesh;
    rebuildBackground();
    hideOverlay();
  }

  function widthAt(v) {
    const top = 0.88 - 0.1 * Math.max(0, v + 0.6);
    const cheeks = 0.13 * Math.exp(-Math.pow((v - 0.02) / 0.42, 2));
    const jaw = -0.18 * Math.exp(-Math.pow((v - 0.74) / 0.28, 2));
    const chin = -0.2 * Math.exp(-Math.pow((v - 1.03) / 0.18, 2));
    return clamp(top + cheeks + jaw + chin, 0.18, 1.06);
  }

  function eyeField(u, v, side) {
    const cx = side * 0.29;
    const cy = -0.06;
    return Math.pow((u - cx) / 0.165, 2) + Math.pow((v - cy) / 0.115, 2);
  }

  function insideMask(u, v) {
    return Math.abs(u) <= widthAt(v) && v >= -1.08 && v <= 1.05;
  }

  function inEyeHole(u, v) {
    return eyeField(u, v, -1) < 1 || eyeField(u, v, 1) < 1;
  }

  function maskPoint(u, v) {
    if (!insideMask(u, v)) return null;
    if (inEyeHole(u, v)) return null;
    const w = widthAt(v);
    const x = u / Math.max(w, 0.001);
    const forehead = 0.16 * Math.exp(-(x * x * 0.9 + Math.pow((v + 0.82) / 0.6, 2)));
    const midBulge = 0.11 * Math.exp(-(x * x * 1.25 + Math.pow((v + 0.08) / 0.95, 2)));
    const cheekL = 0.075 * Math.exp(-(Math.pow((u + 0.44) / 0.18, 2) + Math.pow((v - 0.14) / 0.42, 2)));
    const cheekR = 0.075 * Math.exp(-(Math.pow((u - 0.44) / 0.18, 2) + Math.pow((v - 0.14) / 0.42, 2)));
    const eyeDipL = -0.12 * Math.exp(-(Math.pow((u + 0.27) / 0.14, 2) + Math.pow((v + 0.04) / 0.12, 2)));
    const eyeDipR = -0.12 * Math.exp(-(Math.pow((u - 0.27) / 0.14, 2) + Math.pow((v + 0.04) / 0.12, 2)));
    const noseBridge = 0.012 * Math.exp(-(Math.pow(u / 0.24, 2) + Math.pow((v + 0.01) / 0.34, 2)));
    const noseSoft = 0.008 * Math.exp(-(Math.pow(u / 0.2, 2) + Math.pow((v - 0.22) / 0.14, 2)));
    const philtrum = -0.018 * Math.exp(-(Math.pow(u / 0.08, 2) + Math.pow((v - 0.35) / 0.08, 2)));
    const mouthDip = -0.055 * Math.exp(-(Math.pow(u / 0.34, 2) + Math.pow((v - 0.49) / 0.09, 2)));
    const lipLift = 0.024 * Math.exp(-(Math.pow(u / 0.28, 2) + Math.pow((v - 0.57) / 0.09, 2)));
    const chin = 0.032 * Math.exp(-(Math.pow(u / 0.18, 2) + Math.pow((v - 0.86) / 0.16, 2)));
    const jawPlane = 0.02 * Math.exp(-(Math.pow(u / 0.62, 2) + Math.pow((v - 0.7) / 0.22, 2)));
    const z = forehead + midBulge + cheekL + cheekR + eyeDipL + eyeDipR + noseBridge + noseSoft + philtrum + mouthDip + lipLift + chin + jawPlane;
    return { x: u * 0.97, y: v * 1.2, z: z * 1.9 };
  }

  function curveVertical(u, samples = 90) {
    const pts = [];
    for (let i = 0; i <= samples; i++) {
      const v = lerp(-1.03, 1.0, i / samples);
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveHorizontal(v, samples = 130) {
    const pts = [];
    const w = widthAt(v);
    for (let i = 0; i <= samples; i++) {
      const u = lerp(-w, w, i / samples);
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveEye(side, ring, upper = false, samples = 84) {
    const pts = [];
    const cx = side * 0.29;
    const cy = -0.06;
    const rx = 0.17 + ring * 0.015;
    const ry = 0.1 + ring * 0.012;
    const a0 = upper ? Math.PI * 0.95 : Math.PI * 0.05;
    const a1 = upper ? Math.PI * 2.05 : Math.PI * 0.95;
    for (let i = 0; i <= samples; i++) {
      const a = lerp(a0, a1, i / samples);
      const u = cx + Math.cos(a) * rx;
      const v = cy + Math.sin(a) * ry;
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveMouth(ring, upper = true, samples = 90) {
    const pts = [];
    const a0 = upper ? Math.PI * 1.02 : Math.PI * 0.02;
    const a1 = upper ? Math.PI * 1.98 : Math.PI * 0.98;
    const rx = 0.26 + ring * 0.02;
    const ry = upper ? 0.048 + ring * 0.01 : 0.04 + ring * 0.009;
    for (let i = 0; i <= samples; i++) {
      const a = lerp(a0, a1, i / samples);
      const u = Math.cos(a) * rx;
      const v = 0.56 + Math.sin(a) * ry;
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveNose(side, ring, samples = 70) {
    const pts = [];
    const sideSign = side;
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const u = sideSign * (0.03 + 0.12 * Math.sin(t * Math.PI * 0.9)) + sideSign * ring * 0.007;
      const v = -0.02 + t * 0.42;
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveBrow(side, row, samples = 75) {
    const pts = [];
    const shift = row * 0.016;
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const u = lerp(side * 0.62, side * 0.05, t);
      const v = -0.25 - 0.08 * Math.sin(t * Math.PI) - shift;
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function curveJaw(side, row, samples = 92) {
    const pts = [];
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const v = lerp(-0.12, 0.98, t);
      const u = side * (widthAt(v) - 0.04 - row * 0.01);
      pts.push(maskPoint(u, v));
    }
    return pts;
  }

  function buildCurveLibrary() {
    const curves = [];
    curves.push(curveVertical(0));
    curves.push(curveHorizontal(-0.22));
    curves.push(curveHorizontal(0.84));
    curves.push(curveJaw(-1, 0));
    curves.push(curveJaw(1, 0));
    curves.push(curveEye(-1, 0, true));
    curves.push(curveEye(1, 0, true));
    curves.push(curveMouth(0, true));
    curves.push(curveMouth(0, false));
    curves.push(curveVertical(-0.23));
    curves.push(curveVertical(0.23));
    curves.push(curveHorizontal(-0.62));
    curves.push(curveHorizontal(0.22));
    curves.push(curveHorizontal(0.58));
    curves.push(curveNose(-1, 0));
    curves.push(curveNose(1, 0));
    for (let i = 1; i <= 20; i++) {
      curves.push(curveEye(-1, i * 0.22, i % 2 === 0));
      curves.push(curveEye(1, i * 0.22, i % 2 === 0));
    }
    for (let i = 1; i <= 14; i++) {
      curves.push(curveMouth(i * 0.28, true));
      curves.push(curveMouth(i * 0.24, false));
    }
    for (let i = 0; i < 18; i++) {
      curves.push(curveBrow(-1, i));
      curves.push(curveBrow(1, i));
    }
    for (let i = 1; i <= 16; i++) {
      curves.push(curveJaw(-1, i));
      curves.push(curveJaw(1, i));
    }
    const verticalValues = [];
    for (let i = 1; i <= 60; i++) {
      const t = i / 61;
      const base = Math.pow(t, 0.8) * 0.92;
      verticalValues.push(-base, base);
    }
    verticalValues.sort((a, b) => Math.abs(a) - Math.abs(b));
    verticalValues.forEach(u => curves.push(curveVertical(u)));
    for (let i = 0; i <= 104; i++) {
      const t = i / 104;
      const v = lerp(-1.0, 0.98, t);
      curves.push(curveHorizontal(v));
    }
    return curves.slice(0, 320);
  }

  const CURVE_LIBRARY = buildCurveLibrary();

  function buildMaskLines(count) {
    return CURVE_LIBRARY.slice(0, clamp(count, 3, 300));
  }

  function rotatePoint(p, ax, ay, az) {
    let { x, y, z } = p;
    let cx = Math.cos(ax), sx = Math.sin(ax);
    let cy = Math.cos(ay), sy = Math.sin(ay);
    let cz = Math.cos(az), sz = Math.sin(az);
    let y1 = y * cx - z * sx;
    let z1 = y * sx + z * cx;
    y = y1; z = z1;
    let x2 = x * cy + z * sy;
    let z2 = -x * sy + z * cy;
    x = x2; z = z2;
    let x3 = x * cz - y * sz;
    let y3 = x * sz + y * cz;
    return { x: x3, y: y3, z };
  }

  function project(p, scale) {
    const perspective = 1 / (1.7 + p.z * 0.8);
    return {
      x: innerWidth * 0.5 + p.x * scale * perspective,
      y: innerHeight * 0.5 + p.y * scale * perspective,
      a: clamp(0.2 + perspective * 0.95, 0.18, 1),
      d: p.z,
    };
  }

  function coherence() {
    const tol = toleranceForLevel(state.level);
    const dx = angleDiff(state.player.x, state.target.x);
    const dy = angleDiff(state.player.y, state.target.y);
    const dz = angleDiff(state.player.z, state.target.z);
    const dw = Math.abs(state.player.w - state.target.w);
    const score = 1 - clamp((dx + dy + dz + dw * 1.35) / (tol * 4.8), 0, 1);
    return Math.pow(score, 1.4);
  }

  function applyAssist(dt) {
    const assist = assistanceForLevel(state.level);
    const factor = coherence();
    if (factor < 0.5) return;
    const pull = assist * (factor - 0.48) * dt * 0.0022;
    state.player.x = wrapAngle(mix(state.player.x, state.target.x, pull));
    state.player.y = wrapAngle(mix(state.player.y, state.target.y, pull));
    state.player.z = wrapAngle(mix(state.player.z, state.target.z, pull));
    state.player.w = mix(state.player.w, state.target.w, pull * 0.85);
    sliderX.value = String(angleToSlider(state.player.x));
    sliderY.value = String(angleToSlider(state.player.y));
    sliderZ.value = String(angleToSlider(state.player.z));
    sliderW.value = String(Math.round(state.player.w * 100));
  }

  function spawnSparkBurst(n = 10) {
    const c = coherence();
    const intensity = 0.4 + c * 2.8 + phase01(state.level) * 1.8;
    for (let i = 0; i < n; i++) {
      state.background.sparks.push({
        x: innerWidth * 0.5 + signedRand(i + performance.now() * 0.001) * 120,
        y: innerHeight * 0.5 + signedRand(i * 3 + performance.now() * 0.001) * 160,
        vx: signedRand(i * 1.3 + Math.random()) * (0.2 + intensity * 0.9),
        vy: signedRand(i * 2.9 + Math.random()) * (0.2 + intensity * 0.9),
        life: 0.4 + Math.random() * 0.6,
        maxLife: 0.4 + Math.random() * 0.6,
      });
    }
  }

  function maybeFireLaser(now) {
    const p = phase01(state.level);
    const chance = 0.0025 + p * 0.013;
    if (Math.random() > chance) return;
    const fromLeft = Math.random() > 0.5;
    const y = innerHeight * (0.15 + Math.random() * 0.7);
    state.background.lasers.push({
      x: fromLeft ? -120 : innerWidth + 120,
      y,
      vx: fromLeft ? 14 + p * 20 : -(14 + p * 20),
      vy: signedRand(now * 0.001) * (0.6 + p * 1.8),
      life: 0.18 + Math.random() * 0.2,
      maxLife: 0.18 + Math.random() * 0.2,
      hue: (lineHue + 70 + Math.random() * 70) % 360,
    });
    laserSound();
  }

  function updateBackground(dt) {
    const p = phase01(state.level);
    const parallaxX = (pointer.x / innerWidth - 0.5) * (14 + p * 30);
    const parallaxY = (pointer.y / innerHeight - 0.5) * (12 + p * 24);
    state.background.parallaxX = parallaxX;
    state.background.parallaxY = parallaxY;
    const now = performance.now();
    maybeFireLaser(now);
    state.background.fighters.forEach((f, i) => {
      f.x += f.vx * dt * 0.0001;
      f.y += f.vy * dt * 0.00012;
      if (f.x < -0.3 || f.x > 1.4 || f.y < -0.2 || f.y > 1.2) state.background.fighters[i] = makeFighter(i + now * 0.001);
    });
    state.background.lasers = state.background.lasers.filter(l => {
      l.x += l.vx * dt * 0.06;
      l.y += l.vy * dt * 0.06;
      l.life -= dt * 0.001;
      return l.life > 0;
    });
    state.background.sparks = state.background.sparks.filter(s => {
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.vy += 0.003 * dt;
      s.life -= dt * 0.001;
      return s.life > 0;
    });
  }

  function drawBackground() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const p = phase01(state.level);
    const px = state.background.parallaxX || 0;
    const py = state.background.parallaxY || 0;

    for (const b of state.background.bokeh) {
      const x = b.x * innerWidth + px * (0.12 + b.a * 4);
      const y = b.y * innerHeight + py * (0.12 + b.a * 4) + Math.sin(performance.now() * 0.00005 + b.drift) * 18;
      const r = b.r * (1 + p * 0.18);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `hsla(${b.hue} 95% 70% / ${b.a})`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }

    ctx.save();
    ctx.translate(px * 0.26, py * 0.26);
    state.background.hexes.forEach((h, idx) => {
      const x = h.x * innerWidth + Math.sin(performance.now() * 0.00012 + idx) * h.drift * innerWidth;
      const y = h.y * innerHeight + Math.cos(performance.now() * 0.00014 + idx) * h.drift * innerHeight;
      drawHex(x, y, h.r * (1 + p * 0.15), h.rot + performance.now() * 0.0001 * h.drift * 10, h.a + p * 0.03);
    });
    ctx.restore();

    for (const s of state.background.stars) {
      const x = s.x * innerWidth + px / s.z;
      const y = s.y * innerHeight + py / s.z;
      const tw = 0.45 + 0.55 * Math.sin(performance.now() * 0.0013 + s.tw);
      ctx.fillStyle = `rgba(255,255,255,${0.18 + tw * 0.55})`;
      ctx.beginPath();
      ctx.arc(x, y, s.s * (0.7 + p * 0.4), 0, Math.PI * 2);
      ctx.fill();
    }

    state.background.fighters.forEach(f => drawFighter(f));
    state.background.lasers.forEach(l => drawLaser(l));
    state.background.sparks.forEach(s => drawSpark(s));
  }

  function drawHex(x, y, r, rot, a) {
    ctx.save();
    ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const ang = Math.PI / 3 * i;
      const px = Math.cos(ang) * r;
      const py = Math.sin(ang) * r;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(150,210,255,${a})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawFighter(f) {
    const x = f.x * innerWidth;
    const y = f.y * innerHeight;
    const scale = 8 / f.z + phase01(state.level) * 3;
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(scale * 1.6, 0);
    ctx.lineTo(-scale * 0.8, -scale * 0.45);
    ctx.lineTo(-scale * 0.35, 0);
    ctx.lineTo(-scale * 0.8, scale * 0.45);
    ctx.closePath();
    ctx.strokeStyle = `hsla(${f.hue} 100% 72% / 0.4)`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawLaser(l) {
    const t = l.life / l.maxLife;
    ctx.strokeStyle = `hsla(${l.hue} 100% 72% / ${0.2 + t * 0.55})`;
    ctx.lineWidth = 1.2 + t * 2.2;
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x - l.vx * 5, l.y - l.vy * 5);
    ctx.stroke();
  }

  function drawSpark(s) {
    const t = s.life / s.maxLife;
    ctx.strokeStyle = `rgba(255,255,255,${t * 0.9})`;
    ctx.lineWidth = 1 + t * 1.5;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.vx * 2.3, s.y - s.vy * 2.3);
    ctx.stroke();
  }

  function drawCountdownGhost() {
    const remaining = Math.max(0, Math.ceil(state.timeLimit - (performance.now() - state.startTime) / 1000));
    const pulse = 0.18 + 0.12 * Math.sin(performance.now() * 0.004);
    const warn = remaining <= 10 ? 0.12 : 0;
    const alpha = pulse + warn;
    const text = String(remaining);
    ctx.save();
    ctx.font = `700 ${Math.max(72, Math.min(innerWidth, innerHeight) * 0.12)}px Inter, system-ui, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = `rgba(255,255,255,${alpha * 0.18})`;
    ctx.shadowColor = `rgba(140,220,255,${alpha * 0.16})`;
    ctx.shadowBlur = 24;
    ctx.textAlign = 'left';
    ctx.fillText(text, 18, innerHeight * 0.14);
    ctx.textAlign = 'right';
    ctx.fillText(text, innerWidth - 18, innerHeight * 0.86);
    ctx.restore();
  }

  function drawMask(mesh, rot, style, scale, jitter = 0, depthScale = 1) {
    const worldX = state.worldTilt;
    const worldY = state.worldSpin;
    const worldZ = state.worldRoll;
    ctx.strokeStyle = style;
    ctx.lineWidth = 0.55;
    for (const line of mesh) {
      let open = false;
      ctx.beginPath();
      for (let i = 0; i < line.length; i++) {
        const point = line[i];
        if (!point) { open = false; continue; }
        const depthPoint = { x: point.x, y: point.y, z: point.z * depthScale };
        const local = rotatePoint(depthPoint, rot.x, rot.y, rot.z);
        const world = rotatePoint(local, worldX, worldY, worldZ);
        const jit = jitter ? {
          x: world.x + signedRand(i * 0.31 + performance.now() * 0.001) * jitter,
          y: world.y + signedRand(i * 0.51 + performance.now() * 0.0015) * jitter,
          z: world.z,
        } : world;
        const pr = project(jit, scale);
        if (!open) {
          ctx.moveTo(pr.x, pr.y);
          open = true;
        } else {
          ctx.lineTo(pr.x, pr.y);
        }
      }
      ctx.stroke();
    }
  }

  function drawScene() {
    drawBackground();
    const c = coherence();
    const p = phase01(state.level);
    const scale = Math.min(innerWidth, innerHeight) * 0.34 * state.zoom;
    const ghostAlpha = 0.08 + (1 - c) * 0.12;
    drawMask(
      state.ghostMesh,
      { x: state.target.x, y: state.target.y, z: state.target.z },
      `hsla(${lineHue} 100% 75% / ${ghostAlpha})`,
      scale,
      0,
      state.target.w
    );

    drawCountdownGhost();
    if (c > 0.45 && Math.random() < 0.18 + c * 0.25) spawnSparkBurst(2 + Math.round(c * 5));
    const tremble = c > 0.62 ? (0.002 + c * 0.016 + p * 0.007) : 0;
    const mainAlpha = 0.58 + c * 0.34;
    ctx.shadowBlur = 16 + c * 26;
    ctx.shadowColor = `hsla(${lineHue} 100% 80% / ${0.08 + c * 0.22})`;
    drawMask(
      state.mesh,
      { x: state.player.x, y: state.player.y, z: state.player.z },
      `rgba(250,252,255,${mainAlpha})`,
      scale,
      tremble,
      state.player.w
    );
    ctx.shadowBlur = 0;
  }

  function showOverlay(next = true) {
    state.transitioning = true;
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    overlayButton.dataset.action = next ? 'next' : 'retry';
    overlayButton.style.transform = next ? 'rotate(0deg)' : 'rotate(180deg)';
  }

  function hideOverlay() {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
  }

  function update(dt) {
    if (state.transitioning) return;
    state.worldSpin += rotationSpeedForLevel(state.level) * dt;
    state.worldTilt = Math.sin(performance.now() * 0.00019) * (0.02 + state.phase * 0.08);
    state.worldRoll = Math.cos(performance.now() * 0.00011) * (0.03 + state.phase * 0.1);
    state.zoom += (state.zoomTarget - state.zoom) * Math.min(1, dt * 0.01);
    updateBackground(dt);
    applyAssist(dt);
    updateHum();

    if (coherence() > 0.988) {
      state.solved = true;
      state.transitioning = true;
      solveSound();
      setTimeout(() => showOverlay(true), 220);
    } else if (!state.failed) {
      const elapsed = (performance.now() - state.startTime) / 1000;
      if (elapsed > state.timeLimit) {
        state.failed = true;
        state.transitioning = true;
        setTimeout(() => showOverlay(false), 120);
      }
    }
  }

  function syncFromSliders() {
    state.player.x = sliderToAngle(sliderX.value);
    state.player.y = sliderToAngle(sliderY.value);
    state.player.z = sliderToAngle(sliderZ.value);
    state.player.w = clamp(Number(sliderW.value) / 100, 0.7, 1.4);
  }

  function setZoomFromSlider(v) {
    state.zoomTarget = clamp(Number(v) / 100, 0.5, 1.8);
  }

  sliderX.addEventListener('input', () => { syncFromSliders(); sliderSound(); unlockAudio(); });
  sliderY.addEventListener('input', () => { syncFromSliders(); sliderSound(); unlockAudio(); });
  sliderZ.addEventListener('input', () => { syncFromSliders(); sliderSound(); unlockAudio(); });
  sliderW.addEventListener('input', () => { syncFromSliders(); sliderSound(); unlockAudio(); });
  zoomSlider.addEventListener('input', () => { setZoomFromSlider(zoomSlider.value); sliderSound(); unlockAudio(); });

  async function toggleSound(e) {
    if (e) e.preventDefault();
    if (!audioReady || audioMuted) {
      audioMuted = false;
      await unlockAudio(true);
      chirp(700, 0.1, 'square', 0.16, 160);
      chirp(1100, 0.08, 'triangle', 0.11, -180, 0.05);
      updateSoundButton();
      return;
    }
    audioMuted = true;
    updateSoundButton();
  }
  soundButton.addEventListener('pointerup', toggleSound);

  overlayButton.addEventListener('click', () => {
    const action = overlayButton.dataset.action;
    if (action === 'retry') {
      buildLevel(state.level);
      return;
    }
    queueIndex += 1;
    if (queueIndex >= queue.length) {
      if (redirect) location.href = redirect;
      else buildLevel(queue[queue.length - 1]);
      return;
    }
    buildLevel(queue[queueIndex]);
  });

  canvas.addEventListener('pointerdown', async (e) => {
    pointer.down = true;
    pointer.x = pointer.lastX = e.clientX;
    pointer.y = pointer.lastY = e.clientY;
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    await unlockAudio();
  });
  canvas.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    if (!pointer.down || state.transitioning) return;
    const dx = e.clientX - pointer.lastX;
    const dy = e.clientY - pointer.lastY;
    state.player.y = wrapAngle(state.player.y + dx * 0.0062);
    state.player.x = wrapAngle(state.player.x + dy * 0.0062);
    sliderX.value = String(angleToSlider(state.player.x));
    sliderY.value = String(angleToSlider(state.player.y));
    sliderSound();
    pointer.lastX = e.clientX;
    pointer.lastY = e.clientY;
  });
  function endPointer(e) {
    pointer.down = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);

  canvas.addEventListener('wheel', async (e) => {
    e.preventDefault();
    await unlockAudio();
    const delta = Math.sign(e.deltaY);
    const next = clamp(Number(zoomSlider.value) - delta * 6, 50, 180);
    zoomSlider.value = String(next);
    setZoomFromSlider(next);
    sliderSound();
  }, { passive: false });

  canvas.addEventListener('touchstart', async (e) => {
    if (e.touches.length === 2) {
      pointer.pinch = true;
      pointer.pinchDistance = touchDistance(e.touches[0], e.touches[1]);
      await unlockAudio();
    }
  }, { passive: false });
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && pointer.pinch) {
      e.preventDefault();
      const d = touchDistance(e.touches[0], e.touches[1]);
      const delta = (d - pointer.pinchDistance) * 0.08;
      pointer.pinchDistance = d;
      const next = clamp(Number(zoomSlider.value) + delta, 50, 180);
      zoomSlider.value = String(next);
      setZoomFromSlider(next);
      sliderSound();
    }
  }, { passive: false });
  canvas.addEventListener('touchend', (e) => { if (e.touches.length < 2) pointer.pinch = false; });
  canvas.addEventListener('touchcancel', () => { pointer.pinch = false; });

  function touchDistance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  let lastFrame = performance.now();
  function frame(now) {
    const dt = Math.min(40, now - lastFrame);
    lastFrame = now;
    update(dt);
    drawScene();
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  updateSoundButton();
  buildLevel(queue[0]);
  requestAnimationFrame(frame);
})();
