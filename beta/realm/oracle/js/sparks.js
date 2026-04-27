// MARDUK ORACLE v1.3 — sparks.js
// sparks.js — Touch-triggered particle bursts and shockwave rings.
// Pool-based: pre-allocated Float32Arrays, no per-frame allocations.

import * as THREE from 'three';

const MAX_SPARKS = 700;
const MAX_RINGS  = 6;

function makeSparkTex() {
  const sz = 32;
  const c = document.createElement('canvas');
  c.width = c.height = sz;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(sz/2, sz/2, 0, sz/2, sz/2, sz/2);
  g.addColorStop(0.00, 'rgba(255, 230, 140, 1.0)');
  g.addColorStop(0.30, 'rgba(255, 160,  40, 0.85)');
  g.addColorStop(0.65, 'rgba(220,  80,  10, 0.30)');
  g.addColorStop(1.00, 'rgba(0,     0,   0, 0.00)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, sz, sz);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  return tex;
}

function buildRing(scene) {
  const segs = 56;
  const pts  = [];
  for (let i = 0; i <= segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    pts.push(Math.cos(a), Math.sin(a), 0);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0xffa030, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const ring = new THREE.Line(geo, mat);
  ring.visible = false;
  ring.userData = { active: false, life: 0, maxLife: 0.55 };
  scene.add(ring);
  return ring;
}

export class Sparks {
  constructor(scene) {
    // ─── Particle pool ───
    this._ppos  = new Float32Array(MAX_SPARKS * 3).fill(99999);
    this._pvel  = new Float32Array(MAX_SPARKS * 3);
    this._plife = new Float32Array(MAX_SPARKS);
    this._pmaxL = new Float32Array(MAX_SPARKS);
    this._pNext = 0;

    const geo = new THREE.BufferGeometry();
    this._posAttr = new THREE.BufferAttribute(this._ppos, 3);
    this._posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this._posAttr);
    geo.setDrawRange(0, 0);

    this._ptMat = new THREE.PointsMaterial({
      size: 0.18, sizeAttenuation: true,
      map: makeSparkTex(), alphaTest: 0.005,
      transparent: true, opacity: 1.0,
      depthWrite: false, blending: THREE.AdditiveBlending,
      color: 0xffa030,
    });
    this._mesh = new THREE.Points(geo, this._ptMat);
    scene.add(this._mesh);

    // ─── Ring pool ───
    this._rings = [];
    for (let i = 0; i < MAX_RINGS; i++) this._rings.push(buildRing(scene));
  }

  // Spawn a burst at world position (x, y, z)
  burst(x, y, z, count = 52) {
    for (let i = 0; i < count; i++) {
      const s    = this._pNext % MAX_SPARKS;
      this._pNext++;

      this._ppos[s*3]   = x + (Math.random() - 0.5) * 0.15;
      this._ppos[s*3+1] = y + (Math.random() - 0.5) * 0.15;
      this._ppos[s*3+2] = z + (Math.random() - 0.5) * 0.15;

      const speed = 1.8 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      this._pvel[s*3]   = Math.sin(phi) * Math.cos(theta) * speed;
      this._pvel[s*3+1] = Math.sin(phi) * Math.sin(theta) * speed + 0.4;
      this._pvel[s*3+2] = Math.cos(phi) * speed;

      const life = 0.35 + Math.random() * 0.55;
      this._plife[s] = life;
      this._pmaxL[s] = life;
    }

    // Update draw range to cover all potentially active slots
    this._mesh.geometry.setDrawRange(0, Math.min(this._pNext, MAX_SPARKS));

    // Activate a ring
    for (const ring of this._rings) {
      if (!ring.userData.active) {
        ring.userData.active  = true;
        ring.userData.life    = ring.userData.maxLife;
        ring.position.set(x, y, z);
        ring.scale.setScalar(0.05);
        ring.visible = true;
        break;
      }
    }
  }

  update(dt, camera) {
    // ─── Particles ───
    const N = Math.min(this._pNext, MAX_SPARKS);
    for (let i = 0; i < N; i++) {
      if (this._plife[i] <= 0) continue;

      this._plife[i] -= dt;
      if (this._plife[i] <= 0) {
        this._ppos[i*3] = this._ppos[i*3+1] = this._ppos[i*3+2] = 99999;
        continue;
      }

      // Integrate
      this._ppos[i*3]   += this._pvel[i*3]   * dt;
      this._ppos[i*3+1] += this._pvel[i*3+1] * dt;
      this._ppos[i*3+2] += this._pvel[i*3+2] * dt;

      // Gravity + drag
      this._pvel[i*3+1] -= 3.5 * dt;
      const drag = 1 - dt * 2.2;
      this._pvel[i*3]   *= drag;
      this._pvel[i*3+2] *= drag;
    }
    this._posAttr.needsUpdate = true;

    // ─── Rings ───
    for (const ring of this._rings) {
      if (!ring.userData.active) continue;

      ring.userData.life -= dt;
      if (ring.userData.life <= 0) {
        ring.userData.active = false;
        ring.material.opacity = 0;
        ring.visible = false;
        continue;
      }

      const progress = 1 - ring.userData.life / ring.userData.maxLife;
      ring.scale.setScalar(0.05 + progress * 3.0);
      ring.material.opacity = Math.pow(1 - progress, 1.5) * 0.75;
      // Billboard: face the camera
      ring.quaternion.copy(camera.quaternion);
    }
  }
}
