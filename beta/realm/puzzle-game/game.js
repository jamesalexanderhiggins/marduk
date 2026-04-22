(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const levelLabel = document.getElementById('levelLabel');
  const bandLabel = document.getElementById('bandLabel');
  const modeLabel = document.getElementById('modeLabel');
  const objectiveLabel = document.getElementById('objectiveLabel');
  const storyLabel = document.getElementById('storyLabel');
  const helpText = document.getElementById('helpText');
  const runLabel = document.getElementById('runLabel');
  const timerLabel = document.getElementById('timerLabel');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayText = document.getElementById('overlayText');
  const overlayButton = document.getElementById('overlayButton');
  const versionMarker = document.getElementById('versionMarker');
  const soundButton = document.getElementById('soundButton');
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');
  const sliderZ = document.getElementById('sliderZ');
  const sliderDepth = document.getElementById('sliderDepth');
  const valueX = document.getElementById('valueX');
  const valueY = document.getElementById('valueY');
  const valueZ = document.getElementById('valueZ');
  const valueDepth = document.getElementById('valueDepth');

  const params = new URLSearchParams(location.search);
  const levelParam = params.get('level');
  const rangeParam = params.get('range');
  const redirect = params.get('redirect') || '';
  const autoAdvance = params.get('auto') !== '0';
  const VERSION = 'v15';
  const hue = Number(params.get('hue') || '195');
  if (versionMarker) versionMarker.textContent = VERSION;

  document.documentElement.style.setProperty('--line', `hsl(${hue} 100% 76%)`);
  document.documentElement.style.setProperty('--line2', `hsl(${(hue + 56) % 360} 100% 74%)`);
  document.documentElement.style.setProperty('--accent', `hsl(${(hue + 118) % 360} 100% 79%)`);

  const pointer = { x: innerWidth / 2, y: innerHeight / 2, down: false, lastX: 0, lastY: 0, dragGlow: 0 };
  let particles = [];
  let stars = [];
  let bokeh = [];
  let hexField = [];
  let battleLasers = [];
  let fighters = [];
  let audioCtx = null;
  let audioUnlocked = false;
  let lastAudioAt = 0;
  let masterGain = null;
  let humNodes = null;
  let queue = parseQueue();
  let runIndex = 0;
  let state = null;
  let solved = false;
  let inputLocked = false;
  let activeRing = 0;
  let levelStartTime = 0;
  let timeLimit = 60;
  let levelFailed = false;

  const BANDS = [
    { start: 1, end: 25, band: 'ASCENT', mode: 'ALIGNMENT', story: 'The chamber opens with clean geometric forms and slow orbital drift.' },
    { start: 26, end: 50, band: 'DRIFT', mode: 'ALIGNMENT', story: 'More axes, more depth, more motion. The lattice begins to fight back.' },
    { start: 51, end: 75, band: 'CONVERGENCE', mode: 'ALIGNMENT', story: 'Dense crystalline frames and stronger world motion demand true spatial reasoning.' },
    { start: 76, end: 100, band: 'EVENT HORIZON', mode: 'ALIGNMENT', story: 'The final architectures spin through battle-lit space at full intensity.' },
  ];

  function parseQueue() {
    if (rangeParam && /^\d+\-\d+$/.test(rangeParam)) {
      const [aRaw, bRaw] = rangeParam.split('-').map(Number);
      const a = clamp(Math.min(aRaw, bRaw), 1, 100);
      const b = clamp(Math.max(aRaw, bRaw), 1, 100);
      const arr = [];
      for (let i = a; i <= b; i++) arr.push(i);
      return arr;
    }
    if (levelParam && /^\d+$/.test(levelParam)) return [clamp(Number(levelParam), 1, 100)];
    return Array.from({ length: 100 }, (_, i) => i + 1);
  }

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function dist(ax, ay, bx, by) { return Math.hypot(bx - ax, by - ay); }
  function rand(seed) { return Math.abs(Math.sin(seed * 141.73 + seed * seed * 0.171 + 1.13)); }
  function angleDiff(a, b) {
    let d = (a - b) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return Math.abs(d);
  }

  function wrapAngle(a) {
    while (a > Math.PI) a -= Math.PI * 2;
    while (a < -Math.PI) a += Math.PI * 2;
    return a;
  }
  function angleToSlider(a) { return clamp(Math.round(wrapAngle(a) / Math.PI * 100), -100, 100); }
  function sliderToAngle(v) { return wrapAngle(Number(v) / 100 * Math.PI); }
  function levelBand(level) { return BANDS.find(b => level >= b.start && level <= b.end) || BANDS[0]; }
  function phase01(level) { return clamp((level - 1) / 99, 0, 1); }
  function assistanceForLevel(level) { return Math.pow(1 - phase01(level), 1.45) * 0.82; }
  function dazzleForLevel(level) { return clamp(0.48 + phase01(level) * 3.8, 0.48, 4.9); }
  function timerForLevel(level) { return (level === 1 ? 68 : lerp(58, 20, phase01(level))) + 20; }
  function rotationSpeedForLevel(level) { return lerp(0.0002, 0.00135, phase01(level)); }
  function nearFactor() { return state ? Math.pow(getCoherence(), 2.2) : 0; }



  function ensureAudio() {
    if (audioCtx) return audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
    masterGain = audioCtx.createGain();
    const comp = audioCtx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 18;
    comp.ratio.value = 8;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    masterGain.gain.value = 1.7;
    masterGain.connect(comp).connect(audioCtx.destination);
    return audioCtx;
  }
  function startHum() {
    const ctxA = ensureAudio();
    if (!ctxA || humNodes) return;
    const carrier = ctxA.createOscillator();
    const shimmer = ctxA.createOscillator();
    const lfo = ctxA.createOscillator();
    const lfoGain = ctxA.createGain();
    const humGain = ctxA.createGain();
    carrier.type = 'sawtooth';
    shimmer.type = 'triangle';
    lfo.type = 'sine';
    carrier.frequency.value = 74;
    shimmer.frequency.value = 149;
    lfo.frequency.value = 0.18;
    lfoGain.gain.value = 5;
    humGain.gain.value = 0.0001;
    lfo.connect(lfoGain);
    lfoGain.connect(carrier.frequency);
    carrier.connect(humGain);
    shimmer.connect(humGain);
    humGain.connect(masterGain);
    const t0 = ctxA.currentTime;
    humGain.gain.setValueAtTime(0.0001, t0);
    humGain.gain.exponentialRampToValueAtTime(0.095, t0 + 0.3);
    carrier.start(t0); shimmer.start(t0); lfo.start(t0);
    humNodes = { carrier, shimmer, lfo, humGain };
  }
  function updateSoundButton() {
    if (!soundButton) return;
    const on = !!audioUnlocked;
    soundButton.textContent = on ? 'SOUND ON' : 'SOUND OFF';
    soundButton.classList.toggle('is-on', on);
  }
  function unlockAudio() {
    const ctxA = ensureAudio();
    if (!ctxA) return;
    const arm = () => {
      audioUnlocked = true;
      updateSoundButton();
      startHum();
      if (!window.__vectorMaskAudioArmed) {
        window.__vectorMaskAudioArmed = true;
        simpleTone(420, 0.11, 'square', 0.24, 110);
        simpleTone(760, 0.14, 'triangle', 0.18, 160, 0.05);
        noiseBurst(0.06, 0.04, 1400, 0.03);
      }
    };
    updateSoundButton();
    if (ctxA.state === 'suspended') {
      ctxA.resume().then(arm).catch(() => {});
    } else {
      arm();
    }
  }
  function simpleTone(freq = 220, dur = 0.08, type = 'square', gain = 0.12, glide = 0, when = 0) {
    const ctxA = ensureAudio();
    if (!ctxA || !audioUnlocked) return;
    const t0 = ctxA.currentTime + when;
    const osc = ctxA.createOscillator();
    const g = ctxA.createGain();
    const f = Math.max(40, freq);
    osc.type = type;
    osc.frequency.setValueAtTime(f, t0);
    if (glide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, f + glide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }
  function noiseBurst(dur = 0.06, gain = 0.028, hp = 700, when = 0) {
    const ctxA = ensureAudio();
    if (!ctxA || !audioUnlocked) return;
    const sr = ctxA.sampleRate;
    const buffer = ctxA.createBuffer(1, Math.max(1, Math.floor(sr * dur)), sr);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = ctxA.createBufferSource(); src.buffer = buffer;
    const filter = ctxA.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = hp;
    const g = ctxA.createGain();
    const t0 = ctxA.currentTime + when;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter).connect(g).connect(masterGain);
    src.start(t0); src.stop(t0 + dur + 0.03);
  }
  function sliderSound(value) {
    const n = nearFactor();
    const amt = Math.abs(Number(value)) / 100;
    const base = 250 + amt * 420 + n * 200;
    simpleTone(base, 0.10, 'square', 0.22, 130);
    simpleTone(base * 1.98, 0.08, 'square', 0.14, -60, 0.012);
    if (n > 0.42) noiseBurst(0.045, 0.018 + n * 0.02, 1050);
  }
  function alignmentSound() {
    const n = nearFactor();
    if (n < 0.48) return;
    const now = performance.now();
    if (now - lastAudioAt < 68) return;
    lastAudioAt = now;
    simpleTone(280 + n * 260, 0.06, 'square', 0.05 + n * 0.035, 40);
    simpleTone(130 + n * 120, 0.08, 'sawtooth', 0.028, 24);
    if (n > 0.72) noiseBurst(0.032, 0.016 + n * 0.018, 1450);
  }
  function laserSound() {
    simpleTone(1040 + Math.random() * 280, 0.18, 'square', 0.25, -460);
    simpleTone(620 + Math.random() * 180, 0.22, 'sawtooth', 0.17, -520, 0.016);
    noiseBurst(0.11, 0.06, 1700);
  }
  function solveSound() {
    simpleTone(380, 0.08, 'square', 0.13, 120, 0);
    simpleTone(560, 0.09, 'square', 0.12, 160, 0.05);
    simpleTone(840, 0.12, 'triangle', 0.11, 220, 0.11);
    simpleTone(1180, 0.18, 'sine', 0.1, 280, 0.16);
  }
  function updateHum() {
    if (!humNodes || !audioUnlocked || !state) return;
    const n = nearFactor();
    const phase = phase01(state.level);
    humNodes.carrier.frequency.setTargetAtTime(72 + phase * 26 + n * 30, audioCtx.currentTime, 0.06);
    humNodes.shimmer.frequency.setTargetAtTime(145 + phase * 60 + n * 120, audioCtx.currentTime, 0.06);
    humNodes.humGain.gain.setTargetAtTime(0.028 + phase * 0.018 + n * 0.05, audioCtx.currentTime, 0.08);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeStars();
    makeBokeh();
    makeHexField();
    makeFighters();
  }

  function makeStars() {
    stars = [];
    const count = Math.max(120, Math.floor((innerWidth * innerHeight) / 9500));
    for (let i = 0; i < count; i++) stars.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, z: Math.random() + 0.2, a: Math.random() * 0.55 + 0.12 });
  }
  function makeBokeh() {
    bokeh = [];
    const count = Math.max(8, Math.floor((innerWidth * innerHeight) / 70000));
    for (let i = 0; i < count; i++) {
      bokeh.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: 30 + Math.random() * 110, z: 0.25 + Math.random() * 0.9, hue: (hue + Math.random() * 120) % 360, a: 0.03 + Math.random() * 0.06 });
    }
  }
  function makeHexField() {
    hexField = [];
    const step = Math.max(68, Math.min(120, innerWidth / 12));
    const rowH = step * 0.86;
    for (let y = -step; y < innerHeight + step; y += rowH) {
      const odd = Math.round(y / rowH) % 2;
      for (let x = -step; x < innerWidth + step; x += step) {
        hexField.push({ x: x + (odd ? step * 0.5 : 0), y, size: step * (0.25 + Math.random() * 0.18), drift: Math.random() * 2 * Math.PI, z: 0.2 + Math.random() * 0.8 });
      }
    }
  }

  function makeFighters() {
    fighters = [];
    const count = Math.max(5, Math.floor(innerWidth / 340));
    for (let i = 0; i < count; i++) fighters.push({
      x: Math.random() * innerWidth, y: innerHeight * (0.12 + Math.random() * 0.36),
      vx: 0.16 + Math.random() * 0.48, vy: (Math.random() - 0.5) * 0.05,
      size: 8 + Math.random() * 10, hue: (hue + 20 + Math.random() * 90) % 360, drift: Math.random() * Math.PI * 2
    });
  }

  function spawnParticles(level) {
    particles = [];
    const count = 66 + Math.floor(level * 2.25);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        a: Math.random() * 0.45 + 0.18,
        tw: Math.random() * Math.PI * 2,
      });
    }
  }

  function buildLevel(level) {
    const band = levelBand(level);
    const base = { level, band: band.band, story: band.story, assist: assistanceForLevel(level), dazzle: dazzleForLevel(level) };
    return buildAlignmentLevel(level, base);
  }


  
  function buildStarterMaskShape() { return buildMaskShape(1); }

  function buildAlignmentLevel(level, base) {
    const seed = level * 9.127;
    const span = level === 1 ? 2.15 : lerp(2.1, Math.PI * 1.12, phase01(level));
    const targetRx = (rand(seed + 3) * 2 - 1) * Math.PI;
    const targetRy = (rand(seed + 4) * 2 - 1) * Math.PI;
    const targetRz = (rand(seed + 5) * 2 - 1) * Math.PI;
    const startOffsetRx = (rand(seed + 31) > 0.5 ? 1 : -1) * span;
    const startOffsetRy = (rand(seed + 41) > 0.5 ? 1 : -1) * (span * 0.88);
    const startOffsetRz = (rand(seed + 51) > 0.5 ? 1 : -1) * (span * 0.7);
    const targetDepth = (rand(seed + 7) * 2 - 1) * lerp(0.08, 0.82, phase01(level));
    const depthSpan = level === 1 ? 0.74 : lerp(0.82, 1.08, phase01(level));
    const startDepth = targetDepth + (rand(seed + 61) > 0.5 ? 1 : -1) * depthSpan;
    const isStarter = level === 1;
    return {
      ...base,
      mode: 'ALIGNMENT',
      objective: isStarter
        ? 'Rotate the live mask until the three-line sigil settles into the ghost mask.'
        : 'Rotate the live mask until it occupies the ghost mask exactly.',
      help: 'Drag to rotate in space. Use the sliders for precise correction. Read the theatrical mask by eye and seat it deliberately into the ghost frame.',
      tolerance: isStarter ? 0.48 : clamp(0.98 - level * 0.0070, 0.11, 0.98),
      depthTolerance: isStarter ? 0.42 : clamp(1.02 - level * 0.0066, 0.16, 1.02),
      magnetRadius: isStarter ? 0.24 : lerp(0.56, 0.03, phase01(level)),
      shape: isStarter ? buildStarterMaskShape() : buildMaskShape(level),
      rx: wrapAngle(targetRx + startOffsetRx),
      ry: wrapAngle(targetRy + startOffsetRy),
      rz: wrapAngle(targetRz + startOffsetRz),
      targetRx,
      targetRy,
      targetRz,
      depth: clamp(startDepth, -1.15, 1.15),
      targetDepth,
      solvedHold: 0,
      autoSpin: level > 14 ? 0.0005 + level * 0.000011 : 0,
      worldSpin: rotationSpeedForLevel(level),
      minSolveTime: isStarter ? 2600 : Math.max(900, 1600 - level * 5),
      tutorialVisibleBoost: isStarter ? 1 : 0,
    };
  }


  function buildMaskShape(level) {
    const pts = [];
    const edges = [];
    const addPt = (x, y, z) => (pts.push({ x, y, z }), pts.length - 1);
    const addEdge = (a, b) => edges.push([a, b]);
    const chain = (arr) => { for (let i = 0; i < arr.length - 1; i++) addEdge(arr[i], arr[i + 1]); };
    const loop = (arr) => { for (let i = 0; i < arr.length; i++) addEdge(arr[i], arr[(i + 1) % arr.length]); };
    const connectPairs = (a, b) => { const n = Math.min(a.length, b.length); for (let i = 0; i < n; i++) addEdge(a[i], b[i]); };
    const arc = (cx, cy, rx, ry, zf, steps, start = Math.PI, end = 0, zCurve = 1.35) => {
      const arr = [];
      for (let i = 0; i < steps; i++) {
        const t = start + (end - start) * (i / (steps - 1));
        const x = cx + Math.cos(t) * rx;
        const y = cy + Math.sin(t) * ry;
        const nx = Math.abs((x - cx) / Math.max(1, rx));
        const ny = Math.abs((y - cy) / Math.max(1, ry));
        const fall = Math.max(0, 1 - (nx * 0.85 + ny * 0.15));
        const z = zf * Math.pow(fall, zCurve);
        arr.push(addPt(x, y, z));
      }
      return arr;
    };
    const oval = (cx, cy, rx, ry, zf, steps, wobble = 0, zCurve = 1.45) => {
      const arr = [];
      for (let i = 0; i < steps; i++) {
        const t = i / steps * Math.PI * 2;
        const x = cx + Math.cos(t) * rx;
        const y = cy + Math.sin(t) * ry + Math.sin(t * 2) * wobble;
        const nx = Math.abs((x - cx) / Math.max(1, rx));
        const ny = Math.abs((y - cy) / Math.max(1, ry));
        const fall = Math.max(0, 1 - (nx * 0.82 + ny * 0.18));
        const z = zf * Math.pow(fall, zCurve);
        arr.push(addPt(x, y, z));
      }
      return arr;
    };

    // Reference-inspired theatrical mask: broad forehead, soft cheeks, calm mouth, narrow chin.
    const topMid = addPt(0, -178, 22);
    const foreheadMid = addPt(0, -118, 58);
    const bridge = addPt(0, -54, 102);
    const noseTip = addPt(0, 8, 126);
    const philtrum = addPt(0, 52, 92);
    const upperLipMid = addPt(0, 92, 74);
    const lowerLipMid = addPt(0, 112, 66);
    const chinTip = addPt(0, 176, 34);
    const centerSpine = [topMid, foreheadMid, bridge, noseTip, philtrum, upperLipMid, lowerLipMid, chinTip];
    chain(centerSpine);

    const leftContour = [
      addPt(-52, -174, 16), addPt(-96, -164, 10), addPt(-128, -138, 10), addPt(-144, -88, 16),
      addPt(-146, -22, 20), addPt(-134, 44, 18), addPt(-110, 104, 12), addPt(-74, 150, 12), addPt(-34, 174, 18)
    ];
    const rightContour = [
      addPt(52, -174, 16), addPt(96, -164, 10), addPt(128, -138, 10), addPt(144, -88, 16),
      addPt(146, -22, 20), addPt(134, 44, 18), addPt(110, 104, 12), addPt(74, 150, 12), addPt(34, 174, 18)
    ];
    chain([topMid, ...leftContour, chinTip]);
    chain([topMid, ...rightContour, chinTip]);

    const foreheadOuter = arc(0, -154, 106, 28, 22, 11, Math.PI * 0.98, Math.PI * 0.02, 1.15);
    const foreheadInner = arc(0, -126, 82, 18, 46, 9, Math.PI * 0.98, Math.PI * 0.02, 1.2);
    chain(foreheadOuter); chain(foreheadInner); connectPairs(foreheadOuter, foreheadInner);

    const leftTemple = arc(-114, -56, 28, 92, 18, 8, -Math.PI / 2, Math.PI / 2, 1.05);
    const rightTemple = arc(114, -56, 28, 92, 18, 8, Math.PI / 2, Math.PI * 1.5, 1.05);
    chain(leftTemple); chain(rightTemple);

    const leftBrow = arc(-46, -68, 34, 10, 72, 7, Math.PI * 0.97, Math.PI * 0.08, 1.3);
    const rightBrow = arc(46, -68, 34, 10, 72, 7, Math.PI * 0.92, Math.PI * 0.03, 1.3);
    chain(leftBrow); chain(rightBrow);

    const leftEyeOuter = oval(-46, -28, 28, 14, 88, 14, 0.8, 1.55);
    const rightEyeOuter = oval(46, -28, 28, 14, 88, 14, 0.8, 1.55);
    const leftEyeInner = oval(-46, -28, 16, 8, 70, 10, 0.4, 1.45);
    const rightEyeInner = oval(46, -28, 16, 8, 70, 10, 0.4, 1.45);
    loop(leftEyeOuter); loop(rightEyeOuter); loop(leftEyeInner); loop(rightEyeInner);
    connectPairs(leftEyeOuter, leftEyeInner); connectPairs(rightEyeOuter, rightEyeInner);

    const noseRidgeL = [foreheadMid, addPt(-9, -44, 98), addPt(-16, -6, 112), addPt(-20, 30, 110)];
    const noseRidgeR = [foreheadMid, addPt(9, -44, 98), addPt(16, -6, 112), addPt(20, 30, 110)];
    chain(noseRidgeL); chain(noseRidgeR);
    const noseBridgeCrossL = addPt(-13, -18, 108);
    const noseBridgeCrossR = addPt(13, -18, 108);
    addEdge(noseBridgeCrossL, noseBridgeCrossR);
    const nostrilArc = arc(0, 18, 28, 15, 106, 9, Math.PI * 0.96, Math.PI * 0.04, 1.45);
    const nostrilInner = arc(0, 22, 18, 7, 92, 7, Math.PI * 0.92, Math.PI * 0.08, 1.3);
    chain(nostrilArc); chain(nostrilInner);
    addEdge(noseRidgeL[2], noseBridgeCrossL); addEdge(noseRidgeR[2], noseBridgeCrossR);
    connectPairs(nostrilArc.slice(1, 8), nostrilInner);

    const leftCheekUpper = arc(-64, 8, 60, 34, 58, 9, Math.PI * 1.02, Math.PI * 0.1, 1.2);
    const rightCheekUpper = arc(64, 8, 60, 34, 58, 9, Math.PI * 0.9, -Math.PI * 0.02, 1.2);
    const leftCheekLower = arc(-54, 66, 54, 30, 42, 8, Math.PI * 1.02, Math.PI * 0.12, 1.16);
    const rightCheekLower = arc(54, 66, 54, 30, 42, 8, Math.PI * 0.88, -Math.PI * 0.02, 1.16);
    chain(leftCheekUpper); chain(rightCheekUpper); chain(leftCheekLower); chain(rightCheekLower);

    const upperLip = oval(0, 98, 46, 13, 74, 16, -1.8, 1.55);
    const lowerLip = oval(0, 116, 40, 16, 62, 16, 1.2, 1.45);
    const mouthInner = oval(0, 107, 22, 6.5, 48, 12, 0, 1.35);
    loop(upperLip); loop(lowerLip); loop(mouthInner);
    connectPairs(upperLip.slice(0, 8), mouthInner.slice(0, 8));
    connectPairs(lowerLip.slice(4, 12), mouthInner.slice(4, 12));

    const jawInnerL = arc(-42, 136, 34, 30, 36, 7, Math.PI * 1.0, Math.PI * 0.1, 1.14);
    const jawInnerR = arc(42, 136, 34, 30, 36, 7, Math.PI * 0.9, 0, 1.14);
    const chinArc = arc(0, 158, 56, 18, 34, 9, Math.PI * 0.98, Math.PI * 0.02, 1.16);
    chain(jawInnerL); chain(jawInnerR); chain(chinArc);

    const scaffolds = [
      [leftContour[1], foreheadOuter[1]],[leftContour[2], leftTemple[2]],[leftContour[3], leftBrow[0]],[leftContour[4], leftEyeOuter[8]],[leftContour[5], leftCheekUpper[5]],[leftContour[6], leftCheekLower[5]],[leftContour[7], jawInnerL[4]],
      [rightContour[1], foreheadOuter[9]],[rightContour[2], rightTemple[5]],[rightContour[3], rightBrow[6]],[rightContour[4], rightEyeOuter[3]],[rightContour[5], rightCheekUpper[3]],[rightContour[6], rightCheekLower[3]],[rightContour[7], jawInnerR[2]],
      [foreheadInner[1], leftBrow[1]],[foreheadInner[7], rightBrow[5]],[leftBrow[3], bridge],[rightBrow[3], bridge],
      [leftEyeOuter[2], noseRidgeL[1]],[leftEyeOuter[11], noseRidgeL[2]],[rightEyeOuter[5], noseRidgeR[1]],[rightEyeOuter[8], noseRidgeR[2]],
      [noseRidgeL[3], nostrilArc[2]],[noseRidgeR[3], nostrilArc[6]],[nostrilArc[2], philtrum],[nostrilArc[6], philtrum],[philtrum, upperLipMid],
      [leftCheekUpper[7], upperLip[9]],[rightCheekUpper[1], upperLip[15]],[leftCheekLower[6], lowerLip[10]],[rightCheekLower[0], lowerLip[14]],
      [upperLip[8], mouthInner[2]],[upperLip[12], mouthInner[8]],[lowerLip[4], mouthInner[4]],[lowerLip[12], mouthInner[10]],
      [lowerLipMid, chinArc[4]],[jawInnerL[5], chinArc[2]],[jawInnerR[1], chinArc[6]],[leftContour[8], chinArc[1]],[rightContour[8], chinArc[7]]
    ];
    scaffolds.forEach(([a, b]) => addEdge(a, b));

    const ordered = [];
    const pushRange = (start, end) => { for (let i = start; i < end; i++) ordered.push(edges[i]); };
    ordered.push(edges[0], edges[1], edges[2]);    // 3-line opening sigil
    pushRange(8, 26);   // contour
    pushRange(3, 8);    // central spine
    pushRange(26, 46);  // forehead bands
    pushRange(46, 62);  // temples
    pushRange(62, 76);  // brows
    pushRange(76, 124); // eyes
    pushRange(124, 155); // nose
    pushRange(155, 189); // cheeks
    pushRange(189, 237); // lips and mouth
    pushRange(237, 260); // jaw and chin
    pushRange(260, edges.length); // surface links

    const maxLines = ordered.length;
    const progress = Math.max(0, (level - 1) / 99);
    const lineCount = Math.min(maxLines, 3 + Math.floor(Math.pow(progress, 1.08) * (maxLines - 3)));
    return { pts, edges: ordered.slice(0, lineCount), lineCount, maxLines };
  }

  function rotatePoint(p, rx, ry, rz, depth) {
    let x = p.x, y = p.y, z = p.z + depth * 90;
    const cosy = Math.cos(ry), siny = Math.sin(ry);
    let nx = x * cosy + z * siny; let nz = -x * siny + z * cosy; x = nx; z = nz;
    const cosx = Math.cos(rx), sinx = Math.sin(rx);
    let ny = y * cosx - z * sinx; nz = y * sinx + z * cosx; y = ny; z = nz;
    const cosz = Math.cos(rz), sinz = Math.sin(rz);
    nx = x * cosz - y * sinz; ny = x * sinz + y * cosz;
    return { x: nx, y: ny, z };
  }
  function project3d(p) {
    const cam = 640;
    const scale = cam / (cam + p.z + 260);
    return { x: innerWidth / 2 + p.x * scale, y: innerHeight / 2 + p.y * scale, s: scale, z: p.z };
  }
  function rotate2dAround(x, y, cx, cy, angle) {
    const dx = x - cx, dy = y - cy;
    const c = Math.cos(angle), s = Math.sin(angle);
    return { x: cx + dx * c - dy * s, y: cy + dx * s + dy * c };
  }

  function setSliderValue(el, out, val) {
    const v = clamp(Math.round(val), -100, 100);
    el.value = v;
    if (out) out.textContent = `${v > 0 ? '+' : ''}${v}`;
  }
  function syncSliders() {
    if (!state) return;
    if (state.mode === 'ALIGNMENT') {
      setSliderValue(sliderX, valueX, angleToSlider(state.rx));
      setSliderValue(sliderY, valueY, angleToSlider(state.ry));
      setSliderValue(sliderZ, valueZ, angleToSlider(state.rz));
      setSliderValue(sliderDepth, valueDepth, clamp(Math.round(state.depth / 1.2 * 100), -100, 100));
    } else if (state.mode === 'CIRCUIT' || (state.mode === 'GATE' && state.phase === 1)) {
      setSliderValue(sliderX, valueX, 0);
      setSliderValue(sliderY, valueY, 0);
      setSliderValue(sliderZ, valueZ, (state.rings[activeRing].angle - state.rings[activeRing].target) / Math.PI * 100);
      setSliderValue(sliderDepth, valueDepth, 0);
    } else {
      setSliderValue(sliderX, valueX, 0);
      setSliderValue(sliderY, valueY, 0);
      setSliderValue(sliderZ, valueZ, 0);
      setSliderValue(sliderDepth, valueDepth, 0);
    }
  }

  function worldAngle(time) { return state ? time * state.worldSpin : 0; }

  function startRunLevel() {
    const level = queue[runIndex];
    state = buildLevel(level);
    solved = false;
    inputLocked = false;
    activeRing = 0;
    overlay.classList.add('hidden');
    levelLabel.textContent = `LEVEL ${level}`;
    bandLabel.textContent = state.band;
    modeLabel.textContent = state.mode;
    objectiveLabel.textContent = state.objective;
    storyLabel.textContent = `${state.story} ${state.shape && state.shape.lineCount ? `Mask density: ${state.shape.lineCount}/${state.shape.maxLines} lines.` : ''}`.trim();
    helpText.textContent = state.help;
    runLabel.textContent = `${queue[runIndex]} / ${queue[queue.length - 1]}`;
    timeLimit = timerForLevel(level);
    levelStartTime = performance.now();
    levelFailed = false;
    timerLabel.textContent = `${timeLimit.toFixed(1)}s`;
    timerLabel.classList.remove('urgent');
    spawnParticles(level);
    syncSliders();
  }
  function resetCurrent() { startRunLevel(); }

  function drawBackdrop(time) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const level = state ? state.level : 1;
    const dazzle = dazzleForLevel(level);
    const px = clamp((pointer.x / innerWidth - 0.5), -0.5, 0.5);
    const py = clamp((pointer.y / innerHeight - 0.5), -0.5, 0.5);
    const near = nearFactor();

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (const b of bokeh) {
      const x = clamp(b.x - px * (16 + dazzle * 12) * b.z, -b.r, innerWidth + b.r);
      const y = clamp(b.y - py * (13 + dazzle * 10) * b.z, -b.r, innerHeight + b.r);
      const rr = b.r * (0.82 + dazzle * 0.14 + near * 0.06);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rr);
      grad.addColorStop(0, `hsla(${b.hue} 100% 80% / ${b.a * dazzle})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();

    for (const s of stars) {
      ctx.globalAlpha = s.a;
      const tw = Math.sin(time * 0.001 * s.z + s.x * 0.01) * 0.3 + 0.7;
      const sx = clamp(s.x - px * (8 + dazzle * 9) * s.z, -3, innerWidth + 3);
      const sy = clamp(s.y - py * (8 + dazzle * 9) * s.z, -3, innerHeight + 3);
      ctx.fillStyle = '#d8f7ff';
      ctx.beginPath(); ctx.arc(sx, sy, s.z * tw, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    for (const p of particles) {
      const d = dist(p.x, p.y, pointer.x, pointer.y);
      const repel = clamp(1 - d / 180, 0, 1);
      const ang = Math.atan2(p.y - pointer.y, p.x - pointer.x);
      p.vx += Math.cos(ang) * repel * 0.02;
      p.vy += Math.sin(ang) * repel * 0.02;
      p.vx *= 0.986; p.vy *= 0.986;
      p.x += p.vx; p.y += p.vy; p.tw += 0.03;
      if (p.x < -10) p.x = innerWidth + 10;
      if (p.x > innerWidth + 10) p.x = -10;
      if (p.y < -10) p.y = innerHeight + 10;
      if (p.y > innerHeight + 10) p.y = -10;
      ctx.globalAlpha = p.a * (0.8 + Math.sin(p.tw) * 0.25);
      ctx.fillStyle = d < 100 ? 'rgba(152,255,205,0.95)' : '#d8f7ff';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + repel * 1.4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.globalAlpha = 0.15 + dazzle * 0.05 + near * 0.05;
    for (const h of hexField) {
      const dx = pointer.x - h.x, dy = pointer.y - h.y;
      const d = Math.hypot(dx, dy);
      const glow = clamp(1 - d / 150, 0, 1);
      const pulse = Math.sin(time * 0.0012 + h.drift) * 0.5 + 0.5;
      const hx = clamp(h.x - px * (16 + dazzle * 14) * h.z, -h.size * 2, innerWidth + h.size * 2);
      const hy = clamp(h.y - py * (12 + dazzle * 10) * h.z, -h.size * 2, innerHeight + h.size * 2);
      drawHex(hx, hy, h.size + glow * 5, glow, pulse);
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.12 + dazzle * 0.03;
    const cx = innerWidth / 2;
    const cy = innerHeight / 2 + 40;
    for (let i = 0; i < 10; i++) {
      const rx = 150 + i * 90 + Math.sin(time * 0.0004 + i) * 8;
      const ry = rx * 0.22;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(134,242,255,0.22)' : 'rgba(143,133,255,0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();

    // distant vector battle
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    fighters.forEach((f, i) => {
      f.x += f.vx * (0.5 + dazzle * 0.28);
      f.y += f.vy + Math.sin(time * 0.001 + f.drift) * 0.08;
      if (f.x > innerWidth + 40) { f.x = -40; f.y = innerHeight * (0.1 + Math.random() * 0.4); }
      const sx = f.x - px * (24 + dazzle * 16); const sy = f.y - py * (18 + dazzle * 12);
      ctx.strokeStyle = `hsla(${f.hue} 100% 72% / 0.42)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(sx - f.size, sy + f.size * 0.18);
      ctx.lineTo(sx, sy);
      ctx.lineTo(sx - f.size, sy - f.size * 0.18);
      ctx.stroke();
      if (Math.random() < 0.0015 + dazzle * 0.0026) {
        battleLasers.push({ x: sx, y: sy, vx: -6 - Math.random() * 7, vy: (Math.random() - 0.5) * 2.5, life: 1, hue: f.hue });
        laserSound();
      }
    });
    for (let i = battleLasers.length - 1; i >= 0; i--) {
      const l = battleLasers[i];
      l.x += l.vx; l.y += l.vy; l.life -= 0.025;
      ctx.strokeStyle = `hsla(${l.hue} 100% 72% / ${Math.max(0, l.life * 0.6)})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(l.x - l.vx * 4, l.y - l.vy * 4); ctx.stroke();
      if (l.life <= 0 || l.x < -80 || l.y < -80 || l.y > innerHeight + 80) battleLasers.splice(i, 1);
    }
    if (Math.random() < 0.001 + dazzle * 0.0022) {
      const y = innerHeight * (0.16 + Math.random() * 0.52);
      battleLasers.push({ x: innerWidth + 120, y, vx: -16 - Math.random() * 14, vy: -1 + Math.random() * 2, life: 1.15, hue: (hue + 140) % 360 });
      laserSound();
    }
    ctx.restore();
  }

  function drawHex(x, y, size, glow, pulse) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = Math.PI / 6 + (i / 6) * Math.PI * 2;
      const px = x + Math.cos(a) * size;
      const py = y + Math.sin(a) * size;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = glow > 0 ? `rgba(152,255,205,${0.06 + glow * 0.35})` : `rgba(134,242,255,${0.03 + pulse * 0.06})`;
    ctx.lineWidth = glow > 0 ? 1.5 : 1;
    ctx.stroke();
  }

  function drawCoreBloom(x, y, radius, coherence) {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const grad = ctx.createRadialGradient(x, y, 6, x, y, radius);
    grad.addColorStop(0, `rgba(152,255,205,${0.1 + coherence * 0.2})`);
    grad.addColorStop(0.35, `rgba(134,242,255,${0.12 + coherence * 0.15})`);
    grad.addColorStop(1, 'rgba(134,242,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawAlignment(time) {
    const wa = worldAngle(time);
    const jitter = nearFactor() > 0.62 ? (nearFactor() - 0.62) * (10 + state.level * 0.08) : 0;
    const tremX = jitter ? Math.sin(time * 0.06) * jitter : 0;
    const tremY = jitter ? Math.cos(time * 0.052) * jitter : 0;
    const alignGhost = state.shape.pts.map(p => {
      const q = rotatePoint(p, state.targetRx + wa * 0.2, state.targetRy + wa, state.targetRz + wa * 0.5, state.targetDepth);
      q.x += tremX * 0.35; q.y += tremY * 0.35;
      return project3d(q);
    });
    const current = state.shape.pts.map(p => {
      const q = rotatePoint(p, state.rx + wa * 0.2, state.ry + wa, state.rz + wa * 0.5, state.depth);
      q.x += tremX; q.y += tremY;
      return project3d(q);
    });
    const edges = state.shape.edges.map(([a, b]) => ({ a: current[a], b: current[b], z: (current[a].z + current[b].z) / 2 }));
    edges.sort((m, n) => m.z - n.z);
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const [a, b] of state.shape.edges) {
      ctx.beginPath(); ctx.moveTo(alignGhost[a].x, alignGhost[a].y); ctx.lineTo(alignGhost[b].x, alignGhost[b].y);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1; ctx.stroke();
    }
    const coherence = getCoherence();
    const visibleBoost = state.tutorialVisibleBoost ? 0.28 : 0;
    for (const seg of edges) {
      ctx.beginPath(); ctx.moveTo(seg.a.x, seg.a.y); ctx.lineTo(seg.b.x, seg.b.y);
      ctx.strokeStyle = `rgba(134,242,255,${lerp(0.16 + visibleBoost, 0.46 + visibleBoost * 0.5, coherence)})`; ctx.lineWidth = 4.4 + visibleBoost * 4; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(seg.a.x, seg.a.y); ctx.lineTo(seg.b.x, seg.b.y);
      const localHue = (hue + time * 0.01 + seg.z * 0.04) % 360;
      ctx.strokeStyle = `hsla(${localHue} 100% ${lerp(62, 84, coherence)}% / ${lerp(0.34 + visibleBoost, 0.98, coherence)})`;
      ctx.lineWidth = 1.2 + seg.a.s * 1.8 + visibleBoost * 2.4; ctx.stroke();
    }
    if (coherence > 0.45) drawCoreBloom(innerWidth / 2, innerHeight / 2, 130 + coherence * 130, coherence);
    if (coherence > 0.62) {
      ctx.globalCompositeOperation = 'screen';
      const sparks = Math.floor((coherence - 0.56) * (46 + state.level * 0.55));
      for (let i = 0; i < sparks; i++) {
        const pt = current[(i * 7 + Math.floor(time * 0.02)) % current.length];
        const ang = (i / Math.max(1, sparks)) * Math.PI * 2 + time * 0.01;
        const len = 6 + coherence * 18;
        ctx.strokeStyle = `rgba(152,255,205,${0.18 + coherence * 0.4})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(pt.x + Math.cos(ang) * len, pt.y + Math.sin(ang) * len);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawCircuit(time) {
    const cx = innerWidth / 2, cy = innerHeight / 2, coherence = getCoherence(), wa = worldAngle(time);
    const trem = coherence > 0.72 ? (coherence - 0.72) * 8 : 0;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(wa); ctx.translate(-cx + Math.sin(time * 0.05) * trem, -cy + Math.cos(time * 0.05) * trem); ctx.lineCap = 'round';
    state.rings.forEach((ring, index) => {
      const selected = index === activeRing; const rad = ring.radius; const segAngle = (Math.PI * 2) / ring.segments;
      ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.strokeStyle = selected ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.06)'; ctx.lineWidth = selected ? 14 : 10; ctx.stroke();
      for (let s = 0; s < ring.segments; s++) {
        const a0 = ring.angle + s * segAngle, a1 = a0 + segAngle * 0.58;
        ctx.beginPath(); ctx.arc(cx, cy, rad, a0, a1);
        const lit = Math.abs(angleDiff(ring.angle, ring.target)) < state.snap * 0.55;
        const alpha = lit ? 0.96 : 0.34 + Math.sin(time * 0.002 + s + index) * 0.08;
        ctx.strokeStyle = lit ? `hsla(${(hue + index * 20) % 360} 100% 76% / ${alpha})` : `rgba(143,133,255,${alpha})`;
        ctx.lineWidth = selected ? 7 : 5; ctx.stroke();
      }
      const ta = ring.target - Math.PI / 2;
      ctx.fillStyle = 'rgba(152,255,205,0.22)'; ctx.beginPath(); ctx.arc(cx + Math.cos(ta) * rad, cy + Math.sin(ta) * rad, 5, 0, Math.PI * 2); ctx.fill();
    });
    for (let i = 0; i < state.rings.length - 1; i++) {
      const inner = state.rings[i], outer = state.rings[i + 1], a = inner.angle - Math.PI / 2;
      const aligned = angleDiff(inner.angle, inner.target) < state.snap * 0.55 && angleDiff(outer.angle, outer.target) < state.snap * 0.55;
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * inner.radius, cy + Math.sin(a) * inner.radius); ctx.lineTo(cx + Math.cos(a) * outer.radius, cy + Math.sin(a) * outer.radius);
      ctx.strokeStyle = aligned ? 'rgba(152,255,205,0.8)' : 'rgba(152,255,205,0.12)'; ctx.lineWidth = aligned ? 4 : 2; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(cx, cy, 18, 0, Math.PI * 2); ctx.fillStyle = `rgba(134,242,255,${0.14 + coherence * 0.6})`; ctx.fill();
    drawCoreBloom(cx, cy, 90 + coherence * 90, coherence); ctx.restore();
  }

  function drawGridPanel(cx, cy, cols, rows, cell, values, locks, time, muted) {
    const w = (cols - 1) * cell, h = (rows - 1) * cell;
    ctx.save();
    ctx.strokeStyle = muted ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1;
    for (let r = 0; r < rows; r++) { ctx.beginPath(); ctx.moveTo(cx - w / 2, cy - h / 2 + r * cell); ctx.lineTo(cx + w / 2, cy - h / 2 + r * cell); ctx.stroke(); }
    for (let c = 0; c < cols; c++) { ctx.beginPath(); ctx.moveTo(cx - w / 2 + c * cell, cy - h / 2); ctx.lineTo(cx - w / 2 + c * cell, cy + h / 2); ctx.stroke(); }
    for (let i = 0; i < values.length; i++) {
      const gx = i % cols, gy = Math.floor(i / cols), x = cx - w / 2 + gx * cell, y = cy - h / 2 + gy * cell;
      const on = values[i], locked = locks ? locks[i] : false;
      ctx.beginPath(); ctx.arc(x, y, cell * 0.18, 0, Math.PI * 2);
      if (on) {
        ctx.fillStyle = muted ? 'rgba(152,255,205,0.34)' : `hsla(${(hue + i * 12 + time * 0.02) % 360} 100% 74% / 0.95)`; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, cell * 0.33, 0, Math.PI * 2); ctx.strokeStyle = muted ? 'rgba(152,255,205,0.2)' : 'rgba(134,242,255,0.3)'; ctx.lineWidth = 2; ctx.stroke();
      } else { ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fill(); }
      if (locked) { ctx.beginPath(); ctx.arc(x, y, cell * 0.1, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,217,140,0.85)'; ctx.fill(); }
    }
    ctx.restore();
  }
  function drawConstellation(time) {
    const cols = state.cols, rows = state.rows, cell = Math.min(58, innerHeight / (rows + 3), innerWidth / (cols + 7));
    const wa = worldAngle(time) * 0.65, coherence = getCoherence(), trem = coherence > 0.82 ? (coherence - 0.82) * 7 : 0;
    const leftX = innerWidth * 0.26, mainX = innerWidth * 0.64, baseY = innerHeight * 0.5;
    drawGridPanel(leftX, baseY, cols, rows, cell, state.target, null, time, true);
    drawGridPanel(mainX, baseY, cols, rows, cell, state.player, state.locked, time, false);
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.62)'; ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('TARGET', leftX, baseY - rows * cell * 0.62 - 26); ctx.fillText('YOUR CONSTELLATION', mainX, baseY - rows * cell * 0.62 - 26); ctx.restore();
    drawCoreBloom(mainX, baseY, 80 + getCoherence() * 80, getCoherence());
  }
  function drawGate(time) {
    const cx = innerWidth / 2, cy = innerHeight / 2, coherence = getCoherence(), ringCoherence = getGateRingCoherence();
    const wa = worldAngle(time) * 0.9, trem = coherence > 0.74 ? (coherence - 0.74) * 9 : 0;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(wa); ctx.translate(-cx + Math.sin(time * 0.05) * trem, -cy + Math.cos(time * 0.05) * trem);
    state.rings.forEach((ring, index) => {
      const selected = index === activeRing && state.phase === 1;
      ctx.beginPath(); ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2); ctx.strokeStyle = selected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)'; ctx.lineWidth = selected ? 13 : 10; ctx.stroke();
      const a = ring.angle - Math.PI / 2; ctx.beginPath(); ctx.arc(cx, cy, ring.radius, a - 0.42, a + 0.42);
      ctx.strokeStyle = angleDiff(ring.angle, ring.target) < state.snap * 0.55 ? 'rgba(152,255,205,0.95)' : `rgba(134,242,255,${0.34 + Math.sin(time * 0.003 + index) * 0.06})`; ctx.lineWidth = 7; ctx.stroke();
      const ta = ring.target - Math.PI / 2; ctx.fillStyle = 'rgba(152,255,205,0.18)'; ctx.beginPath(); ctx.arc(cx + Math.cos(ta) * ring.radius, cy + Math.sin(ta) * ring.radius, 5, 0, Math.PI * 2); ctx.fill();
    });
    if (state.phase >= 2) {
      const nodeRadius = 34 + state.nodes * 1.2;
      for (let i = 0; i < state.nodes; i++) {
        const a = (i / state.nodes) * Math.PI * 2 - Math.PI / 2, x = cx + Math.cos(a) * nodeRadius, y = cy + Math.sin(a) * nodeRadius;
        const on = state.nodePlayer[i], target = state.nodeTarget[i];
        ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2); ctx.fillStyle = on ? `hsla(${(hue + i * 18 + time * 0.03) % 360} 100% 76% / 0.96)` : 'rgba(255,255,255,0.11)'; ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = target ? 'rgba(152,255,205,0.34)' : 'rgba(255,255,255,0.07)'; ctx.stroke();
      }
      ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(255,255,255,0.62)';
      ctx.fillText(`TARGET PULSE: ${state.nodeTarget.filter(Boolean).length}`, cx, cy + 72);
      ctx.fillText(`CURRENT PULSE: ${state.nodePlayer.filter(Boolean).length}`, cx, cy + 90);
    } else {
      ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(255,255,255,0.62)'; ctx.fillText('OUTER GATE MUST STABILISE FIRST', cx, cy + 88);
    }
    drawCoreBloom(cx, cy, 90 + coherence * 130, coherence);
    if (state.phase === 1 && ringCoherence > 0.995) { ctx.fillStyle = 'rgba(152,255,205,0.7)'; ctx.beginPath(); ctx.arc(cx, cy, 26 + Math.sin(time * 0.01) * 2, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
  }

  function getAlignmentCoherence() {
    const rot = 1 - clamp((angleDiff(state.rx, state.targetRx) + angleDiff(state.ry, state.targetRy) + angleDiff(state.rz, state.targetRz)) / (state.tolerance * 7.2), 0, 1);
    const depth = 1 - clamp(Math.abs(state.depth - state.targetDepth) / (state.depthTolerance * 2), 0, 1);
    return clamp(rot * 0.86 + depth * 0.14, 0, 1);
  }
  function getCircuitCoherence() { return state.rings.map(r => 1 - clamp(angleDiff(r.angle, r.target) / (state.snap * 2.2), 0, 1)).reduce((a, b) => a + b, 0) / state.rings.length; }
  function getConstellationCoherence() { let match = 0; for (let i = 0; i < state.target.length; i++) if (state.target[i] === state.player[i]) match++; return match / state.target.length; }
  function getGateRingCoherence() { return state.rings.map(r => 1 - clamp(angleDiff(r.angle, r.target) / (state.snap * 2.2), 0, 1)).reduce((a, b) => a + b, 0) / state.rings.length; }
  function getGateNodeCoherence() { let match = 0; for (let i = 0; i < state.nodeTarget.length; i++) if (state.nodeTarget[i] === state.nodePlayer[i]) match++; return match / state.nodeTarget.length; }
  function getCoherence() {
    if (!state) return 0;
    if (state.mode === 'ALIGNMENT') return getAlignmentCoherence();
    if (state.mode === 'CIRCUIT') return getCircuitCoherence();
    if (state.mode === 'CONSTELLATION') return getConstellationCoherence();
    return clamp(getGateRingCoherence() * 0.62 + (state.phase < 2 ? 0 : getGateNodeCoherence()) * 0.38, 0, 1);
  }

  function magneticAssist() {
    if (!state || inputLocked) return;
    const assist = state.assist || 0;
    if (assist <= 0.001) return;
    if (state.mode === 'ALIGNMENT') {
      const magnet = state.magnetRadius;
      const pull = 0.014 + assist * 0.052;
      if (angleDiff(state.rx, state.targetRx) < magnet) state.rx = lerp(state.rx, state.targetRx, pull);
      if (angleDiff(state.ry, state.targetRy) < magnet) state.ry = lerp(state.ry, state.targetRy, pull);
      if (angleDiff(state.rz, state.targetRz) < magnet) state.rz = lerp(state.rz, state.targetRz, pull * 0.9);
      if (Math.abs(state.depth - state.targetDepth) < magnet * 0.9) state.depth = lerp(state.depth, state.targetDepth, pull);
    } else if (state.mode === 'CIRCUIT' || (state.mode === 'GATE' && state.phase === 1)) {
      for (const ring of state.rings) {
        const diff = angleDiff(ring.angle, ring.target);
        if (diff < state.snap * (1.12 + assist * 2.7)) ring.angle = lerp(ring.angle, ring.target, 0.14 + assist * 0.16);
      }
    }
  }

  function checkSolved() {
    const coherence = getCoherence();
    alignmentSound();
    const elapsed = (performance.now() - levelStartTime) / 1000;
    const remaining = Math.max(0, timeLimit - elapsed);
    timerLabel.textContent = `${remaining.toFixed(1)}s`;
    timerLabel.classList.toggle('urgent', remaining < Math.min(10, timeLimit * 0.25));
    if (!solved && !levelFailed && remaining <= 0) {
      levelFailed = true;
      inputLocked = true;
      overlayTitle.textContent = 'Time collapse';
      overlayText.textContent = 'The chamber slipped out of phase. Try the level again.';
      overlayButton.textContent = 'Retry';
      overlay.classList.remove('hidden');
      noiseBurst(0.18, 0.018, 900);
      simpleTone(180, 0.26, 'sawtooth', 0.02, -80);
      return;
    }
    if (state.mode === 'GATE' && state.phase === 1 && getGateRingCoherence() > 0.995) {
      state.phase = 2;
      objectiveLabel.textContent = 'Now ignite the correct inner nodes and complete the gate.';
      helpText.textContent = 'Phase 2: tap the core nodes. Match the target pulse count and pattern.';
      simpleTone(310, 0.12, 'triangle', 0.018, 80);
    }
    const targetReached = elapsed >= (state.minSolveTime || 0) / 1000 && (() => {
      if (state.mode === 'ALIGNMENT') return coherence > 0.992;
      if (state.mode === 'CIRCUIT') return coherence > 0.991;
      if (state.mode === 'CONSTELLATION') return coherence === 1;
      return state.phase >= 2 && getGateRingCoherence() > 0.995 && getGateNodeCoherence() === 1;
    })();
    if (targetReached) state.solvedHold += 1; else state.solvedHold = Math.max(0, state.solvedHold - 1);
    if (!solved && state.solvedHold > (autoAdvance ? 10 : 18)) {
      solved = true; inputLocked = true;
      solveSound();
      const final = runIndex === queue.length - 1;
      overlayTitle.textContent = final ? 'Journey complete' : `Level ${queue[runIndex]} cleared`;
      overlayText.textContent = final ? (redirect ? 'The exit link is armed. Continue to leave the chamber.' : 'This embedded run is complete.') : `Prepare for level ${queue[runIndex + 1]}.`;
      overlayButton.textContent = final ? (redirect ? 'Open link' : 'Finish') : 'Continue';
      overlay.classList.remove('hidden');
    }
  }

  function continueFlow() {
    if (levelFailed) { startRunLevel(); return; }
    if (!solved) return;
    const final = runIndex === queue.length - 1;
    if (final) { if (redirect) location.href = redirect; return; }
    runIndex += 1; startRunLevel();
  }

  function rotateSelectedRing(delta) {
    if (inputLocked || !state) return;
    if (state.mode !== 'CIRCUIT' && state.mode !== 'GATE') return;
    if (!state.rings.length) return;
    state.rings[activeRing].angle += delta;
  }
  function nearestRingIndex(x, y) {
    const cx = innerWidth / 2, cy = innerHeight / 2, d = dist(cx, cy, x, y);
    let best = 0, bestDiff = Infinity;
    state.rings.forEach((ring, index) => { const diff = Math.abs(d - ring.radius); if (diff < bestDiff) { bestDiff = diff; best = index; } });
    return best;
  }
  function constellationIndexAt(x, y) {
    const cols = state.cols, rows = state.rows, cell = Math.min(58, innerHeight / (rows + 3), innerWidth / (cols + 7));
    const cx = innerWidth * 0.64, cy = innerHeight * 0.5, w = (cols - 1) * cell, h = (rows - 1) * cell;
    for (let i = 0; i < cols * rows; i++) {
      const gx = i % cols, gy = Math.floor(i / cols), nx = cx - w / 2 + gx * cell, ny = cy - h / 2 + gy * cell;
      if (dist(x, y, nx, ny) < cell * 0.28) return i;
    }
    return -1;
  }
  function gateNodeIndexAt(x, y) {
    const cx = innerWidth / 2, cy = innerHeight / 2, nodeRadius = 34 + state.nodes * 1.2;
    for (let i = 0; i < state.nodes; i++) {
      const a = (i / state.nodes) * Math.PI * 2 - Math.PI / 2, nx = cx + Math.cos(a) * nodeRadius, ny = cy + Math.sin(a) * nodeRadius;
      if (dist(x, y, nx, ny) < 16) return i;
    }
    return -1;
  }

  function onPointerDown(x, y) {
    unlockAudio();
    pointer.down = true; pointer.x = pointer.lastX = x; pointer.y = pointer.lastY = y; pointer.dragGlow = 1;
    if (inputLocked || !state) return;
    if (state.mode === 'CIRCUIT') activeRing = nearestRingIndex(x, y);
    else if (state.mode === 'CONSTELLATION') { const idx = constellationIndexAt(x, y); if (idx >= 0 && !state.locked[idx]) state.player[idx] = !state.player[idx]; }
    else if (state.mode === 'GATE') {
      if (state.phase === 1) activeRing = nearestRingIndex(x, y);
      else { const nodeIndex = gateNodeIndexAt(x, y); if (nodeIndex >= 0) state.nodePlayer[nodeIndex] = !state.nodePlayer[nodeIndex]; }
    }
  }
  function onPointerMove(x, y) {
    pointer.x = x; pointer.y = y;
    if (!pointer.down || inputLocked || !state) return;
    const dx = x - pointer.lastX, dy = y - pointer.lastY;
    if (state.mode === 'ALIGNMENT') { state.ry = wrapAngle(state.ry + dx * 0.0048); state.rx = wrapAngle(state.rx + dy * 0.0048); }
    else if (state.mode === 'CIRCUIT') rotateSelectedRing(dx * 0.01);
    else if (state.mode === 'GATE' && state.phase === 1) rotateSelectedRing(dx * 0.01);
    pointer.lastX = x; pointer.lastY = y;
    syncSliders();
  }
  function onPointerUp() { pointer.down = false; }

  function animate(time) {
    drawBackdrop(time);
    pointer.dragGlow *= 0.96;
    if (state) {
      updateHum();
      if (state.mode === 'ALIGNMENT' && !pointer.down && !inputLocked) state.ry = wrapAngle(state.ry + state.autoSpin);
      if (!levelFailed && !solved) magneticAssist();
      if (state.mode === 'ALIGNMENT') drawAlignment(time);
      else if (state.mode === 'CIRCUIT') drawCircuit(time);
      else if (state.mode === 'CONSTELLATION') drawConstellation(time);
      else drawGate(time);
      if (!overlay.classList.contains('hidden') || (!levelFailed && !solved)) checkSolved();
    }
    requestAnimationFrame(animate);
  }

  function sliderNudge(value, scale) { return Number(value) / 100 * scale; }
  sliderX.addEventListener('input', e => {
    unlockAudio();
    sliderSound(e.target.value); if (!state || inputLocked) return; if (state.mode === 'ALIGNMENT') state.rx = sliderToAngle(e.target.value); syncSliders(); });
  sliderY.addEventListener('input', e => {
    unlockAudio();
    sliderSound(e.target.value); if (!state || inputLocked) return; if (state.mode === 'ALIGNMENT') state.ry = sliderToAngle(e.target.value); syncSliders(); });
  sliderZ.addEventListener('input', e => {
    unlockAudio();
    sliderSound(e.target.value);
    if (!state || inputLocked) return;
    if (state.mode === 'ALIGNMENT') state.rz = sliderToAngle(e.target.value);
    else if (state.mode === 'CIRCUIT' || (state.mode === 'GATE' && state.phase === 1)) state.rings[activeRing].angle = state.rings[activeRing].target + sliderNudge(e.target.value, Math.PI);
    syncSliders();
  });
  sliderDepth.addEventListener('input', e => {
    unlockAudio();
    sliderSound(e.target.value); if (!state || inputLocked) return; if (state.mode === 'ALIGNMENT') state.depth = clamp(Number(e.target.value) / 100 * 1.2, -1.2, 1.2); syncSliders(); });

  overlayButton.addEventListener('click', continueFlow);
  if (soundButton) soundButton.addEventListener('click', unlockAudio);

  ['touchstart','touchmove','touchend','mousedown','pointerdown'].forEach(evt => {
    document.getElementById('controls').addEventListener(evt, e => { unlockAudio(); e.stopPropagation(); }, { passive: false });
    window.addEventListener(evt, unlockAudio, { passive: true });
  });
  window.addEventListener('resize', resize);
  resize();
  updateSoundButton();

  canvas.addEventListener('mousedown', e => onPointerDown(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => onPointerMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', onPointerUp);
  canvas.addEventListener('touchstart', e => { const t = e.touches[0]; if (t) onPointerDown(t.clientX, t.clientY); }, { passive: false });
  window.addEventListener('touchmove', e => { const t = e.touches[0]; if (t) onPointerMove(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchend', onPointerUp, { passive: true });
  canvas.addEventListener('wheel', e => {
    unlockAudio();
    if (!state || inputLocked) return;
    if (state.mode === 'ALIGNMENT') state.depth = clamp(state.depth + e.deltaY * -0.0013, -1.2, 1.2);
    else if (state.mode === 'CIRCUIT') rotateSelectedRing(e.deltaY * -0.005);
    else if (state.mode === 'GATE' && state.phase === 1) rotateSelectedRing(e.deltaY * -0.005);
    syncSliders();
    e.preventDefault();
  }, { passive: false });
  window.addEventListener('keydown', e => {
    if (!state) return;
    const key = e.key.toLowerCase();
    if (key === 'r') resetCurrent();
    if (key === 'h') document.body.classList.toggle('hide-ui');
    if (inputLocked) return;
    if (state.mode === 'ALIGNMENT') { if (key === 'a') state.rz = wrapAngle(state.rz - 0.12); if (key === 'd') state.rz = wrapAngle(state.rz + 0.12); }
    else if (state.mode === 'CIRCUIT' || (state.mode === 'GATE' && state.phase === 1)) {
      if (key === 'a') rotateSelectedRing(-state.snap); if (key === 'd') rotateSelectedRing(state.snap);
      if (key === 'w') activeRing = clamp(activeRing - 1, 0, state.rings.length - 1);
      if (key === 's') activeRing = clamp(activeRing + 1, 0, state.rings.length - 1);
    }
    syncSliders();
  });

  startRunLevel();
  requestAnimationFrame(animate);
})();
