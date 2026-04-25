// environment.js — sphere grid, starfield, orbiting wireframes.
// Adapted from the EVE Turing Gate engine; palette shifted to amber/indigo for Marduk.

import * as THREE from 'three';

const SPHERE_R = 110;

function buildSphereGrid(radius, color, latBands, lngBands, opacity) {
  const positions = [];
  for (let i = 1; i < latBands; i++) {
    const phi = (i / latBands) * Math.PI;
    const y   = Math.cos(phi) * radius;
    const r   = Math.sin(phi) * radius;
    const segs = 96;
    for (let j = 0; j < segs; j++) {
      const a1 = (j     / segs) * Math.PI * 2;
      const a2 = ((j+1) / segs) * Math.PI * 2;
      positions.push(Math.cos(a1)*r, y, Math.sin(a1)*r,
                     Math.cos(a2)*r, y, Math.sin(a2)*r);
    }
  }
  for (let i = 0; i < lngBands; i++) {
    const theta = (i / lngBands) * Math.PI * 2;
    const segs  = 64;
    for (let j = 0; j < segs; j++) {
      const p1 = (j     / segs) * Math.PI;
      const p2 = ((j+1) / segs) * Math.PI;
      positions.push(
        Math.cos(theta)*Math.sin(p1)*radius, Math.cos(p1)*radius, Math.sin(theta)*Math.sin(p1)*radius,
        Math.cos(theta)*Math.sin(p2)*radius, Math.cos(p2)*radius, Math.sin(theta)*Math.sin(p2)*radius
      );
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.LineSegments(geo, mat);
}

function buildGround(y) {
  const positions = [];
  const extent = 70, step = 3;
  for (let x = -extent; x <= extent; x += step) {
    positions.push(x, y, -extent, x, y, extent);
  }
  for (let z = -extent; z <= extent; z += step) {
    positions.push(-extent, y, z, extent, y, z);
  }
  for (let r = 8; r <= 60; r += 8) {
    const segs = 80;
    for (let i = 0; i < segs; i++) {
      const a1 = (i     / segs) * Math.PI * 2;
      const a2 = ((i+1) / segs) * Math.PI * 2;
      positions.push(Math.cos(a1)*r, y+0.002, Math.sin(a1)*r,
                     Math.cos(a2)*r, y+0.002, Math.sin(a2)*r);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0x2a3a60, transparent: true, opacity: 0.35,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.LineSegments(geo, mat);
}

function buildStarfield(count, rMin, rMax, color) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const u = Math.random(), v = Math.random();
    const theta = Math.PI * 2 * u;
    const phi   = Math.acos(2*v - 1);
    const r     = rMin + Math.random() * (rMax - rMin);
    pts.push(r*Math.sin(phi)*Math.cos(theta), r*Math.cos(phi)+10, r*Math.sin(phi)*Math.sin(theta));
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const mat = new THREE.PointsMaterial({
    color, size: 0.9, sizeAttenuation: true, transparent: true, opacity: 0.75,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.Points(geo, mat);
}

export class Environment {
  constructor(scene) {
    this.scene = scene;
    scene.fog = new THREE.FogExp2(0x000000, 0.006);

    // sphere grids: base (blue-indigo) + active (amber) overlaid
    this.baseGrid   = buildSphereGrid(SPHERE_R,        0x2a3a70, 14, 18, 0.28);
    this.activeGrid = buildSphereGrid(SPHERE_R * 1.02, 0xa06010, 10, 14, 0.0);
    scene.add(this.baseGrid, this.activeGrid);

    // second inner hex-style grid (slightly smaller, denser lat)
    this.hexGrid = buildSphereGrid(SPHERE_R * 0.85, 0x1a2850, 20, 20, 0.15);
    scene.add(this.hexGrid);

    this.ground = buildGround(-6);
    scene.add(this.ground);

    this.starsFar = buildStarfield(400, 200, 300, 0x7080c0);
    this.starsMid = buildStarfield(240, 140, 190, 0x9090d0);
    scene.add(this.starsFar, this.starsMid);

    // Orbiting wireframe objects
    const geos = [
      new THREE.IcosahedronGeometry(10, 1),
      new THREE.DodecahedronGeometry(9,  0),
      new THREE.TetrahedronGeometry(8,   0),
      new THREE.TorusGeometry(9, 1.2, 6, 22),
      new THREE.OctahedronGeometry(9,    0),
      new THREE.TorusKnotGeometry(6, 1.1, 48, 7),
    ];
    this.wireObjs = [];
    const objGroup = new THREE.Group();
    scene.add(objGroup);
    for (let i = 0; i < 10; i++) {
      const edges = new THREE.EdgesGeometry(geos[i % geos.length]);
      const mat = new THREE.LineBasicMaterial({
        color: 0x3a4870, transparent: true, opacity: 0.42,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const obj = new THREE.LineSegments(edges, mat);
      obj.userData = {
        dist:  140 + Math.random() * 100,
        angle: Math.random() * Math.PI * 2,
        speed: 0.035 + Math.random() * 0.06,
        phase: Math.random() * Math.PI * 2,
      };
      this.wireObjs.push(obj);
      objGroup.add(obj);
    }

    // Data stream particles — glow during search
    {
      const N = 180;
      const pos = new Float32Array(N * 3);
      const vel = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 20 + Math.random() * 50;
        pos[i*3]   = Math.cos(a) * r;
        pos[i*3+1] = -6 + Math.random() * 12;
        pos[i*3+2] = Math.sin(a) * r;
        vel[i] = 0.05 + Math.random() * 0.12;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xe8a030, size: 0.6, sizeAttenuation: true,
        transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      this.streamPts = new THREE.Points(geo, mat);
      this.streamPts.userData.vel = vel;
      scene.add(this.streamPts);
    }

    this._activeT = 0; // lerp toward 1 when searching
  }

  setOracleState(state) {
    // 'idle' | 'searching' | 'data'
    this._state = state;
  }

  update(t) {
    const state = this._state || 'idle';
    const targetActive = (state === 'searching') ? 1 : (state === 'data') ? 0.4 : 0;
    this._activeT += (targetActive - this._activeT) * 0.04;
    const a = this._activeT;

    this.baseGrid.material.opacity   = 0.28 - a * 0.10;
    this.hexGrid.material.opacity    = 0.15 + a * 0.08;
    this.activeGrid.material.opacity = a * 0.45;
    this.baseGrid.rotation.y   = t * 0.004;
    this.hexGrid.rotation.y    = -t * 0.006;
    this.activeGrid.rotation.y = t * 0.007;

    this.starsFar.rotation.y = t * 0.004;
    this.starsMid.rotation.y = -t * 0.007;

    for (const obj of this.wireObjs) {
      const d = obj.userData;
      const speed = d.speed * (1 + a * 2.5);
      d.angle += speed * 0.016;
      const rx = d.dist * Math.cos(d.angle + d.phase);
      const rz = d.dist * Math.sin(d.angle + d.phase);
      const ry = Math.sin(d.angle * 1.2 + d.phase) * d.dist * 0.28;
      obj.position.set(rx, ry, rz);
      obj.rotation.x += speed * 0.025;
      obj.rotation.y += speed * 0.038;
      obj.material.opacity = 0.38 + a * 0.40;
      if (a > 0.5) {
        obj.material.color.setHSL(0.10 + Math.sin(t*2 + d.phase)*0.05, 0.85, 0.40 + a*0.12);
      } else {
        obj.material.color.setHex(0x3a4870);
      }
    }

    // Data stream particles converge toward origin during search
    if (a > 0.05) {
      this.streamPts.material.opacity = a * 0.7;
      const pos = this.streamPts.geometry.attributes.position.array;
      const vel = this.streamPts.userData.vel;
      const N   = pos.length / 3;
      for (let i = 0; i < N; i++) {
        const px = pos[i*3], py = pos[i*3+1], pz = pos[i*3+2];
        const dist = Math.sqrt(px*px + py*py + pz*pz);
        if (dist < 2) {
          const ai = Math.random() * Math.PI * 2;
          const ri = 40 + Math.random() * 50;
          pos[i*3]   = Math.cos(ai) * ri;
          pos[i*3+1] = -6 + Math.random() * 14;
          pos[i*3+2] = Math.sin(ai) * ri;
        } else {
          pos[i*3]   -= (px / dist) * vel[i] * a;
          pos[i*3+1] -= (py / dist) * vel[i] * a * 0.4;
          pos[i*3+2] -= (pz / dist) * vel[i] * a;
        }
      }
      this.streamPts.geometry.attributes.position.needsUpdate = true;
    } else {
      this.streamPts.material.opacity = 0;
    }

    // Ground colour
    this.ground.material.color.setRGB(0.10 + a*0.18, 0.15 + a*0.08, 0.28 - a*0.08);
    this.ground.material.opacity = 0.32 + a*0.12;
  }
}
