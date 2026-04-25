// marduk.js — The Oracle: a bearded elder head built from particle points
// and constellation web-lines. Adapted from the EVE particle-cloud technique.

import * as THREE from 'three';

// ─── POINT GENERATION ───

function sphere(count, cx, cy, cz, radius, bias, zone, exScale) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const surface = Math.random() < bias;
    const r = surface ? radius * (0.88 + Math.random() * 0.12) : radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const ex = (Math.random() - 0.5) * 2;
    const ey = (Math.random() - 0.5) * 2;
    const ez = (Math.random() - 0.5) * 2;
    const em = 1 / Math.sqrt(ex*ex + ey*ey + ez*ez + 0.001);
    pts.push({
      rx: cx + r * Math.sin(phi) * Math.cos(theta),
      ry: cy + r * Math.cos(phi),
      rz: cz + r * Math.sin(phi) * Math.sin(theta),
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex: ex * em * exScale, ey: ey * em * exScale, ez: ez * em * exScale,
      zone,
    });
  }
  return pts;
}

function ellipsoid(count, cx, cy, cz, rx, ry, rz, bias, zone, exScale) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const t     = Math.random() < bias ? (0.88 + Math.random() * 0.12) : Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const ex = (Math.random() - 0.5) * 2;
    const ey = (Math.random() - 0.5) * 2 * exScale;
    const ez = (Math.random() - 0.5) * 2;
    pts.push({
      rx: cx + rx * t * Math.sin(phi) * Math.cos(theta),
      ry: cy + ry * t * Math.cos(phi),
      rz: cz + rz * t * Math.sin(phi) * Math.sin(theta),
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex, ey, ez, zone,
    });
  }
  return pts;
}

function beardFlow(count, zone) {
  // Each zone defines: top & bottom Y, radius spread, z-lean
  const configs = {
    beard1: { yTop: -1.5, yBot: -2.1, rTop: 0.55, rBot: 0.80, zLean: 0.45, exY: 2.5 },
    beard2: { yTop: -2.1, yBot: -3.0, rTop: 0.80, rBot: 1.05, zLean: 0.20, exY: 3.0 },
    beard3: { yTop: -3.0, yBot: -4.0, rTop: 1.05, rBot: 0.90, zLean: 0.00, exY: 3.5 },
    beard4: { yTop: -4.0, yBot: -4.8, rTop: 0.90, rBot: 0.30, zLean: -0.15,exY: 4.0 },
  };
  const c = configs[zone];
  const pts = [];
  for (let i = 0; i < count; i++) {
    const t     = Math.pow(Math.random(), 0.65);
    const yCur  = c.yTop + (c.yBot - c.yTop) * t;
    const rCur  = c.rTop + (c.rBot - c.rTop) * t;
    const zCur  = c.zLean * (1 - t);
    const theta = Math.random() * Math.PI * 2;
    const rr    = rCur * (0.55 + Math.random() * 0.45);
    const ex = (Math.random() - 0.5) * 2;
    const ey = -Math.abs(Math.random()) * c.exY;
    const ez = (Math.random() - 0.5) * 1.5;
    pts.push({
      rx: rr * Math.cos(theta),
      ry: yCur + (Math.random() - 0.5) * 0.18,
      rz: zCur + rr * Math.sin(theta) * 0.45,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex, ey, ez, zone,
    });
  }
  return pts;
}

function makePointTex() {
  const sz = 64, c = document.createElement('canvas');
  c.width = c.height = sz;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(sz/2, sz/2, 0, sz/2, sz/2, sz/2);
  g.addColorStop(0.0,  'rgba(255,255,255,1)');
  g.addColorStop(0.3,  'rgba(255,255,255,0.8)');
  g.addColorStop(0.6,  'rgba(255,255,255,0.25)');
  g.addColorStop(1.0,  'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, sz, sz);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  return tex;
}

// ─── NEIGHBOUR COMPUTATION (same spatial-grid algorithm as EVE) ───

function computeNeighbors(pts, maxDist, k) {
  const N = pts.length;
  const cellSize = maxDist;
  const grid = new Map();
  const key = (cx, cy, cz) => `${cx},${cy},${cz}`;
  for (let i = 0; i < N; i++) {
    const cx = Math.floor(pts[i].rx / cellSize);
    const cy = Math.floor(pts[i].ry / cellSize);
    const cz = Math.floor(pts[i].rz / cellSize);
    const k_ = key(cx, cy, cz);
    if (!grid.has(k_)) grid.set(k_, []);
    grid.get(k_).push(i);
  }
  const pairs = [];
  const seen  = new Set();
  const maxSq = maxDist * maxDist;
  for (let i = 0; i < N; i++) {
    const x = pts[i].rx, y = pts[i].ry, z = pts[i].rz;
    const cx = Math.floor(x / cellSize);
    const cy = Math.floor(y / cellSize);
    const cz = Math.floor(z / cellSize);
    const dists = [];
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const cell = grid.get(key(cx+dx, cy+dy, cz+dz));
      if (!cell) continue;
      for (const j of cell) {
        if (j === i) continue;
        const ddx = pts[j].rx - x, ddy = pts[j].ry - y, ddz = pts[j].rz - z;
        const d2 = ddx*ddx + ddy*ddy + ddz*ddz;
        if (d2 < maxSq) dists.push({ j, d2 });
      }
    }
    dists.sort((a, b) => a.d2 - b.d2);
    const lim = Math.min(k, dists.length);
    for (let q = 0; q < lim; q++) {
      const j = dists[q].j;
      const a = Math.min(i, j), b = Math.max(i, j);
      const id = a * 100000 + b;
      if (!seen.has(id)) { seen.add(id); pairs.push(a, b); }
    }
  }
  return N < 65535 ? new Uint16Array(pairs) : new Uint32Array(pairs);
}

// ─── MAIN CLASS ───

export class MardukHead {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.pts      = [];
    this.positions = null;
    this.posAttr   = null;

    this.animName = 'idle';
    this.revealT  = 0; // 0→1 during reveal
    this.revealActive = false;

    // Head orientation targets
    this.yaw   = 0; this.tYaw   = 0;
    this.pitch = 0; this.tPitch = 0;

    // Color
    this.colBase   = new THREE.Color(0xd4882a);
    this.colTarget = new THREE.Color(0xd4882a);

    this._buildPoints();
    this._buildGeometry();
  }

  _buildPoints() {
    const P = this.pts;

    // SKULL
    P.push(...sphere(480, 0,    0,    0,    1.40, 0.68, 'skull',  1.5));
    P.push(...sphere( 70, 0,    0.55, 0.95, 0.65, 0.72, 'skull',  1.2));  // forehead
    P.push(...sphere( 55,-0.78,-0.20, 0.88, 0.52, 0.70, 'skull',  1.2));  // L cheek
    P.push(...sphere( 55, 0.78,-0.20, 0.88, 0.52, 0.70, 'skull',  1.2));  // R cheek
    P.push(...sphere( 38,-1.12, 0.05, 0.35, 0.40, 0.65, 'skull',  1.0));  // L temple
    P.push(...sphere( 38, 1.12, 0.05, 0.35, 0.40, 0.65, 'skull',  1.0));  // R temple

    // FEATURES
    P.push(...sphere( 38, 0,   -0.15, 1.38, 0.20, 0.72, 'skull',  0.8));  // nose
    P.push(...sphere( 30,-0.52, 0.28, 1.12, 0.28, 0.70, 'skull',  0.8));  // L brow
    P.push(...sphere( 30, 0.52, 0.28, 1.12, 0.28, 0.70, 'skull',  0.8));  // R brow

    // MUSTACHE
    P.push(...ellipsoid(55,-0.38,-0.32, 1.22, 0.68, 0.10, 0.28, 0.72, 'skull', 0.8));
    P.push(...ellipsoid(55, 0.38,-0.32, 1.22, 0.68, 0.10, 0.28, 0.72, 'skull', 0.8));

    // CHIN
    P.push(...sphere( 45, 0,   -1.38, 0.70, 0.30, 0.68, 'skull',  1.0));

    // BEARD (4 flowing zones, each larger exY for dramatic reveal)
    P.push(...beardFlow(180, 'beard1'));
    P.push(...beardFlow(220, 'beard2'));
    P.push(...beardFlow(260, 'beard3'));
    P.push(...beardFlow( 90, 'beard4'));

    this._N = this.pts.length;
  }

  _buildGeometry() {
    const N   = this._N;
    this.positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      this.positions[i*3]   = this.pts[i].rx;
      this.positions[i*3+1] = this.pts[i].ry;
      this.positions[i*3+2] = this.pts[i].rz;
    }

    const posAttr = new THREE.BufferAttribute(this.positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    this.posAttr = posAttr;

    // Points
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', posAttr);
    this.ptMat = new THREE.PointsMaterial({
      size: 0.08, sizeAttenuation: true, map: makePointTex(),
      alphaTest: 0.01, transparent: true, opacity: 0.92,
      depthWrite: false, blending: THREE.AdditiveBlending,
      color: 0xd4882a,
    });
    this.ptMesh = new THREE.Points(ptGeo, this.ptMat);
    this.group.add(this.ptMesh);

    // Lines
    const lineIdx = computeNeighbors(this.pts, 0.62, 4);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', posAttr);
    lineGeo.setIndex(new THREE.BufferAttribute(lineIdx, 1));
    this.lineMat = new THREE.LineBasicMaterial({
      color: 0xd4882a, transparent: true, opacity: 0.14,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    this.lineMesh = new THREE.LineSegments(lineGeo, this.lineMat);
    this.group.add(this.lineMesh);
  }

  setAnim(name) { this.animName = name; }

  triggerReveal() {
    this.revealT      = 0;
    this.revealActive = true;
  }

  setMouseTarget(nx, ny) {
    // nx, ny in [-1, 1]
    this.tYaw   = nx *  0.35;
    this.tPitch = ny * -0.18;
  }

  setColor(hex) {
    this.colTarget.setHex(hex);
  }

  update(t, dt) {
    // Lerp orientation
    this.yaw   += (this.tYaw   - this.yaw)   * Math.min(1, dt * 2.2);
    this.pitch += (this.tPitch - this.pitch) * Math.min(1, dt * 2.2);

    // Lerp color
    this.colBase.lerp(this.colTarget, Math.min(1, dt * 3));
    this.ptMat.color.copy(this.colBase);
    this.lineMat.color.copy(this.colBase);

    // Reveal animation progress
    if (this.revealActive) {
      this.revealT += dt / 1.6; // 1.6s total
      if (this.revealT >= 1) { this.revealT = 1; this.revealActive = false; }
    }
    const revealMag = this.revealActive
      ? Math.sin(this.revealT * Math.PI) * 3.5
      : 0;

    // Animation-driven orientation override
    let yawOvr = 0, pitchOvr = 0, beardSway = 0.04, noiseMag = 0.012;

    const a = this.animName;
    if (a === 'searching') {
      yawOvr    = Math.sin(t * 1.8) * 0.18;
      pitchOvr  = Math.sin(t * 2.3) * 0.12;
      beardSway = 0.12;
      noiseMag  = 0.045;
    } else if (a === 'revealing') {
      pitchOvr  = Math.sin(t * 0.9) * 0.22;
      beardSway = 0.08;
      noiseMag  = 0.025;
    } else if (a === 'dormant') {
      noiseMag  = 0.004;
      beardSway = 0.015;
    }

    const totalYaw   = this.yaw   + yawOvr;
    const totalPitch = this.pitch + pitchOvr;

    // Breathing
    const breathY  = Math.sin(t * 0.9) * 0.018;
    const breathS  = 1 + Math.sin(t * 0.9) * 0.008;

    const cosYaw = Math.cos(totalYaw), sinYaw = Math.sin(totalYaw);
    const cosPit = Math.cos(totalPitch), sinPit = Math.sin(totalPitch);

    const N = this._N;
    for (let i = 0; i < N; i++) {
      const p = this.pts[i];

      // Beard-specific sway on top of head rotation
      let beardOffX = 0, beardOffY = 0;
      if (p.zone !== 'skull') {
        const bIdx = parseInt(p.zone.slice(-1)); // 1..4
        const lag  = bIdx * 0.25;
        beardOffX  = Math.sin(t * 1.1 + lag + p.ph1) * beardSway * bIdx;
        beardOffY  = Math.sin(t * 0.7 + lag + p.ph2) * beardSway * 0.4 * bIdx;
      }

      // Rest position with noise
      const n1 = Math.sin(t * 1.5 + p.ph1);
      const n2 = Math.sin(t * 2.1 + p.ph2);
      let lx = p.rx + beardOffX + n1 * noiseMag;
      let ly = p.ry + beardOffY + n2 * noiseMag;
      let lz = p.rz + (n1+n2) * noiseMag * 0.5;

      // Reveal explosion
      if (revealMag > 0) {
        lx += p.ex * revealMag;
        ly += p.ey * revealMag;
        lz += p.ez * revealMag;
      }

      // Apply pitch (x-axis rotation)
      const py = ly * cosPit - lz * sinPit;
      const pz = ly * sinPit + lz * cosPit;
      // Apply yaw (y-axis rotation)
      const px = lx * cosYaw + pz * sinYaw;
      const pz2= -lx * sinYaw + pz * cosYaw;

      this.positions[i*3]   = px;
      this.positions[i*3+1] = (py + breathY) * breathS;
      this.positions[i*3+2] = pz2;
    }

    this.posAttr.needsUpdate = true;

    // Material dynamics
    const searching = a === 'searching';
    const revealing = a === 'revealing' || this.revealActive;
    this.ptMat.opacity  = revealing ? (0.88 + Math.sin(t * 8) * 0.08) : 0.90;
    this.lineMat.opacity = searching ? (0.18 + Math.abs(Math.sin(t * 4)) * 0.22)
                         : revealing ? (0.22 + Math.abs(Math.sin(t * 6)) * 0.18)
                         : 0.13;
    this.ptMat.size = 0.075 + (searching ? 0.02 : 0) + (revealing ? Math.sin(t*6)*0.015 : 0);
  }
}
