// marduk.js v1.2 — Aristotle bust geometry.
// Reference: Vienna Kunsthistorisches Museum / Ludovisi Aristotle type.
// Coordinate axes: +z = forward (face), +y = up, +x = viewer's right.
// Head height crown→chin ≈ 2.4u. Beard SHORT (philosopher style, ~0.9u below chin).
// All beard geometry is z-positive (front-facing only).

import * as THREE from 'three';

// ─── POINT GENERATORS ────────────────────────────────────────────────────────

// Surface-biased sphere, explosion direction radially outward from origin
function sphere(count, cx, cy, cz, r, surfBias, zone, exScale = 1.2) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const surface = Math.random() < surfBias;
    const rr = surface ? r * (0.86 + Math.random() * 0.14) : r * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const rx = cx + rr * Math.sin(phi) * Math.cos(theta);
    const ry = cy + rr * Math.cos(phi);
    const rz = cz + rr * Math.sin(phi) * Math.sin(theta);
    const em = 1 / (Math.sqrt(rx*rx + ry*ry + rz*rz) + 0.001);
    pts.push({ rx, ry, rz,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex: rx * em * exScale, ey: ry * em * exScale, ez: rz * em * exScale,
      zone });
  }
  return pts;
}

// Axis-aligned ellipsoid, surface-biased
function ellipsoid(count, cx, cy, cz, rx, ry, rz, surfBias, zone, exScale = 1.2) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const t     = Math.random() < surfBias ? (0.86 + Math.random() * 0.14) : Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const px = cx + rx * t * Math.sin(phi) * Math.cos(theta);
    const py = cy + ry * t * Math.cos(phi);
    const pz = cz + rz * t * Math.sin(phi) * Math.sin(theta);
    const em = 1 / (Math.sqrt(px*px + py*py + pz*pz) + 0.001);
    pts.push({ rx: px, ry: py, rz: pz,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex: px * em * exScale, ey: py * em * exScale, ez: pz * em * exScale,
      zone });
  }
  return pts;
}

// Curly beard — tight clusters (curls), front-facing only (z ≥ zMin).
// zone: 'beard1' upper jaw, 'beard2' chin, 'beard3' lower rounded bottom.
function beardZone(count, zone) {
  //              yTop   yBot  xSpan  zFront  zDepth  exY
  const C = {
    beard1: [ -0.82, -1.22, 0.72,   0.55,  0.40,  2.0 ],
    beard2: [ -1.22, -1.65, 0.55,   0.35,  0.50,  2.6 ],
    beard3: [ -1.65, -1.95, 0.32,   0.20,  0.44,  3.0 ],
  }[zone];
  if (!C) return [];
  const [yTop, yBot, xSpan, zFront, zDepth, exY] = C;

  const pts      = [];
  const clusters = Math.max(5, Math.floor(count / 7));
  const ppc      = Math.floor(count / clusters);
  const rem      = count - ppc * clusters;

  for (let c = 0; c < clusters; c++) {
    const t    = Math.pow(Math.random(), 0.55);
    const ySeed = yTop + (yBot - yTop) * t;
    // x: symmetric across face, concentrated in front
    const xSeed = (Math.random() * 2 - 1) * xSpan * (1 - t * 0.35);
    // z: always positive (forward), deeper toward mid beard
    const zSeed = zFront + Math.random() * zDepth;
    // curl cluster radius — smaller clusters = tighter curls
    const clR  = 0.06 + Math.random() * 0.14;
    const n    = ppc + (c < rem ? 1 : 0);

    for (let i = 0; i < n; i++) {
      const th2 = Math.random() * Math.PI * 2;
      const ph2 = Math.acos(2 * Math.random() - 1);
      const cr  = clR * (0.4 + Math.random() * 0.6);
      const rx  = xSeed + cr * Math.sin(ph2) * Math.cos(th2);
      const ry  = ySeed + cr * Math.cos(ph2);
      const rz  = Math.max(0.05, zSeed + cr * Math.sin(ph2) * Math.sin(th2) * 0.5);
      const em  = 1 / (Math.sqrt(rx*rx + ry*ry + rz*rz) + 0.001);
      pts.push({ rx, ry, rz,
        ph1: Math.random() * Math.PI * 2,
        ph2: Math.random() * Math.PI * 2,
        ex: rx * em * 1.3, ey: -Math.abs(Math.random()) * exY, ez: rz * em * 0.8,
        zone });
    }
  }
  return pts;
}

// ─── GLOW SPRITE TEXTURE ─────────────────────────────────────────────────────
function makePointTex() {
  const sz = 64, cv = document.createElement('canvas');
  cv.width = cv.height = sz;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(sz/2, sz/2, 0, sz/2, sz/2, sz/2);
  g.addColorStop(0.00, 'rgba(255,255,255,1.00)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.22)');
  g.addColorStop(1.00, 'rgba(255,255,255,0.00)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, sz, sz);
  const tex = new THREE.CanvasTexture(cv);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  return tex;
}

// ─── SPATIAL GRID NEIGHBOUR COMPUTATION ──────────────────────────────────────
function computeNeighbors(pts, maxDist, k) {
  const N = pts.length, cs = maxDist;
  const key = (a,b,c) => `${a},${b},${c}`;
  const grid = new Map();
  for (let i = 0; i < N; i++) {
    const k_ = key(Math.floor(pts[i].rx/cs), Math.floor(pts[i].ry/cs), Math.floor(pts[i].rz/cs));
    if (!grid.has(k_)) grid.set(k_, []);
    grid.get(k_).push(i);
  }
  const pairs = [], seen = new Set(), mxSq = maxDist * maxDist;
  for (let i = 0; i < N; i++) {
    const x=pts[i].rx, y=pts[i].ry, z=pts[i].rz;
    const cx=Math.floor(x/cs), cy=Math.floor(y/cs), cz=Math.floor(z/cs);
    const dists=[];
    for (let dx=-1;dx<=1;dx++) for (let dy=-1;dy<=1;dy++) for (let dz=-1;dz<=1;dz++) {
      const cell=grid.get(key(cx+dx,cy+dy,cz+dz));
      if (!cell) continue;
      for (const j of cell) {
        if (j===i) continue;
        const d2=(pts[j].rx-x)**2+(pts[j].ry-y)**2+(pts[j].rz-z)**2;
        if (d2<mxSq) dists.push({j,d2});
      }
    }
    dists.sort((a,b)=>a.d2-b.d2);
    for (let q=0;q<Math.min(k,dists.length);q++) {
      const j=dists[q].j,a=Math.min(i,j),b=Math.max(i,j),id=a*100000+b;
      if (!seen.has(id)){seen.add(id);pairs.push(a,b);}
    }
  }
  return N<65535 ? new Uint16Array(pairs) : new Uint32Array(pairs);
}

// ─── MARDUK HEAD CLASS ────────────────────────────────────────────────────────
export class MardukHead {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.pts = [];
    this.animName     = 'idle';
    this.revealT      = 0;
    this.revealActive = false;
    this._touchJolt   = 0;
    this.yaw   = 0; this.tYaw   = 0;
    this.pitch = 0; this.tPitch = 0;
    this.colBase   = new THREE.Color(0xc8780a);
    this.colTarget = new THREE.Color(0xc8780a);
    this._buildPoints();
    this._buildGeometry();
  }

  // ─── ARISTOTLE BUST GEOMETRY ───────────────────────────────────────────────
  // Based on the Ludovisi/Vienna type Aristotle busts.
  //
  // Key identifying features encoded here:
  //   • Tall egg-shaped cranium — high domed crown, wide at the sides
  //   • Very prominent, shelf-like brow ridge projecting significantly forward
  //   • Deep-set eyes beneath that ridge
  //   • Aquiline nose: strong straight bridge, slight projection at tip
  //   • Wide nostrils / nose base
  //   • Full, fleshy cheeks
  //   • Moderate chin (not jutting), slightly receding
  //   • Compact, tightly-curled philosopher's beard — chin length only
  //   • Beard is FRONT-FACING — does not wrap around sides or back
  //   • Thick, short neck
  //   • Wavy hair on cranium sides and top (implied by density)

  _buildPoints() {
    const P = this.pts;

    // ── CRANIUM ──────────────────────────────────────────────────────────────
    // Tall, slightly elongated top-to-back, wide at the sides.
    // Aristotle's is notably round and high — "egg on its long axis" vertical.
    P.push(...ellipsoid(560, 0.00,  0.18, -0.05, 1.14, 1.30, 1.08, 0.66, 'skull', 1.3));

    // Crown — slight forward slope (forehead tilts back at very top)
    P.push(...sphere   ( 70, 0.00,  1.22,  0.00, 0.38, 0.72, 'skull', 1.1));

    // ── FOREHEAD ─────────────────────────────────────────────────────────────
    // Broad, slightly sloping backward from brow to crown — NOT fully vertical.
    // The critical forward projection is at brow level, NOT at forehead top.
    P.push(...ellipsoid( 95, 0.00,  0.72,  0.75, 0.70, 0.34, 0.22, 0.74, 'skull', 1.0));

    // ── BROW RIDGE — the most defining feature ────────────────────────────────
    // Heavy, continuous horizontal shelf. Projects FORWARD more than downward.
    // In the Aristotle busts this is extremely prominent.
    P.push(...ellipsoid(110, 0.00,  0.32,  1.08, 0.88, 0.10, 0.18, 0.82, 'skull', 0.9));
    // Lateral brow thickening (joins superciliary arch to lateral margin)
    P.push(...sphere   ( 36,-0.72,  0.28,  0.92, 0.22, 0.76, 'skull', 0.9));
    P.push(...sphere   ( 36, 0.72,  0.28,  0.92, 0.22, 0.76, 'skull', 0.9));
    // Glabella — centre bridge of brow
    P.push(...sphere   ( 28, 0.00,  0.38,  1.12, 0.13, 0.78, 'skull', 0.9));

    // ── TEMPLES ──────────────────────────────────────────────────────────────
    // Aristotle's head is notably wide at the temples — gives the broad look.
    P.push(...sphere   ( 60,-1.08,  0.14,  0.20, 0.28, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 60, 1.08,  0.14,  0.20, 0.28, 0.68, 'skull', 1.0));

    // ── HAIR (sides and back implied by slight density concentration) ─────────
    P.push(...ellipsoid( 55, 0.00,  0.80, -0.45, 0.95, 0.40, 0.55, 0.64, 'skull', 1.2));

    // ── ORBITAL AREA — eyes recessed BELOW brow ridge ─────────────────────────
    // Less density here → implied hollow under the heavy brow
    P.push(...sphere   ( 22,-0.42,  0.10,  1.04, 0.15, 0.68, 'skull', 0.8));
    P.push(...sphere   ( 22, 0.42,  0.10,  1.04, 0.15, 0.68, 'skull', 0.8));

    // ── NOSE — aquiline, straight, prominent ──────────────────────────────────
    // Strong straight bridge (high z along the nasal dorsum)
    P.push(...ellipsoid( 50, 0.00,  0.04,  1.32, 0.08, 0.35, 0.06, 0.80, 'skull', 0.8));  // bridge
    // Wide base / alar wings — broader than average
    P.push(...sphere   ( 28, 0.00, -0.32,  1.38, 0.12, 0.74, 'skull', 0.7));  // tip (slightly bulbous)
    P.push(...sphere   ( 20,-0.20, -0.40,  1.28, 0.10, 0.72, 'skull', 0.7));  // L ala
    P.push(...sphere   ( 20, 0.20, -0.40,  1.28, 0.10, 0.72, 'skull', 0.7));  // R ala
    P.push(...ellipsoid( 30, 0.00, -0.44,  1.18, 0.30, 0.06, 0.08, 0.76, 'skull', 0.8));  // columella/base

    // ── CHEEKS — full and rounded, characteristic of the bust ─────────────────
    P.push(...sphere   ( 80,-0.85, -0.10,  0.80, 0.32, 0.70, 'skull', 1.0));
    P.push(...sphere   ( 80, 0.85, -0.10,  0.80, 0.32, 0.70, 'skull', 1.0));

    // ── NASOLABIAL AREA / UPPER LIP ───────────────────────────────────────────
    P.push(...ellipsoid( 42, 0.00, -0.58,  1.18, 0.34, 0.10, 0.10, 0.76, 'skull', 0.8));

    // ── JAW — relatively strong, squarish ─────────────────────────────────────
    P.push(...sphere   ( 58,-0.68, -0.82,  0.62, 0.28, 0.70, 'skull', 1.0));
    P.push(...sphere   ( 58, 0.68, -0.82,  0.62, 0.28, 0.70, 'skull', 1.0));

    // ── CHIN — moderate, slightly receding ────────────────────────────────────
    P.push(...sphere   ( 52, 0.00, -1.10,  0.52, 0.24, 0.72, 'skull', 1.0));

    // ── EARS ─────────────────────────────────────────────────────────────────
    P.push(...sphere   ( 35,-1.26,  0.02, -0.05, 0.20, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 35, 1.26,  0.02, -0.05, 0.20, 0.68, 'skull', 1.0));

    // ── NECK — thick and relatively short ────────────────────────────────────
    P.push(...ellipsoid(110, 0.00, -1.58,  0.00, 0.48, 0.44, 0.44, 0.62, 'skull', 1.0));

    // ── MUSTACHE — dense, connecting to beard ─────────────────────────────────
    P.push(...ellipsoid( 52,-0.24, -0.66,  1.12, 0.34, 0.08, 0.10, 0.74, 'skull', 0.8));
    P.push(...ellipsoid( 52, 0.24, -0.66,  1.12, 0.34, 0.08, 0.10, 0.74, 'skull', 0.8));

    // ── BEARD — short philosopher style, curled, front-facing only ────────────
    // Three tight zones from upper jaw to just below chin.
    // Total beard depth: about 0.85u — compact, not a wizard beard.
    P.push(...beardZone(200, 'beard1'));   // cheek/jaw level
    P.push(...beardZone(220, 'beard2'));   // chin level
    P.push(...beardZone(140, 'beard3'));   // lower rounded bottom

    this._N = this.pts.length;
  }

  // ─── THREE.JS BUFFERS ────────────────────────────────────────────────────────
  _buildGeometry() {
    const N = this._N;
    this.positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      this.positions[i*3]   = this.pts[i].rx;
      this.positions[i*3+1] = this.pts[i].ry;
      this.positions[i*3+2] = this.pts[i].rz;
    }
    const posAttr = new THREE.BufferAttribute(this.positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    this.posAttr = posAttr;

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', posAttr);
    this.ptMat = new THREE.PointsMaterial({
      size: 0.078, sizeAttenuation: true,
      map: makePointTex(), alphaTest: 0.008,
      transparent: true, opacity: 0.92,
      depthWrite: false, blending: THREE.AdditiveBlending,
      color: 0xc8780a,
    });
    this.ptMesh = new THREE.Points(ptGeo, this.ptMat);
    this.group.add(this.ptMesh);

    // Neighbour distance 0.60 — tuned for head scale (~2.4u)
    const lineIdx = computeNeighbors(this.pts, 0.60, 4);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', posAttr);
    lineGeo.setIndex(new THREE.BufferAttribute(lineIdx, 1));
    this.lineMat = new THREE.LineBasicMaterial({
      color: 0xc8780a, transparent: true, opacity: 0.14,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    this.lineMesh = new THREE.LineSegments(lineGeo, this.lineMat);
    this.group.add(this.lineMesh);
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────
  setAnim(name)          { this.animName = name; }
  setColor(hex)          { this.colTarget.setHex(hex); }
  setMouseTarget(nx, ny) { this.tYaw = nx * 0.42; this.tPitch = ny * -0.22; }
  triggerReveal()        { this.revealT = 0; this.revealActive = true; }

  reactToTouch(wp) {
    this.tYaw   = Math.atan2(wp.x, Math.max(0.5, Math.abs(wp.z))) * 0.50;
    this.tPitch = Math.atan2(wp.y, Math.max(0.5, Math.abs(wp.z))) * 0.30;
    this._touchJolt = 1.0;
  }

  // ─── UPDATE ──────────────────────────────────────────────────────────────
  update(t, dt) {
    // Orientation lerp
    this.yaw   += (this.tYaw   - this.yaw)   * Math.min(1, dt * 2.6);
    this.pitch += (this.tPitch - this.pitch) * Math.min(1, dt * 2.6);

    // Colour lerp
    this.colBase.lerp(this.colTarget, Math.min(1, dt * 3.5));
    this.ptMat.color.copy(this.colBase);
    this.lineMat.color.copy(this.colBase);

    // Touch jolt decay
    if (this._touchJolt > 0) { this._touchJolt = Math.max(0, this._touchJolt - dt * 2.8); }

    // Reveal
    if (this.revealActive) {
      this.revealT += dt / 1.5;
      if (this.revealT >= 1) { this.revealT = 1; this.revealActive = false; }
    }
    const revealMag = this.revealActive ? Math.sin(this.revealT * Math.PI) * 3.0 : 0;

    // Animation state → noise parameters
    let yawOvr=0, pitchOvr=0, beardSway=0.032, noiseMag=0.009;
    const a = this.animName;
    if (a==='searching') { yawOvr=Math.sin(t*1.7)*0.22; pitchOvr=Math.sin(t*2.5)*0.14; beardSway=0.09; noiseMag=0.038; }
    else if (a==='revealing') { pitchOvr=Math.sin(t*0.95)*0.18; beardSway=0.06; noiseMag=0.020; }
    noiseMag  += this._touchJolt * 0.085;
    beardSway += this._touchJolt * 0.055;

    const totalYaw   = this.yaw + yawOvr;
    const totalPitch = this.pitch + pitchOvr;
    const breathY = Math.sin(t * 0.82) * 0.015;
    const breathS = 1 + Math.sin(t * 0.82) * 0.006;
    const cosYaw  = Math.cos(totalYaw),  sinYaw  = Math.sin(totalYaw);
    const cosPit  = Math.cos(totalPitch),sinPit  = Math.sin(totalPitch);

    const N = this._N;
    for (let i = 0; i < N; i++) {
      const p = this.pts[i];

      // Beard sway — lower zones lag more
      let bx=0, by=0;
      if (p.zone !== 'skull') {
        const z   = parseInt(p.zone.slice(-1)); // 1,2,3
        const lag = z * 0.30;
        bx = Math.sin(t*1.10 + lag + p.ph1) * beardSway * z;
        by = Math.sin(t*0.68 + lag + p.ph2) * beardSway * 0.30 * z;
      }

      const n1 = Math.sin(t*1.45 + p.ph1);
      const n2 = Math.sin(t*2.20 + p.ph2);
      let lx = p.rx + bx + n1 * noiseMag;
      let ly = p.ry + by + n2 * noiseMag;
      let lz = p.rz + (n1+n2) * noiseMag * 0.45;

      if (revealMag > 0) { lx += p.ex*revealMag; ly += p.ey*revealMag; lz += p.ez*revealMag; }

      // Pitch rotation (around X)
      const py_  = ly*cosPit - lz*sinPit;
      const pz_  = ly*sinPit + lz*cosPit;
      // Yaw rotation (around Y)
      const px   = lx*cosYaw + pz_*sinYaw;
      const pz   = -lx*sinYaw + pz_*cosYaw;

      this.positions[i*3]   = px;
      this.positions[i*3+1] = (py_ + breathY) * breathS;
      this.positions[i*3+2] = pz;
    }
    this.posAttr.needsUpdate = true;

    // Material dynamics
    const revealing = a==='revealing' || this.revealActive;
    const jolt = this._touchJolt;
    this.ptMat.opacity   = revealing ? (0.88 + Math.sin(t*8)*0.09) : (0.90 + jolt*0.06);
    this.lineMat.opacity = a==='searching' ? (0.15 + Math.abs(Math.sin(t*4))*0.25)
                         : revealing       ? (0.20 + Math.abs(Math.sin(t*6))*0.18)
                         :                   (0.12 + jolt*0.20);
    this.ptMat.size = 0.078
      + (a==='searching'    ? 0.016 : 0)
      + (revealing ? Math.abs(Math.sin(t*6))*0.013 : 0)
      + jolt * 0.013;
  }
}
