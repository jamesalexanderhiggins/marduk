(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const levelLabel = document.getElementById('levelLabel');
  const bandLabel = document.getElementById('bandLabel');
  const modeLabel = document.getElementById('modeLabel');
  const objectiveLabel = document.getElementById('objectiveLabel');
  const storyLabel = document.getElementById('storyLabel');
  const helpText = document.getElementById('helpText');
  const coherenceBar = document.getElementById('coherenceBar');
  const runLabel = document.getElementById('runLabel');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayText = document.getElementById('overlayText');
  const overlayButton = document.getElementById('overlayButton');

  const params = new URLSearchParams(location.search);
  const levelParam = params.get('level');
  const rangeParam = params.get('range');
  const redirect = params.get('redirect') || '';
  const autoAdvance = params.get('auto') !== '0';
  const hue = Number(params.get('hue') || '195');

  document.documentElement.style.setProperty('--line', `hsl(${hue} 100% 76%)`);
  document.documentElement.style.setProperty('--line2', `hsl(${(hue + 56) % 360} 100% 74%)`);
  document.documentElement.style.setProperty('--accent', `hsl(${(hue + 118) % 360} 100% 79%)`);

  const pointer = { x: 0, y: 0, down: false, lastX: 0, lastY: 0 };
  let particles = [];
  let stars = [];
  let queue = parseQueue();
  let runIndex = 0;
  let state = null;
  let solved = false;
  let inputLocked = false;
  let activeRing = 0;
  let animationHandle = 0;

  const BANDS = [
    { start: 1, end: 25, band: 'ASCENT', mode: 'ALIGNMENT', story: 'The machine wakes and waits for calibration.' },
    { start: 26, end: 50, band: 'WEAVE', mode: 'CIRCUIT', story: 'You enter the nerve-rings that carry its thought.' },
    { start: 51, end: 75, band: 'CHORUS', mode: 'CONSTELLATION', story: 'The chamber demands pattern, memory, and restraint.' },
    { start: 76, end: 100, band: 'THRESHOLD', mode: 'GATE', story: 'Only a complete mind can open the final architecture.' },
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
    if (levelParam && /^\d+$/.test(levelParam)) {
      return [clamp(Number(levelParam), 1, 100)];
    }
    const full = [];
    for (let i = 1; i <= 100; i++) full.push(i);
    return full;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeStars();
  }

  function makeStars() {
    stars = [];
    const count = Math.max(120, Math.floor((innerWidth * innerHeight) / 10000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        z: Math.random() * 1 + 0.2,
        a: Math.random() * 0.5 + 0.15,
      });
    }
  }

  function rand(seed) {
    return Math.abs(Math.sin(seed * 141.73 + seed * seed * 0.171 + 1.13));
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function dist(ax, ay, bx, by) {
    const dx = bx - ax;
    const dy = by - ay;
    return Math.hypot(dx, dy);
  }
  function angleDiff(a, b) {
    let d = (a - b) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return Math.abs(d);
  }
  function levelBand(level) {
    return BANDS.find(b => level >= b.start && level <= b.end) || BANDS[0];
  }

  function spawnParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.13,
        vy: (Math.random() - 0.5) * 0.13,
        a: Math.random() * 0.45 + 0.2,
      });
    }
  }

  function buildLevel(level) {
    const band = levelBand(level);
    const base = { level, band: band.band, story: band.story };
    if (band.mode === 'ALIGNMENT') return buildAlignmentLevel(level, base);
    if (band.mode === 'CIRCUIT') return buildCircuitLevel(level, base);
    if (band.mode === 'CONSTELLATION') return buildConstellationLevel(level, base);
    return buildGateLevel(level, base);
  }

  function buildAlignmentLevel(level, base) {
    const complexity = clamp(5 + Math.floor(level * 0.28), 5, 13);
    const layers = clamp(2 + Math.floor(level / 8), 2, 5);
    const seed = level * 9.127;
    return {
      ...base,
      mode: 'ALIGNMENT',
      objective: 'Drag to rotate the frame until it locks into the ghost orientation.',
      help: 'Drag to rotate. Wheel changes depth. A / D rotate on the Z axis. R resets.',
      tolerance: clamp(0.48 - level * 0.009, 0.085, 0.48),
      depthTolerance: clamp(0.72 - level * 0.01, 0.12, 0.72),
      shape: buildAlignmentShape(complexity, layers, level),
      rx: rand(seed) * Math.PI * 2,
      ry: rand(seed + 1) * Math.PI * 2,
      rz: rand(seed + 2) * Math.PI * 2,
      targetRx: rand(seed + 3) * Math.PI * 2,
      targetRy: rand(seed + 4) * Math.PI * 2,
      targetRz: rand(seed + 5) * Math.PI * 2,
      depth: rand(seed + 6) * 1.8 - 0.9,
      targetDepth: (rand(seed + 7) * 2 - 1) * (level > 12 ? 0.8 : 0.35),
      solvedHold: 0,
      autoSpin: level > 15 ? 0.0015 + level * 0.00002 : 0,
    };
  }

  function buildCircuitLevel(level, base) {
    const count = clamp(3 + Math.floor((level - 26) / 4), 3, 8);
    const seed = level * 12.331;
    const rings = [];
    for (let i = 0; i < count; i++) {
      rings.push({
        radius: 62 + i * 34,
        segments: clamp(6 + i * 2 + Math.floor((level - 26) / 5), 6, 18),
        angle: Math.floor(rand(seed + i) * 12) * (Math.PI / 6),
        target: Math.floor(rand(seed + i + 8) * 12) * (Math.PI / 6),
      });
    }
    return {
      ...base,
      mode: 'CIRCUIT',
      objective: 'Select rings and rotate them until every conduit glows continuous.',
      help: 'Click or tap a ring to select it. Drag left or right, use wheel, or A / D to rotate. R resets.',
      rings,
      solvedHold: 0,
      snap: Math.PI / 12,
      pulse: 0.8 + (level - 26) * 0.03,
    };
  }

  function buildConstellationLevel(level, base) {
    const cols = clamp(4 + Math.floor((level - 51) / 7), 4, 7);
    const rows = clamp(4 + Math.floor((level - 51) / 8), 4, 7);
    const total = cols * rows;
    const density = clamp(0.24 + (level - 51) * 0.008, 0.24, 0.56);
    const seed = level * 7.171;
    const target = new Array(total).fill(false);
    const locked = new Array(total).fill(false);
    for (let i = 0; i < total; i++) {
      const r = rand(seed + i * 0.81);
      if (r < density) target[i] = true;
      if (level > 62 && rand(seed + i * 1.73) < 0.08) locked[i] = true;
    }
    if (!target.some(Boolean)) target[Math.floor(total / 2)] = true;
    const player = new Array(total).fill(false);
    return {
      ...base,
      mode: 'CONSTELLATION',
      objective: 'Rebuild the luminous pattern shown at left by toggling the main grid.',
      help: 'Click nodes to toggle them. Locked nodes cannot change. Match the target pattern exactly. R resets.',
      cols,
      rows,
      target,
      player,
      locked,
      solvedHold: 0,
    };
  }

  function buildGateLevel(level, base) {
    const seed = level * 19.917;
    const gateCount = clamp(4 + Math.floor((level - 76) / 5), 4, 8);
    const nodes = clamp(5 + Math.floor((level - 76) / 4), 5, 10);
    const ringAngles = [];
    for (let i = 0; i < gateCount; i++) {
      ringAngles.push({
        radius: 70 + i * 28,
        angle: Math.floor(rand(seed + i) * 12) * (Math.PI / 6),
        target: Math.floor(rand(seed + i + 10) * 12) * (Math.PI / 6),
      });
    }
    const nodeTarget = [];
    const nodePlayer = new Array(nodes).fill(false);
    for (let i = 0; i < nodes; i++) {
      nodeTarget.push(rand(seed + i * 2.1) > 0.42);
    }
    if (!nodeTarget.some(Boolean)) nodeTarget[0] = true;
    return {
      ...base,
      mode: 'GATE',
      objective: 'First align the outer gate, then ignite the correct inner nodes.',
      help: 'Phase 1: select rings and rotate them. Phase 2: click the core nodes to match the target pulse count. R resets.',
      phase: 1,
      rings: ringAngles,
      nodes,
      nodeTarget,
      nodePlayer,
      solvedHold: 0,
      snap: Math.PI / 12,
    };
  }

  function buildAlignmentShape(complexity, layers, level) {
    const pts = [];
    const edges = [];
    for (let layer = 0; layer < layers; layer++) {
      const radius = 70 + layer * 34;
      const z = (layer - (layers - 1) / 2) * 48;
      const start = pts.length;
      for (let i = 0; i < complexity; i++) {
        const a = (i / complexity) * Math.PI * 2;
        const warp = Math.sin(i * 2.17 + layer * 0.73 + level * 0.1) * 18;
        pts.push({ x: Math.cos(a) * (radius + warp), y: Math.sin(a) * (radius - warp * 0.3), z });
        edges.push([start + i, start + ((i + 1) % complexity)]);
        if (layer > 0) edges.push([start + i, start + i - complexity]);
        if (i % 2 === 0 && layer > 0) edges.push([start + i, start + ((i + 1) % complexity) - complexity]);
      }
    }
    return { pts, edges };
  }

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
    storyLabel.textContent = state.story;
    helpText.textContent = state.help;
    runLabel.textContent = `${queue[runIndex]} / ${queue[queue.length - 1]}`;
    coherenceBar.style.width = '0%';
    spawnParticles(56 + Math.floor(level * 1.2));
  }

  function resetCurrent() {
    startRunLevel();
  }

  function rotatePoint(p, rx, ry, rz, depth) {
    let x = p.x;
    let y = p.y;
    let z = p.z + depth * 90;

    const cosy = Math.cos(ry), siny = Math.sin(ry);
    let nx = x * cosy + z * siny;
    let nz = -x * siny + z * cosy;
    x = nx; z = nz;

    const cosx = Math.cos(rx), sinx = Math.sin(rx);
    let ny = y * cosx - z * sinx;
    nz = y * sinx + z * cosx;
    y = ny; z = nz;

    const cosz = Math.cos(rz), sinz = Math.sin(rz);
    nx = x * cosz - y * sinz;
    ny = x * sinz + y * cosz;
    return { x: nx, y: ny, z };
  }

  function project3d(p) {
    const cam = 640;
    const scale = cam / (cam + p.z + 260);
    return {
      x: innerWidth / 2 + p.x * scale,
      y: innerHeight / 2 + p.y * scale,
      s: scale,
      z: p.z,
    };
  }

  function drawBackdrop(time) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const s of stars) {
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#d8f7ff';
      const tw = Math.sin(time * 0.001 * s.z + s.x * 0.01) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.z * tw, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = innerWidth + 10;
      if (p.x > innerWidth + 10) p.x = -10;
      if (p.y < -10) p.y = innerHeight + 10;
      if (p.y > innerHeight + 10) p.y = -10;
      ctx.globalAlpha = p.a;
      ctx.fillStyle = '#d8f7ff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.globalAlpha = 0.14;
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
  }

  function drawAlignment(time) {
    const alignGhost = state.shape.pts.map(p => project3d(rotatePoint(p, state.targetRx, state.targetRy, state.targetRz, state.targetDepth)));
    const current = state.shape.pts.map(p => project3d(rotatePoint(p, state.rx, state.ry, state.rz, state.depth)));
    const currentEdges = state.shape.edges.map(([a, b]) => ({ a: current[a], b: current[b], z: (current[a].z + current[b].z) / 2 }));
    currentEdges.sort((m, n) => m.z - n.z);

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const [a, b] of state.shape.edges) {
      ctx.beginPath();
      ctx.moveTo(alignGhost[a].x, alignGhost[a].y);
      ctx.lineTo(alignGhost[b].x, alignGhost[b].y);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    const coherence = getCoherence();
    for (const seg of currentEdges) {
      ctx.beginPath();
      ctx.moveTo(seg.a.x, seg.a.y);
      ctx.lineTo(seg.b.x, seg.b.y);
      ctx.strokeStyle = `rgba(134,242,255,${lerp(0.16, 0.42, coherence)})`;
      ctx.lineWidth = 4.4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(seg.a.x, seg.a.y);
      ctx.lineTo(seg.b.x, seg.b.y);
      const localHue = (hue + time * 0.01 + seg.z * 0.04) % 360;
      ctx.strokeStyle = `hsla(${localHue} 100% ${lerp(62, 82, coherence)}% / ${lerp(0.34, 0.94, coherence)})`;
      ctx.lineWidth = 1.2 + seg.a.s * 1.8;
      ctx.stroke();
    }
    if (coherence > 0.7) {
      drawCoreBloom(innerWidth / 2, innerHeight / 2, 130 + coherence * 120, coherence);
    }
    ctx.restore();
  }

  function drawCircuit(time) {
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    ctx.save();
    ctx.lineCap = 'round';
    const coherence = getCoherence();
    state.rings.forEach((ring, index) => {
      const selected = index === activeRing;
      const rad = ring.radius;
      const segAngle = (Math.PI * 2) / ring.segments;

      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, Math.PI * 2);
      ctx.strokeStyle = selected ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.06)';
      ctx.lineWidth = selected ? 14 : 10;
      ctx.stroke();

      for (let s = 0; s < ring.segments; s++) {
        const a0 = ring.angle + s * segAngle;
        const a1 = a0 + segAngle * 0.58;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, a0, a1);
        const lit = Math.abs(angleDiff(ring.angle, ring.target)) < state.snap * 0.55;
        const alpha = lit ? 0.96 : 0.34 + Math.sin(time * 0.002 + s + index) * 0.08;
        ctx.strokeStyle = lit
          ? `hsla(${(hue + index * 20) % 360} 100% 76% / ${alpha})`
          : `rgba(143,133,255,${alpha})`;
        ctx.lineWidth = selected ? 7 : 5;
        ctx.stroke();
      }

      const targetA = ring.target - Math.PI / 2;
      const tx = cx + Math.cos(targetA) * rad;
      const ty = cy + Math.sin(targetA) * rad;
      ctx.fillStyle = 'rgba(152,255,205,0.22)';
      ctx.beginPath();
      ctx.arc(tx, ty, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < state.rings.length - 1; i++) {
      const inner = state.rings[i];
      const outer = state.rings[i + 1];
      const a = inner.angle - Math.PI / 2;
      const aligned = angleDiff(inner.angle, inner.target) < state.snap * 0.55 && angleDiff(outer.angle, outer.target) < state.snap * 0.55;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * inner.radius, cy + Math.sin(a) * inner.radius);
      ctx.lineTo(cx + Math.cos(a) * outer.radius, cy + Math.sin(a) * outer.radius);
      ctx.strokeStyle = aligned ? 'rgba(152,255,205,0.8)' : 'rgba(152,255,205,0.12)';
      ctx.lineWidth = aligned ? 4 : 2;
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(134,242,255,${0.14 + coherence * 0.6})`;
    ctx.fill();
    drawCoreBloom(cx, cy, 90 + coherence * 90, coherence);
    ctx.restore();
  }

  function drawConstellation(time) {
    const cols = state.cols;
    const rows = state.rows;
    const cell = Math.min(58, innerHeight / (rows + 3), innerWidth / (cols + 7));
    const leftX = innerWidth * 0.26;
    const mainX = innerWidth * 0.64;
    const baseY = innerHeight * 0.5;

    drawGridPanel(leftX, baseY, cols, rows, cell, state.target, null, time, true);
    drawGridPanel(mainX, baseY, cols, rows, cell, state.player, state.locked, time, false);

    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.62)';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET', leftX, baseY - rows * cell * 0.62 - 26);
    ctx.fillText('YOUR CONSTELLATION', mainX, baseY - rows * cell * 0.62 - 26);
    ctx.restore();

    const coherence = getCoherence();
    drawCoreBloom(mainX, baseY, 80 + coherence * 80, coherence);
  }

  function drawGridPanel(cx, cy, cols, rows, cell, values, locks, time, muted) {
    const w = (cols - 1) * cell;
    const h = (rows - 1) * cell;
    ctx.save();
    ctx.strokeStyle = muted ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    for (let r = 0; r < rows; r++) {
      ctx.beginPath();
      ctx.moveTo(cx - w / 2, cy - h / 2 + r * cell);
      ctx.lineTo(cx + w / 2, cy - h / 2 + r * cell);
      ctx.stroke();
    }
    for (let c = 0; c < cols; c++) {
      ctx.beginPath();
      ctx.moveTo(cx - w / 2 + c * cell, cy - h / 2);
      ctx.lineTo(cx - w / 2 + c * cell, cy + h / 2);
      ctx.stroke();
    }

    for (let i = 0; i < values.length; i++) {
      const gx = i % cols;
      const gy = Math.floor(i / cols);
      const x = cx - w / 2 + gx * cell;
      const y = cy - h / 2 + gy * cell;
      const on = values[i];
      const locked = locks ? locks[i] : false;
      ctx.beginPath();
      ctx.arc(x, y, cell * 0.18, 0, Math.PI * 2);
      if (on) {
        ctx.fillStyle = muted ? 'rgba(152,255,205,0.34)' : `hsla(${(hue + i * 12 + time * 0.02) % 360} 100% 74% / 0.95)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, cell * 0.33, 0, Math.PI * 2);
        ctx.strokeStyle = muted ? 'rgba(152,255,205,0.2)' : 'rgba(134,242,255,0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fill();
      }
      if (locked) {
        ctx.beginPath();
        ctx.arc(x, y, cell * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,217,140,0.85)';
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawGate(time) {
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    ctx.save();
    const coherence = getCoherence();
    const ringCoherence = getGateRingCoherence();

    state.rings.forEach((ring, index) => {
      const selected = index === activeRing && state.phase === 1;
      ctx.beginPath();
      ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
      ctx.strokeStyle = selected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)';
      ctx.lineWidth = selected ? 13 : 10;
      ctx.stroke();
      const a = ring.angle - Math.PI / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, ring.radius, a - 0.42, a + 0.42);
      ctx.strokeStyle = angleDiff(ring.angle, ring.target) < state.snap * 0.55 ? 'rgba(152,255,205,0.95)' : `rgba(134,242,255,${0.34 + Math.sin(time * 0.003 + index) * 0.06})`;
      ctx.lineWidth = 7;
      ctx.stroke();
      const ta = ring.target - Math.PI / 2;
      ctx.fillStyle = 'rgba(152,255,205,0.18)';
      ctx.beginPath();
      ctx.arc(cx + Math.cos(ta) * ring.radius, cy + Math.sin(ta) * ring.radius, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    if (state.phase >= 2) {
      const nodeRadius = 34 + state.nodes * 1.2;
      for (let i = 0; i < state.nodes; i++) {
        const a = (i / state.nodes) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * nodeRadius;
        const y = cy + Math.sin(a) * nodeRadius;
        const on = state.nodePlayer[i];
        const target = state.nodeTarget[i];
        ctx.beginPath();
        ctx.arc(x, y, 11, 0, Math.PI * 2);
        ctx.fillStyle = on ? `hsla(${(hue + i * 18 + time * 0.03) % 360} 100% 76% / 0.96)` : 'rgba(255,255,255,0.11)';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = target ? 'rgba(152,255,205,0.34)' : 'rgba(255,255,255,0.07)';
        ctx.stroke();
      }
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.62)';
      ctx.fillText(`TARGET PULSE: ${state.nodeTarget.filter(Boolean).length}`, cx, cy + 72);
      ctx.fillText(`CURRENT PULSE: ${state.nodePlayer.filter(Boolean).length}`, cx, cy + 90);
    } else {
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.62)';
      ctx.fillText('OUTER GATE MUST STABILISE FIRST', cx, cy + 88);
    }

    drawCoreBloom(cx, cy, 90 + coherence * 130, coherence);
    if (state.phase === 1 && ringCoherence > 0.995) {
      ctx.fillStyle = 'rgba(152,255,205,0.7)';
      ctx.beginPath();
      ctx.arc(cx, cy, 26 + Math.sin(time * 0.01) * 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawCoreBloom(x, y, radius, coherence) {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const grad = ctx.createRadialGradient(x, y, 6, x, y, radius);
    grad.addColorStop(0, `rgba(152,255,205,${0.1 + coherence * 0.18})`);
    grad.addColorStop(0.35, `rgba(134,242,255,${0.12 + coherence * 0.14})`);
    grad.addColorStop(1, 'rgba(134,242,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function getAlignmentCoherence() {
    const rot = 1 - clamp((angleDiff(state.rx, state.targetRx) + angleDiff(state.ry, state.targetRy) + angleDiff(state.rz, state.targetRz)) / (state.tolerance * 7.2), 0, 1);
    const depth = 1 - clamp(Math.abs(state.depth - state.targetDepth) / (state.depthTolerance * 2), 0, 1);
    return clamp(rot * 0.86 + depth * 0.14, 0, 1);
  }
  function getCircuitCoherence() {
    const each = state.rings.map(r => 1 - clamp(angleDiff(r.angle, r.target) / (state.snap * 2.2), 0, 1));
    return each.reduce((a, b) => a + b, 0) / each.length;
  }
  function getConstellationCoherence() {
    let match = 0;
    for (let i = 0; i < state.target.length; i++) {
      if (state.target[i] === state.player[i]) match++;
    }
    return match / state.target.length;
  }
  function getGateRingCoherence() {
    const each = state.rings.map(r => 1 - clamp(angleDiff(r.angle, r.target) / (state.snap * 2.2), 0, 1));
    return each.reduce((a, b) => a + b, 0) / each.length;
  }
  function getGateNodeCoherence() {
    let match = 0;
    for (let i = 0; i < state.nodeTarget.length; i++) {
      if (state.nodeTarget[i] === state.nodePlayer[i]) match++;
    }
    return match / state.nodeTarget.length;
  }

  function getCoherence() {
    if (!state) return 0;
    if (state.mode === 'ALIGNMENT') return getAlignmentCoherence();
    if (state.mode === 'CIRCUIT') return getCircuitCoherence();
    if (state.mode === 'CONSTELLATION') return getConstellationCoherence();
    const ring = getGateRingCoherence();
    const node = state.phase < 2 ? 0 : getGateNodeCoherence();
    return clamp(ring * 0.62 + node * 0.38, 0, 1);
  }

  function checkSolved() {
    const coherence = getCoherence();
    coherenceBar.style.width = `${Math.round(coherence * 100)}%`;

    if (state.mode === 'GATE' && state.phase === 1 && getGateRingCoherence() > 0.995) {
      state.phase = 2;
      objectiveLabel.textContent = 'Now ignite the correct inner nodes and complete the gate.';
      helpText.textContent = 'Phase 2: click the core nodes. Match the target pulse count and pattern. R resets.';
    }

    const targetReached = (() => {
      if (state.mode === 'ALIGNMENT') return coherence > 0.992;
      if (state.mode === 'CIRCUIT') return coherence > 0.995;
      if (state.mode === 'CONSTELLATION') return coherence === 1;
      return state.phase >= 2 && getGateRingCoherence() > 0.995 && getGateNodeCoherence() === 1;
    })();

    if (targetReached) state.solvedHold += 1;
    else state.solvedHold = Math.max(0, state.solvedHold - 1);

    if (!solved && state.solvedHold > (autoAdvance ? 10 : 18)) {
      solved = true;
      inputLocked = true;
      const final = runIndex === queue.length - 1;
      overlayTitle.textContent = final ? 'Journey complete' : `Level ${queue[runIndex]} cleared`;
      overlayText.textContent = final
        ? (redirect ? 'The exit link is armed. Continue to leave the chamber.' : 'This embedded run is complete.')
        : `Prepare for level ${queue[runIndex + 1]}.`;
      overlayButton.textContent = final ? (redirect ? 'Open link' : 'Finish') : 'Continue';
      overlay.classList.remove('hidden');
    }
  }

  function continueFlow() {
    if (!solved) return;
    const final = runIndex === queue.length - 1;
    if (final) {
      if (redirect) location.href = redirect;
      return;
    }
    runIndex += 1;
    startRunLevel();
  }

  function rotateSelectedRing(delta) {
    if (inputLocked || !state) return;
    if (state.mode !== 'CIRCUIT' && state.mode !== 'GATE') return;
    const rings = state.rings;
    if (!rings.length) return;
    rings[activeRing].angle += delta;
  }

  function nearestRingIndex(x, y) {
    if (!state || !state.rings) return 0;
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    const d = dist(cx, cy, x, y);
    let best = 0;
    let bestDiff = Infinity;
    state.rings.forEach((ring, index) => {
      const diff = Math.abs(d - ring.radius);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = index;
      }
    });
    return best;
  }

  function constellationIndexAt(x, y, targetPanel = false) {
    const cols = state.cols;
    const rows = state.rows;
    const cell = Math.min(58, innerHeight / (rows + 3), innerWidth / (cols + 7));
    const cx = targetPanel ? innerWidth * 0.26 : innerWidth * 0.64;
    const cy = innerHeight * 0.5;
    const w = (cols - 1) * cell;
    const h = (rows - 1) * cell;
    for (let i = 0; i < cols * rows; i++) {
      const gx = i % cols;
      const gy = Math.floor(i / cols);
      const nx = cx - w / 2 + gx * cell;
      const ny = cy - h / 2 + gy * cell;
      if (dist(x, y, nx, ny) < cell * 0.28) return i;
    }
    return -1;
  }

  function gateNodeIndexAt(x, y) {
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    const nodeRadius = 34 + state.nodes * 1.2;
    for (let i = 0; i < state.nodes; i++) {
      const a = (i / state.nodes) * Math.PI * 2 - Math.PI / 2;
      const nx = cx + Math.cos(a) * nodeRadius;
      const ny = cy + Math.sin(a) * nodeRadius;
      if (dist(x, y, nx, ny) < 16) return i;
    }
    return -1;
  }

  function onPointerDown(x, y) {
    pointer.down = true;
    pointer.x = pointer.lastX = x;
    pointer.y = pointer.lastY = y;
    if (inputLocked || !state) return;

    if (state.mode === 'CIRCUIT') {
      activeRing = nearestRingIndex(x, y);
    } else if (state.mode === 'CONSTELLATION') {
      const idx = constellationIndexAt(x, y, false);
      if (idx >= 0 && !state.locked[idx]) {
        state.player[idx] = !state.player[idx];
      }
    } else if (state.mode === 'GATE') {
      if (state.phase === 1) {
        activeRing = nearestRingIndex(x, y);
      } else {
        const nodeIndex = gateNodeIndexAt(x, y);
        if (nodeIndex >= 0) {
          state.nodePlayer[nodeIndex] = !state.nodePlayer[nodeIndex];
        }
      }
    }
  }

  function onPointerMove(x, y) {
    if (!state) return;
    pointer.x = x;
    pointer.y = y;
    if (!pointer.down || inputLocked) return;

    const dx = x - pointer.lastX;
    const dy = y - pointer.lastY;

    if (state.mode === 'ALIGNMENT') {
      state.ry += dx * 0.008;
      state.rx += dy * 0.008;
    } else if (state.mode === 'CIRCUIT') {
      rotateSelectedRing(dx * 0.01);
    } else if (state.mode === 'GATE' && state.phase === 1) {
      rotateSelectedRing(dx * 0.01);
    }

    pointer.lastX = x;
    pointer.lastY = y;
  }

  function onPointerUp() {
    pointer.down = false;
  }

  function animate(time) {
    drawBackdrop(time);
    if (state) {
      if (state.mode === 'ALIGNMENT' && !pointer.down && !inputLocked) {
        state.ry += state.autoSpin;
      }
      if (state.mode === 'ALIGNMENT') drawAlignment(time);
      else if (state.mode === 'CIRCUIT') drawCircuit(time);
      else if (state.mode === 'CONSTELLATION') drawConstellation(time);
      else drawGate(time);
      checkSolved();
    }
    animationHandle = requestAnimationFrame(animate);
  }

  overlayButton.addEventListener('click', continueFlow);
  window.addEventListener('resize', resize);
  resize();

  canvas.addEventListener('mousedown', e => onPointerDown(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => onPointerMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', onPointerUp);

  canvas.addEventListener('touchstart', e => {
    const t = e.touches[0];
    if (t) onPointerDown(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (t) onPointerMove(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchend', onPointerUp, { passive: true });

  canvas.addEventListener('wheel', e => {
    if (!state || inputLocked) return;
    if (state.mode === 'ALIGNMENT') {
      state.depth = clamp(state.depth + e.deltaY * -0.0013, -1.2, 1.2);
    } else if (state.mode === 'CIRCUIT') {
      rotateSelectedRing(e.deltaY * -0.005);
    } else if (state.mode === 'GATE' && state.phase === 1) {
      rotateSelectedRing(e.deltaY * -0.005);
    }
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('keydown', e => {
    if (!state) return;
    const key = e.key.toLowerCase();
    if (key === 'r') resetCurrent();
    if (key === 'h') document.body.classList.toggle('hide-ui');
    if (inputLocked) return;

    if (state.mode === 'ALIGNMENT') {
      if (key === 'a') state.rz -= 0.12;
      if (key === 'd') state.rz += 0.12;
    } else if (state.mode === 'CIRCUIT') {
      if (key === 'a') rotateSelectedRing(-state.snap);
      if (key === 'd') rotateSelectedRing(state.snap);
      if (key === 'w') activeRing = clamp(activeRing - 1, 0, state.rings.length - 1);
      if (key === 's') activeRing = clamp(activeRing + 1, 0, state.rings.length - 1);
    } else if (state.mode === 'GATE') {
      if (state.phase === 1) {
        if (key === 'a') rotateSelectedRing(-state.snap);
        if (key === 'd') rotateSelectedRing(state.snap);
        if (key === 'w') activeRing = clamp(activeRing - 1, 0, state.rings.length - 1);
        if (key === 's') activeRing = clamp(activeRing + 1, 0, state.rings.length - 1);
      }
    }
  });

  startRunLevel();
  animationHandle = requestAnimationFrame(animate);
})();
