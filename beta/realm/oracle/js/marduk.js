// marduk.js — The Oracle: Aristotle-proportioned elder head.
// Particle cloud + constellation web-lines, EVE-engine technique.
// Geometry models the Vatican/Vienna Aristotle bust type:
//   broad cranium, high forehead, heavy brow ridge, wide nose,
//   full curly beard (medium length), thick neck.

import * as THREE from 'three';

// ─── GEOMETRY HELPERS ───

function sphere(count, cx, cy, cz, radius, bias, zone, exScale = 1.2) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const surface = Math.random() < bias;
    const r = surface
      ? radius * (0.88 + Math.random() * 0.12)
      : radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const rx = cx + r * Math.sin(phi) * Math.cos(theta);
    const ry = cy + r * Math.cos(phi);
    const rz = cz + r * Math.sin(phi) * Math.sin(theta);
    const em = 1 / (Math.sqrt(rx*rx + ry*ry + rz*rz) + 0.001);
    pts.push({ rx, ry, rz,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex: rx * em * exScale,
      ey: ry * em * exScale,
      ez: rz * em * exScale,
      zone });
  }
  return pts;
}

function ellipsoid(count, cx, cy, cz, srx, sry, srz, bias, zone, exScale = 1.2) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const t     = Math.random() < bias ? (0.88 + Math.random() * 0.12) : Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const rx = cx + srx * t * Math.sin(phi) * Math.cos(theta);
    const ry = cy + sry * t * Math.cos(phi);
    const rz = cz + srz * t * Math.sin(phi) * Math.sin(theta);
    const em = 1 / (Math.sqrt(rx*rx + ry*ry + rz*rz) + 0.001);
    pts.push({ rx, ry, rz,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
      ex: rx * em * exScale,
      ey: ry * em * exScale,
      ez: rz * em * exScale,
      zone });
  }
  return pts;
}

// Curly beard zone — points cluster in small spherical bunches for curl texture.
function beardZone(count, zone) {
  const C = {
    beard1: [ -1.05, -1.72, 0.42, 0.68, 0.55, 2.2 ],
    beard2: [ -1.72, -2.42, 0.68, 0.88, 0.25, 2.8 ],
    beard3: [ -2.42, -3.10, 0.88, 0.58, 0.00, 3.4 ],
  }[zone];
  if (!C) return [];
  const [ yTop, yBot, rTop, rBot, zFwd, exY ] = C;
  const pts = [];
  const clusters = Math.max(6, Math.floor(count / 8));
  const ptsPerC  = Math.floor(count / clusters);
  const rem      = count - ptsPerC * clusters;

  for (let c = 0; c < clusters; c++) {
    const t     = Math.pow(Math.random(), 0.6);
    const ySeed = yTop + (yBot - yTop) * t;
    const rSeed = rTop + (rBot - rTop) * t;
    const aSeed = Math.random() * Math.PI * 2;
    const xSeed = rSeed * (0.4 + Math.random() * 0.6) * Math.cos(aSeed);
    const zSeed = zFwd * (1 - t) + rSeed * (0.25 + Math.random() * 0.35) * Math.sin(aSeed);
    const clR   = 0.08 + Math.random() * 0.18;
    const n     = ptsPerC + (c < rem ? 1 : 0);
    for (let i = 0; i < n; i++) {
      const th2 = Math.random() * Math.PI * 2;
      const ph2 = Math.acos(2 * Math.random() - 1);
      const cr  = clR * (0.5 + Math.random() * 0.5);
      const rx  = xSeed + cr * Math.sin(ph2) * Math.cos(th2);
      const ry  = ySeed + cr * Math.cos(ph2) + (Math.random() - 0.5) * 0.10;
      const rz  = zSeed + cr * Math.sin(ph2) * Math.sin(th2) * 0.5;
      const em  = 1 / (Math.sqrt(rx*rx + ry*ry + rz*rz) + 0.001);
      pts.push({ rx, ry, rz,
        ph1: Math.random() * Math.PI * 2,
        ph2: Math.random() * Math.PI * 2,
        ex: rx * em * 1.4,
        ey: -Math.abs(Math.random()) * exY,
        ez: rz * em * 1.0,
        zone });
    }
  }
  return pts;
}

function makePointTex() {
  const sz = 64, c = document.createElement('canvas');
  c.width = c.height = sz;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(sz/2, sz/2, 0, sz/2, sz/2, sz/2);
  g.addColorStop(0.00, 'rgba(255,255,255,1.00)');
  g.addColorStop(0.28, 'rgba(255,255,255,0.82)');
  g.addColorStop(0.58, 'rgba(255,255,255,0.22)');
  g.addColorStop(1.00, 'rgba(255,255,255,0.00)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, sz, sz);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  return tex;
}

function computeNeighbors(pts, maxDist, k) {
  const N = pts.length, cs = maxDist;
  const key = (a,b,c) => a+','+b+','+c;
  const grid = new Map();
  for (let i = 0; i < N; i++) {
    const k_ = key(Math.floor(pts[i].rx/cs), Math.floor(pts[i].ry/cs), Math.floor(pts[i].rz/cs));
    if (!grid.has(k_)) grid.set(k_, []);
    grid.get(k_).push(i);
  }
  const pairs = [], seen = new Set(), maxSq = maxDist * maxDist;
  for (let i = 0; i < N; i++) {
    const x = pts[i].rx, y = pts[i].ry, z = pts[i].rz;
    const cx = Math.floor(x/cs), cy = Math.floor(y/cs), cz = Math.floor(z/cs);
    const dists = [];
    for (let dx=-1;dx<=1;dx++) for (let dy=-1;dy<=1;dy++) for (let dz=-1;dz<=1;dz++) {
      const cell = grid.get(key(cx+dx,cy+dy,cz+dz));
      if (!cell) continue;
      for (const j of cell) {
        if (j===i) continue;
        const d2 = (pts[j].rx-x)**2 + (pts[j].ry-y)**2 + (pts[j].rz-z)**2;
        if (d2 < maxSq) dists.push({j,d2});
      }
    }
    dists.sort((a,b)=>a.d2-b.d2);
    for (let q=0;q<Math.min(k,dists.length);q++) {
      const j=dists[q].j, a=Math.min(i,j), b=Math.max(i,j), id=a*100000+b;
      if (!seen.has(id)) { seen.add(id); pairs.push(a,b); }
    }
  }
  return N < 65535 ? new Uint16Array(pairs) : new Uint32Array(pairs);
}

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

  _buildPoints() {
    const P = this.pts;

    // CRANIUM — broad oblate spheroid
    P.push(...ellipsoid(520,  0.00,  0.10,  0.00,  1.15, 1.22, 1.05, 0.65, 'skull', 1.3));
    // FOREHEAD — high, forward-projecting
    P.push(...sphere   ( 90,  0.00,  0.82,  0.60,  0.52, 0.72, 'skull', 1.1));
    // TEMPLES
    P.push(...sphere   ( 55, -1.00,  0.18,  0.28,  0.32, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 55,  1.00,  0.18,  0.28,  0.32, 0.68, 'skull', 1.0));
    // BROW RIDGE — heavy horizontal shelf
    P.push(...ellipsoid( 72, -0.44,  0.22,  1.08,  0.40, 0.09, 0.13, 0.78, 'skull', 0.9));
    P.push(...ellipsoid( 72,  0.44,  0.22,  1.08,  0.40, 0.09, 0.13, 0.78, 'skull', 0.9));
    P.push(...sphere   ( 28,  0.00,  0.28,  1.12,  0.14, 0.75, 'skull', 0.9)); // glabella
    // EYES — implied hollows
    P.push(...sphere   ( 28, -0.43,  0.06,  1.06,  0.14, 0.70, 'skull', 0.8));
    P.push(...sphere   ( 28,  0.43,  0.06,  1.06,  0.14, 0.70, 'skull', 0.8));
    // NOSE — wide bridge and base
    P.push(...ellipsoid( 44,  0.00,  0.02,  1.30,  0.09, 0.30, 0.07, 0.78, 'skull', 0.8)); // bridge
    P.push(...sphere   ( 30,  0.00, -0.30,  1.32,  0.11, 0.72, 'skull', 0.7)); // tip
    P.push(...sphere   ( 22, -0.17, -0.36,  1.24,  0.10, 0.70, 'skull', 0.7)); // L wing
    P.push(...sphere   ( 22,  0.17, -0.36,  1.24,  0.10, 0.70, 'skull', 0.7)); // R wing
    // CHEEKBONES — wide and strong
    P.push(...sphere   ( 65, -0.88, -0.08,  0.84,  0.28, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 65,  0.88, -0.08,  0.84,  0.28, 0.68, 'skull', 1.0));
    // PHILTRUM / UPPER LIP
    P.push(...ellipsoid( 38,  0.00, -0.55,  1.20,  0.30, 0.09, 0.09, 0.75, 'skull', 0.8));
    // JAW
    P.push(...sphere   ( 55, -0.62, -0.80,  0.68,  0.25, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 55,  0.62, -0.80,  0.68,  0.25, 0.68, 'skull', 1.0));
    // CHIN — rounded, slightly receding
    P.push(...sphere   ( 52,  0.00, -1.15,  0.54,  0.24, 0.70, 'skull', 1.0));
    // EARS
    P.push(...sphere   ( 38, -1.22,  0.05,  0.00,  0.20, 0.68, 'skull', 1.0));
    P.push(...sphere   ( 38,  1.22,  0.05,  0.00,  0.20, 0.68, 'skull', 1.0));
    // NECK — broad
    P.push(...ellipsoid(100,  0.00, -1.55,  0.00,  0.42, 0.38, 0.40, 0.60, 'skull', 1.0));
    // MUSTACHE
    P.push(...ellipsoid( 55, -0.22, -0.60,  1.14,  0.32, 0.07, 0.09, 0.72, 'skull', 0.8));
    P.push(...ellipsoid( 55,  0.22, -0.60,  1.14,  0.32, 0.07, 0.09, 0.72, 'skull', 0.8));
    // BEARD — three curly zones
    P.push(...beardZone(200, 'beard1'));
    P.push(...beardZone(240, 'beard2'));
    P.push(...beardZone(160, 'beard3'));

    this._N = this.pts.length;
  }

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
      size: 0.076, sizeAttenuation: true,
      map: makePointTex(), alphaTest: 0.008,
      transparent: true, opacity: 0.92,
      depthWrite: false, blending: THREE.AdditiveBlending,
      color: 0xc8780a,
    });
    this.ptMesh = new THREE.Points(ptGeo, this.ptMat);
    this.group.add(this.ptMesh);

    const lineIdx = computeNeighbors(this.pts, 0.65, 4);
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

  setAnim(name)        { this.animName = name; }
  setColor(hex)        { this.colTarget.setHex(hex); }
  setMouseTarget(nx, ny) { this.tYaw = nx * 0.40; this.tPitch = ny * -0.22; }

  triggerReveal() { this.revealT = 0; this.revealActive = true; }

  reactToTouch(worldPos) {
    this.tYaw   = Math.atan2(worldPos.x, Math.max(1, Math.abs(worldPos.z))) * 0.55;
    this.tPitch = Math.atan2(worldPos.y, Math.max(1, Math.abs(worldPos.z))) * 0.35;
    this._touchJolt = 1.0;
  }

  update(t, dt) {
    this.yaw   += (this.tYaw   - this.yaw)   * Math.min(1, dt * 2.5);
    this.pitch += (this.tPitch - this.pitch) * Math.min(1, dt * 2.5);
    this.colBase.lerp(this.colTarget, Math.min(1, dt * 3.5));
    this.ptMat.color.copy(this.colBase);
    this.lineMat.color.copy(this.colBase);

    if (this._touchJolt > 0) { this._touchJolt -= dt * 2.8; if (this._touchJolt < 0) this._touchJolt = 0; }

    if (this.revealActive) {
      this.revealT += dt / 1.5;
      if (this.revealT >= 1) { this.revealT = 1; this.revealActive = false; }
    }
    const revealMag = this.revealActive ? Math.sin(this.revealT * Math.PI) * 3.2 : 0;

    let yawOvr = 0, pitchOvr = 0, beardSway = 0.035, noiseMag = 0.010;
    const a = this.animName;
    if (a === 'searching') { yawOvr = Math.sin(t*1.7)*0.22; pitchOvr = Math.sin(t*2.4)*0.14; beardSway=0.10; noiseMag=0.040; }
    else if (a === 'revealing') { pitchOvr = Math.sin(t*1.0)*0.20; beardSway=0.07; noiseMag=0.022; }
    noiseMag  += this._touchJolt * 0.09;
    beardSway += this._touchJolt * 0.06;

    const totalYaw = this.yaw + yawOvr, totalPitch = this.pitch + pitchOvr;
    const breathY  = Math.sin(t * 0.85) * 0.016;
    const breathS  = 1 + Math.sin(t * 0.85) * 0.007;
    const cosYaw = Math.cos(totalYaw), sinYaw = Math.sin(totalYaw);
    const cosPit = Math.cos(totalPitch), sinPit = Math.sin(totalPitch);

    const N = this._N;
    for (let i = 0; i < N; i++) {
      const p = this.pts[i];
      let bx = 0, by = 0;
      if (p.zone !== 'skull') {
        const z = parseInt(p.zone.slice(-1));
        const lag = z * 0.28;
        bx = Math.sin(t*1.05 + lag + p.ph1) * beardSway * z;
        by = Math.sin(t*0.65 + lag + p.ph2) * beardSway * 0.35 * z;
      }
      const n1 = Math.sin(t*1.4 + p.ph1), n2 = Math.sin(t*2.2 + p.ph2);
      let lx = p.rx + bx + n1 * noiseMag;
      let ly = p.ry + by + n2 * noiseMag;
      let lz = p.rz + (n1+n2) * noiseMag * 0.5;
      if (revealMag > 0) { lx += p.ex*revealMag; ly += p.ey*revealMag; lz += p.ez*revealMag; }
      const py  = ly*cosPit - lz*sinPit;
      const pz_ = ly*sinPit + lz*cosPit;
      const px  = lx*cosYaw + pz_*sinYaw;
      const pz  = -lx*sinYaw + pz_*cosYaw;
      this.positions[i*3]   = px;
      this.positions[i*3+1] = (py + breathY) * breathS;
      this.positions[i*3+2] = pz;
    }
    this.posAttr.needsUpdate = true;

    const revealing = a === 'revealing' || this.revealActive;
    const jolt = this._touchJolt;
    this.ptMat.opacity   = revealing ? (0.88 + Math.sin(t*8)*0.09) : (0.90 + jolt*0.06);
    this.lineMat.opacity = a==='searching' ? (0.16 + Math.abs(Math.sin(t*4))*0.24)
                         : revealing       ? (0.20 + Math.abs(Math.sin(t*6))*0.18)
                         : (0.12 + jolt*0.18);
    this.ptMat.size = 0.076 + (a==='searching'?0.018:0) + (revealing?Math.abs(Math.sin(t*6))*0.014:0) + jolt*0.014;
  }
}
