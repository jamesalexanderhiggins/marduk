// eve.js — Eve as a particle cloud humanoid (inspired by the GIF reference).
// Bone hierarchy with rest-pose skinning. Each point belongs to one bone and
// is stored in that bone's local frame. Lines connect nearby points (computed
// once at rest, indices stay constant) for the constellation/lattice look.

import * as THREE from 'three';

// ─── BONE DEFINITIONS ───
const BONE_SPECS = [
  { name: 'hips',      parent: null,        pos: [0, 0.92, 0] },
  { name: 'chest',     parent: 'hips',      pos: [0, 0.40, 0] },
  { name: 'neck',      parent: 'chest',     pos: [0, 0.24, 0] },
  { name: 'head',      parent: 'neck',      pos: [0, 0.08, 0] },
  { name: 'lShoulder', parent: 'chest',     pos: [-0.18, 0.18, 0] },
  { name: 'lElbow',    parent: 'lShoulder', pos: [0, -0.27, 0] },
  { name: 'lHand',     parent: 'lElbow',    pos: [0, -0.25, 0] },
  { name: 'rShoulder', parent: 'chest',     pos: [0.18, 0.18, 0] },
  { name: 'rElbow',    parent: 'rShoulder', pos: [0, -0.27, 0] },
  { name: 'rHand',     parent: 'rElbow',    pos: [0, -0.25, 0] },
  { name: 'lHip',      parent: 'hips',      pos: [-0.11, -0.05, 0] },
  { name: 'lKnee',     parent: 'lHip',      pos: [0, -0.40, 0] },
  { name: 'lFoot',     parent: 'lKnee',     pos: [0, -0.40, 0] },
  { name: 'rHip',      parent: 'hips',      pos: [0.11, -0.05, 0] },
  { name: 'rKnee',     parent: 'rHip',      pos: [0, -0.40, 0] },
  { name: 'rFoot',     parent: 'rKnee',     pos: [0, -0.40, 0] },
  { name: 'lPigtail',  parent: 'head',      pos: [-0.13, 0.06, -0.04] },
  { name: 'rPigtail',  parent: 'head',      pos: [0.13, 0.06, -0.04] },
];

class Bone {
  constructor(spec, parent) {
    this.name = spec.name;
    this.parent = parent;
    this.localPos = new THREE.Vector3().fromArray(spec.pos);
    this.restPos = this.localPos.clone();
    this.localRot = new THREE.Euler();
    this.localScale = new THREE.Vector3(1, 1, 1);
    this.localMatrix = new THREE.Matrix4();
    this.worldMatrix = new THREE.Matrix4();
    this.restWorldMatrix = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
  }
  updateLocal() {
    this._q.setFromEuler(this.localRot);
    this.localMatrix.compose(this.localPos, this._q, this.localScale);
  }
  updateWorld() {
    if (this.parent) this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.localMatrix);
    else this.worldMatrix.copy(this.localMatrix);
  }
  resetForFrame() {
    this.localRot.set(0, 0, 0);
    this.localPos.copy(this.restPos);
    this.localScale.set(1, 1, 1);
  }
}

// ─── POINT GENERATION HELPERS ───

function genCapsulePoints(count, length, rTop, rBottom, boneName, surfaceBias = 0.5) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random();
    const y = -t * length;
    const r = (rTop * (1 - t) + rBottom * t);
    const rr = r * (surfaceBias * (0.85 + Math.random() * 0.15) + (1 - surfaceBias) * Math.sqrt(Math.random()));
    const theta = Math.random() * Math.PI * 2;
    out.push({
      bone: boneName,
      lx: rr * Math.cos(theta),
      ly: y,
      lz: rr * Math.sin(theta),
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

function genSpherePoints(count, radius, boneName, center = [0, 0, 0], surfaceBias = 0.6) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const surface = Math.random() < surfaceBias;
    const r = surface ? radius * (0.85 + Math.random() * 0.15) : radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    out.push({
      bone: boneName,
      lx: center[0] + r * Math.sin(phi) * Math.cos(theta),
      ly: center[1] + r * Math.cos(phi),
      lz: center[2] + r * Math.sin(phi) * Math.sin(theta),
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

function genDressPoints(count, boneName) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const t = Math.pow(Math.random(), 0.7);
    const y = -t * 0.46;
    const baseR = 0.13 + t * 0.32;
    const rr = baseR * (0.92 + Math.random() * 0.10);
    const theta = Math.random() * Math.PI * 2;
    out.push({
      bone: boneName,
      lx: rr * Math.cos(theta),
      ly: y,
      lz: rr * Math.sin(theta),
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

function genFootPoints(count, boneName) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random();
    const z = t * 0.16;
    const y = -0.02 - Math.random() * 0.04;
    const x = (Math.random() - 0.5) * 0.07;
    out.push({
      bone: boneName,
      lx: x, ly: y, lz: z,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

function genPigtailPoints(count, boneName) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random();
    const y = -t * 0.30;
    const r = 0.045 * (1 - t * 0.4) * (0.85 + Math.random() * 0.15);
    const theta = Math.random() * Math.PI * 2;
    out.push({
      bone: boneName,
      lx: r * Math.cos(theta),
      ly: y,
      lz: r * Math.sin(theta) - t * 0.05,
      ph1: Math.random() * Math.PI * 2,
      ph2: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

function makePointTexture() {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  g.addColorStop(0.0,  'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.55, 'rgba(255,255,255,0.30)');
  g.addColorStop(1.0,  'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

export class EveCloud {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);

    this.bones = {};
    this.boneList = [];
    this.points = [];
    this.positions = null;
    this.posAttr = null;
    this.lineIndices = null;

    this.animName = 'idle';
    this.animLockUntil = 0;
    this.colorBase = new THREE.Color(0xffffff);
    this.colorTarget = new THREE.Color(0xffffff);

    this.buildSkeleton();
    this.generatePoints();
    this.computeRestPositions();
    this.computeNeighbors();
    this.buildGeometry();
  }

  buildSkeleton() {
    for (const spec of BONE_SPECS) {
      const parent = spec.parent ? this.bones[spec.parent] : null;
      const b = new Bone(spec, parent);
      this.bones[spec.name] = b;
      this.boneList.push(b);
    }
    for (const b of this.boneList) {
      b.updateLocal();
      b.updateWorld();
      b.restWorldMatrix.copy(b.worldMatrix);
    }
  }

  generatePoints() {
    const P = this.points;
    P.push(...genSpherePoints(420, 0.16, 'head', [0, 0.08, 0], 0.55));
    P.push(...genSpherePoints(160, 0.17, 'head', [0, 0.10, -0.01], 0.92));
    P.push(...genCapsulePoints(80, 0.10, 0.06, 0.05, 'neck', 0.55));
    P.push(...genCapsulePoints(620, 0.40, 0.16, 0.13, 'chest', 0.55));
    P.push(...genSpherePoints(170, 0.13, 'hips', [0, 0, 0], 0.55));
    P.push(...genDressPoints(780, 'hips'));
    P.push(...genCapsulePoints(190, 0.27, 0.055, 0.045, 'lShoulder', 0.55));
    P.push(...genCapsulePoints(170, 0.25, 0.045, 0.040, 'lElbow', 0.55));
    P.push(...genSpherePoints(80, 0.055, 'lHand', [0, -0.04, 0], 0.6));
    P.push(...genCapsulePoints(190, 0.27, 0.055, 0.045, 'rShoulder', 0.55));
    P.push(...genCapsulePoints(170, 0.25, 0.045, 0.040, 'rElbow', 0.55));
    P.push(...genSpherePoints(80, 0.055, 'rHand', [0, -0.04, 0], 0.6));
    P.push(...genCapsulePoints(280, 0.40, 0.075, 0.055, 'lHip', 0.55));
    P.push(...genCapsulePoints(260, 0.40, 0.055, 0.045, 'lKnee', 0.55));
    P.push(...genFootPoints(110, 'lFoot'));
    P.push(...genCapsulePoints(280, 0.40, 0.075, 0.055, 'rHip', 0.55));
    P.push(...genCapsulePoints(260, 0.40, 0.055, 0.045, 'rKnee', 0.55));
    P.push(...genFootPoints(110, 'rFoot'));
    P.push(...genPigtailPoints(140, 'lPigtail'));
    P.push(...genPigtailPoints(140, 'rPigtail'));
  }

  computeRestPositions() {
    const N = this.points.length;
    this.restPositions = new Float32Array(N * 3);
    const tmp = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      const p = this.points[i];
      const bone = this.bones[p.bone];
      tmp.set(p.lx, p.ly, p.lz).applyMatrix4(bone.restWorldMatrix);
      this.restPositions[i*3]   = tmp.x;
      this.restPositions[i*3+1] = tmp.y;
      this.restPositions[i*3+2] = tmp.z;
    }
  }

  computeNeighbors(k = 5, maxDist = 0.16) {
    const N = this.points.length;
    const cellSize = maxDist;
    const grid = new Map();
    const idxKey = i => {
      const cx = Math.floor(this.restPositions[i*3]   / cellSize);
      const cy = Math.floor(this.restPositions[i*3+1] / cellSize);
      const cz = Math.floor(this.restPositions[i*3+2] / cellSize);
      return cx + ',' + cy + ',' + cz;
    };
    for (let i = 0; i < N; i++) {
      const key = idxKey(i);
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key).push(i);
    }
    const pairs = [];
    const seen = new Set();
    const maxSq = maxDist * maxDist;
    for (let i = 0; i < N; i++) {
      const x = this.restPositions[i*3];
      const y = this.restPositions[i*3+1];
      const z = this.restPositions[i*3+2];
      const cx = Math.floor(x / cellSize);
      const cy = Math.floor(y / cellSize);
      const cz = Math.floor(z / cellSize);
      const dists = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dz = -1; dz <= 1; dz++) {
            const cell = grid.get((cx+dx)+','+(cy+dy)+','+(cz+dz));
            if (!cell) continue;
            for (let q = 0; q < cell.length; q++) {
              const j = cell[q];
              if (j === i) continue;
              const ddx = this.restPositions[j*3]   - x;
              const ddy = this.restPositions[j*3+1] - y;
              const ddz = this.restPositions[j*3+2] - z;
              const d2 = ddx*ddx + ddy*ddy + ddz*ddz;
              if (d2 < maxSq) dists.push({ j, d2 });
            }
          }
        }
      }
      dists.sort((a, b) => a.d2 - b.d2);
      const limit = Math.min(k, dists.length);
      for (let q = 0; q < limit; q++) {
        const j = dists[q].j;
        const a = i < j ? i : j;
        const b = i < j ? j : i;
        const key = a * 100000 + b;
        if (!seen.has(key)) {
          seen.add(key);
          pairs.push(a, b);
        }
      }
    }
    this.lineIndices = (N < 65535)
      ? new Uint16Array(pairs)
      : new Uint32Array(pairs);
  }

  buildGeometry() {
    const N = this.points.length;
    this.positions = new Float32Array(N * 3);
    this.positions.set(this.restPositions);
    const posAttr = new THREE.BufferAttribute(this.positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    this.posAttr = posAttr;

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', posAttr);
    const tex = makePointTexture();
    this.pointsMat = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      map: tex,
      alphaTest: 0.01,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    });
    this.points3D = new THREE.Points(pointsGeo, this.pointsMat);
    this.group.add(this.points3D);

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', posAttr);
    linesGeo.setIndex(new THREE.BufferAttribute(this.lineIndices, 1));
    this.linesMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.lines3D = new THREE.LineSegments(linesGeo, this.linesMat);
    this.group.add(this.lines3D);
  }

  setAnim(name, holdSec = 0) {
    if (this.animName !== name) this.animName = name;
    if (holdSec > 0) this.animLockUntil = performance.now() / 1000 + holdSec;
  }
  isLocked() { return performance.now() / 1000 < this.animLockUntil; }
  setColor(c) { this.colorTarget.copy(c); }

  pointCount() { return this.points.length; }
  lineCount()  { return this.lineIndices.length / 2; }
}

// ─── ANIMATION METHODS (added via append) ───

EveCloud.prototype.update = function(t, dt, score) {
  this.colorBase.lerp(this.colorTarget, Math.min(1, dt * 2.5));
  this.pointsMat.color.copy(this.colorBase);
  this.linesMat.color.copy(this.colorBase);

  this.applyAnimation(t, score);

  for (const bone of this.boneList) {
    bone.updateLocal();
    bone.updateWorld();
  }

  const tmp = new THREE.Vector3();
  const N = this.points.length;
  const noiseMag = 0.0035;
  const posN = Math.max(0, Math.min(1, score / 1000));
  const negN = Math.max(0, Math.min(1, -score / 1000));
  const chaos = negN * 0.018;
  for (let i = 0; i < N; i++) {
    const p = this.points[i];
    const bone = this.bones[p.bone];
    tmp.set(p.lx, p.ly, p.lz).applyMatrix4(bone.worldMatrix);
    const n1 = Math.sin(t * 1.4 + p.ph1);
    const n2 = Math.sin(t * 2.3 + p.ph2);
    let nx = n1 * noiseMag;
    let ny = n2 * noiseMag;
    let nz = (n1 + n2) * noiseMag * 0.5;
    if (chaos > 0) {
      nx += (Math.random() - 0.5) * chaos;
      ny += (Math.random() - 0.5) * chaos;
      nz += (Math.random() - 0.5) * chaos;
    }
    this.positions[i*3]   = tmp.x + nx;
    this.positions[i*3+1] = tmp.y + ny;
    this.positions[i*3+2] = tmp.z + nz;
  }
  this.posAttr.needsUpdate = true;

  this.pointsMat.opacity = 0.92 + posN * 0.05;
  this.linesMat.opacity = 0.18 + posN * 0.20 + negN * 0.10;
  this.pointsMat.size = 0.05 + posN * 0.012;
};

EveCloud.prototype.applyAnimation = function(t, score) {
  const b = this.bones;
  for (const bone of this.boneList) bone.resetForFrame();

  const a = this.animName;

  if (a === 'idle') {
    const sw = Math.sin(t * 1.3);
    b.hips.localPos.x += sw * 0.005;
    b.hips.localPos.y += Math.abs(Math.sin(t * 1.3)) * 0.008;
    b.chest.localRot.z = sw * 0.02;
    b.chest.localRot.y = Math.sin(t * 0.4) * 0.04;
    b.head.localRot.x = Math.sin(t * 0.9) * 0.025;
    b.head.localRot.y = Math.sin(t * 0.3) * 0.08;
    b.lShoulder.localRot.x = Math.sin(t * 1.5) * 0.04;
    b.lShoulder.localRot.z = -0.05;
    b.lElbow.localRot.x = 0.30 + Math.sin(t * 1.6) * 0.04;
    b.rShoulder.localRot.x = -Math.sin(t * 1.5) * 0.034;
    b.rShoulder.localRot.z = 0.05;
    b.rElbow.localRot.x = 0.30 + Math.cos(t * 1.5) * 0.04;
  }
  else if (a === 'walk') {
    const w = t * 2.2;
    b.hips.localPos.x += Math.sin(w) * 0.03;
    b.hips.localPos.y += Math.abs(Math.sin(w)) * 0.025 - 0.012;
    b.chest.localRot.z = Math.sin(w) * 0.04;
    b.chest.localRot.y = Math.sin(w) * 0.13;
    b.head.localRot.x = Math.sin(w * 2) * 0.02;
    b.lHip.localRot.x = Math.sin(w) * 0.45;
    b.rHip.localRot.x = -Math.sin(w) * 0.45;
    b.lKnee.localRot.x = Math.max(0, -Math.sin(w) * 0.65) + 0.05;
    b.rKnee.localRot.x = Math.max(0, Math.sin(w) * 0.65) + 0.05;
    b.lShoulder.localRot.x = -Math.sin(w) * 0.38;
    b.lShoulder.localRot.z = -0.05;
    b.rShoulder.localRot.x = Math.sin(w) * 0.38;
    b.rShoulder.localRot.z = 0.05;
    b.lElbow.localRot.x = 0.35 + Math.abs(Math.sin(w)) * 0.22;
    b.rElbow.localRot.x = 0.35 + Math.abs(Math.cos(w)) * 0.22;
  }
  else if (a === 'skip') {
    const sk = t * 2.6;
    b.hips.localPos.y += Math.pow(Math.max(0, Math.sin(sk)), 1.6) * 0.20;
    b.hips.localPos.x += Math.sin(sk) * 0.04;
    const phase = Math.floor(t * 1.3) % 2;
    if (phase === 0) {
      b.lHip.localRot.x = Math.sin(sk) * 0.55 + 0.15;
      b.rHip.localRot.x = -0.2;
      b.lKnee.localRot.x = 0.10 + Math.max(0, Math.sin(sk)) * 0.45;
      b.rKnee.localRot.x = 0.45 - Math.max(0, Math.sin(sk)) * 0.30;
    } else {
      b.rHip.localRot.x = Math.sin(sk) * 0.55 + 0.15;
      b.lHip.localRot.x = -0.2;
      b.rKnee.localRot.x = 0.10 + Math.max(0, Math.sin(sk)) * 0.45;
      b.lKnee.localRot.x = 0.45 - Math.max(0, Math.sin(sk)) * 0.30;
    }
    b.lShoulder.localRot.x = Math.sin(sk) * 0.55;
    b.lShoulder.localRot.z = -0.22;
    b.rShoulder.localRot.x = -Math.sin(sk) * 0.55;
    b.rShoulder.localRot.z = 0.22;
    b.lElbow.localRot.x = 0.55;
    b.rElbow.localRot.x = 0.55;
    b.head.localRot.x = Math.sin(sk * 2) * 0.07;
  }
  else if (a === 'dance') {
    const d1 = t * 1.3, d2 = t * 1.9, d3 = t * 0.7;
    b.hips.localPos.x += Math.sin(d1) * 0.08;
    b.hips.localPos.y += Math.sin(d2) * 0.05;
    b.chest.localRot.z = Math.sin(d3) * 0.16;
    b.chest.localRot.y = Math.sin(d1 * 0.8) * 0.35;
    b.head.localRot.z = Math.sin(d3 * 1.5) * 0.28;
    b.head.localRot.y = Math.sin(d1 * 0.6) * 0.35;
    b.lShoulder.localRot.x = Math.sin(d2) * 0.7;
    b.rShoulder.localRot.x = Math.cos(d2 * 1.1) * 0.7;
    b.lShoulder.localRot.z = -0.5 - Math.sin(d1) * 0.4;
    b.rShoulder.localRot.z = 0.5 + Math.cos(d1 * 1.2) * 0.4;
    b.lElbow.localRot.x = 0.5 + Math.sin(d2 * 1.3) * 0.35;
    b.rElbow.localRot.x = 0.5 + Math.cos(d2 * 1.4) * 0.35;
    b.lHip.localRot.x = Math.sin(d2 * 0.5) * 0.22;
    b.rHip.localRot.x = -Math.sin(d2 * 0.5) * 0.11;
  }
  else if (a === 'seizure') {
    const j = () => (Math.random() - 0.5);
    b.hips.localPos.x += j() * 0.15;
    b.hips.localPos.y += j() * 0.08;
    b.chest.localRot.z = j() * 0.4;
    b.chest.localRot.y = j() * 0.5;
    b.head.localRot.x = j() * 0.5;
    b.head.localRot.z = j() * 0.5;
    b.head.localRot.y = j() * 0.8;
    b.lShoulder.localRot.x = j() * 1.6;
    b.rShoulder.localRot.x = j() * 1.6;
    b.lShoulder.localRot.z = -0.3 + j() * 0.6;
    b.rShoulder.localRot.z = 0.3 + j() * 0.6;
    b.lElbow.localRot.x = Math.max(0, j() * 1.5);
    b.rElbow.localRot.x = Math.max(0, j() * 1.5);
    b.lHip.localRot.x = j() * 0.4;
    b.rHip.localRot.x = j() * 0.4;
    b.lKnee.localRot.x = Math.max(0, j() * 0.6);
    b.rKnee.localRot.x = Math.max(0, j() * 0.6);
  }
  else if (a === 'speaking') {
    const s = Math.sin(t * 1.4);
    b.hips.localPos.x += s * 0.012;
    b.hips.localPos.y += Math.sin(t * 1.4 + Math.PI/2) * 0.006;
    b.head.localRot.x = Math.sin(t * 5.5) * 0.08 + Math.sin(t * 2) * 0.025;
    b.head.localRot.z = Math.sin(t * 3) * 0.07;
    b.head.localRot.y = Math.sin(t * 2.1) * 0.10;
    b.lShoulder.localRot.x = Math.sin(t * 4) * 0.22 + 0.06;
    b.rShoulder.localRot.x = Math.cos(t * 4.3) * 0.22 + 0.06;
    b.lShoulder.localRot.z = -0.22 - Math.sin(t * 3) * 0.10;
    b.rShoulder.localRot.z = 0.22 + Math.cos(t * 3.2) * 0.10;
    b.lElbow.localRot.x = 0.55 + Math.sin(t * 5) * 0.18;
    b.rElbow.localRot.x = 0.55 + Math.cos(t * 4.8) * 0.18;
  }

  // Pigtails: hang back, swing with head motion
  b.lPigtail.localRot.x = 0.40 - b.head.localRot.x * 0.6;
  b.rPigtail.localRot.x = 0.40 - b.head.localRot.x * 0.6;
  b.lPigtail.localRot.z = b.head.localRot.z * 0.4;
  b.rPigtail.localRot.z = b.head.localRot.z * 0.4;
};
