// environment.js — the world around Eve. Sphere grid, ground, stars,
// progressive hell/heaven elements, mood-driven colour & opacity.

import * as THREE from 'three';

const SPHERE_RADIUS = 130;
const GROUND_Y = 0;

function buildSphereGrid(radius, color, latBands, lngBands, opacity) {
  const positions = [];
  for (let i = 1; i < latBands; i++) {
    const phi = (i / latBands) * Math.PI;
    const y = Math.cos(phi) * radius;
    const r = Math.sin(phi) * radius;
    const segs = 96;
    for (let j = 0; j < segs; j++) {
      const a1 = (j / segs) * Math.PI * 2;
      const a2 = ((j + 1) / segs) * Math.PI * 2;
      positions.push(Math.cos(a1) * r, y, Math.sin(a1) * r);
      positions.push(Math.cos(a2) * r, y, Math.sin(a2) * r);
    }
  }
  for (let i = 0; i < lngBands; i++) {
    const theta = (i / lngBands) * Math.PI * 2;
    const segs = 64;
    for (let j = 0; j < segs; j++) {
      const p1 = (j / segs) * Math.PI;
      const p2 = ((j + 1) / segs) * Math.PI;
      const y1 = Math.cos(p1) * radius;
      const r1 = Math.sin(p1) * radius;
      const y2 = Math.cos(p2) * radius;
      const r2 = Math.sin(p2) * radius;
      positions.push(Math.cos(theta) * r1, y1, Math.sin(theta) * r1);
      positions.push(Math.cos(theta) * r2, y2, Math.sin(theta) * r2);
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

function buildGround() {
  const positions = [];
  const extent = 80, step = 2;
  for (let x = -extent; x <= extent; x += step) {
    positions.push(x, GROUND_Y, -extent, x, GROUND_Y, extent);
  }
  for (let z = -extent; z <= extent; z += step) {
    positions.push(-extent, GROUND_Y, z, extent, GROUND_Y, z);
  }
  // concentric rings
  for (let r = 6; r <= 70; r += 6) {
    const segs = 80;
    for (let i = 0; i < segs; i++) {
      const a1 = (i / segs) * Math.PI * 2;
      const a2 = ((i + 1) / segs) * Math.PI * 2;
      positions.push(Math.cos(a1) * r, GROUND_Y + 0.002, Math.sin(a1) * r);
      positions.push(Math.cos(a2) * r, GROUND_Y + 0.002, Math.sin(a2) * r);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0x4a6890, transparent: true, opacity: 0.45,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.LineSegments(geo, mat);
}

function buildStarfield(count, distMin, distMax, color) {
  const geo = new THREE.BufferGeometry();
  const pts = [];
  for (let i = 0; i < count; i++) {
    const u = Math.random(), v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = distMin + Math.random() * (distMax - distMin);
    pts.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi) + 10,                  // bias upward (fewer below ground)
      r * Math.sin(phi) * Math.sin(theta)
    );
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const mat = new THREE.PointsMaterial({
    color, size: 0.9, sizeAttenuation: true,
    transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.Points(geo, mat);
}

function buildEveSpotlight() {
  // A circular light disc on the ground beneath Eve — gives the figure
  // weight, like she's lit from above.
  const segs = 64, pts = [];
  for (let i = 0; i < segs; i++) {
    const a1 = (i / segs) * Math.PI * 2;
    const a2 = ((i + 1) / segs) * Math.PI * 2;
    // outer ring
    pts.push(Math.cos(a1) * 1.6, GROUND_Y + 0.005, Math.sin(a1) * 1.6,
             Math.cos(a2) * 1.6, GROUND_Y + 0.005, Math.sin(a2) * 1.6);
    // inner ring
    pts.push(Math.cos(a1) * 1.0, GROUND_Y + 0.004, Math.sin(a1) * 1.0,
             Math.cos(a2) * 1.0, GROUND_Y + 0.004, Math.sin(a2) * 1.0);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0.4,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  return new THREE.LineSegments(geo, mat);
}

export class Environment {
  constructor(scene) {
    this.scene = scene;

    // Background fog
    scene.fog = new THREE.FogExp2(0x000000, 0.0055);
    this.bgColor = new THREE.Color(0x000000);

    // Sphere grids: neutral, hell, paradise (overlaid)
    this.neutralGrid = buildSphereGrid(SPHERE_RADIUS, 0x3a5a8a, 12, 16, 0.30);
    this.hellGrid = buildSphereGrid(SPHERE_RADIUS * 1.02, 0xff3040, 8, 12, 0);
    this.paradiseGrid = buildSphereGrid(SPHERE_RADIUS * 1.02, 0xffdc82, 18, 26, 0);
    scene.add(this.neutralGrid, this.hellGrid, this.paradiseGrid);

    // Ground plane
    this.ground = buildGround();
    scene.add(this.ground);

    // Eve spotlight (moved with eve in main loop)
    this.spotlight = buildEveSpotlight();
    scene.add(this.spotlight);

    // Stars: layered for depth
    this.starsFar = buildStarfield(450, 240, 320, 0xa8c8ff);
    this.starsMid = buildStarfield(280, 160, 230, 0xc8d8ff);
    scene.add(this.starsFar, this.starsMid);

    // Orbiting wireframe objects OUTSIDE the sphere
    this.objectGroup = new THREE.Group();
    scene.add(this.objectGroup);
    this.wireObjects = [];
    const geos = [
      new THREE.IcosahedronGeometry(11, 1),
      new THREE.DodecahedronGeometry(10, 0),
      new THREE.TetrahedronGeometry(9, 0),
      new THREE.TorusGeometry(10, 1.4, 6, 26),
      new THREE.OctahedronGeometry(9, 0),
      new THREE.TorusKnotGeometry(7, 1.3, 56, 7),
    ];
    for (let i = 0; i < 12; i++) {
      const g = geos[i % geos.length];
      const edges = new THREE.EdgesGeometry(g);
      const mat = new THREE.LineBasicMaterial({
        color: 0x4a6890, transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const obj = new THREE.LineSegments(edges, mat);
      obj.userData = {
        dist: 155 + Math.random() * 120,
        angle: Math.random() * Math.PI * 2,
        speed: 0.04 + Math.random() * 0.07,
        baseSpeed: 0,
        phase: Math.random() * Math.PI * 2,
      };
      obj.userData.baseSpeed = obj.userData.speed;
      this.wireObjects.push(obj);
      this.objectGroup.add(obj);
    }

    // Heaven elements: golden lattice cubes that drift in close to Eve
    this.heavenLattice = new THREE.Group();
    scene.add(this.heavenLattice);
    const cubeGeo = new THREE.BoxGeometry(11, 11, 11);
    for (let i = 0; i < 6; i++) {
      const edges = new THREE.EdgesGeometry(cubeGeo);
      const mat = new THREE.LineBasicMaterial({
        color: 0xffdc82, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const c = new THREE.LineSegments(edges, mat);
      c.userData = { idx: i, baseRot: [Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI] };
      c.rotation.set(...c.userData.baseRot);
      this.heavenLattice.add(c);
    }

    // Heaven beams: vertical light rays around eve
    this.heavenBeams = new THREE.Group();
    scene.add(this.heavenBeams);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const r = 18;
      const pts = [
        Math.cos(a) * r, 0, Math.sin(a) * r,
        Math.cos(a) * r * 0.6, 50, Math.sin(a) * r * 0.6,
      ];
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const m = new THREE.LineBasicMaterial({
        color: 0xfff3c0, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      this.heavenBeams.add(new THREE.LineSegments(g, m));
    }

    // Hell elements: jagged red shapes pulsing close in
    this.hellShards = new THREE.Group();
    scene.add(this.hellShards);
    for (let i = 0; i < 18; i++) {
      // Make a jagged shape using a small icosahedron with random vertex jitter
      const geo = new THREE.IcosahedronGeometry(2 + Math.random() * 3, 0);
      const pos = geo.attributes.position;
      for (let v = 0; v < pos.count; v++) {
        pos.setXYZ(v,
          pos.getX(v) + (Math.random() - 0.5) * 1.4,
          pos.getY(v) + (Math.random() - 0.5) * 1.4,
          pos.getZ(v) + (Math.random() - 0.5) * 1.4
        );
      }
      const edges = new THREE.EdgesGeometry(geo);
      const mat = new THREE.LineBasicMaterial({
        color: 0xff4030, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const s = new THREE.LineSegments(edges, mat);
      const a = (i / 18) * Math.PI * 2;
      const r = 14 + Math.random() * 18;
      s.userData = {
        baseAngle: a,
        baseRadius: r,
        baseHeight: 2 + Math.random() * 18,
        rotSpeed: [Math.random()*0.5, Math.random()*0.5, Math.random()*0.5],
        phase: Math.random() * Math.PI * 2,
      };
      s.position.set(Math.cos(a) * r, s.userData.baseHeight, Math.sin(a) * r);
      this.hellShards.add(s);
    }

    // Hell embers: red points that flicker upward
    {
      const count = 240;
      const positions = new Float32Array(count * 3);
      const seeds = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 30;
        positions[i*3]   = Math.cos(a) * r;
        positions[i*3+1] = Math.random() * 12;
        positions[i*3+2] = Math.sin(a) * r;
        seeds[i*3]   = Math.random() * 100;
        seeds[i*3+1] = 4 + Math.random() * 16;
        seeds[i*3+2] = 0.4 + Math.random() * 0.6;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xff5020, size: 0.4, sizeAttenuation: true,
        transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      this.hellEmbers = new THREE.Points(geo, mat);
      this.hellEmbers.userData = { seeds };
      scene.add(this.hellEmbers);
    }
  }

  /**
   * Update mood — call each frame.
   * @param {number} t   absolute time in seconds
   * @param {number} score   current game score
   * @param {object} eve { position, scale }
   */
  update(t, score, eve) {
    const posN = Math.max(0, Math.min(1, score / 1000));
    const negN = Math.max(0, Math.min(1, -score / 1000));

    // Sphere grids
    this.neutralGrid.material.opacity = 0.30 * (1 - Math.max(posN, negN) * 0.6);
    this.hellGrid.material.opacity = 0.55 * negN;
    this.hellGrid.material.color.setHSL(0.01, 0.95, 0.42 + 0.08 * Math.sin(t * 4) * negN);
    this.paradiseGrid.material.opacity = 0.65 * posN;

    // Ground colour drifts with mood — even at neutral, has a blue character
    this.ground.material.color.setRGB(
      0.16 + negN * 0.55 + posN * 0.30,
      0.28 - negN * 0.20 + posN * 0.22,
      0.50 - negN * 0.45 + posN * 0.05
    );
    this.ground.material.opacity = 0.45 - negN * 0.10 + posN * 0.10;

    // Fog & background colour shift
    const bgR = 0.00 + negN * 0.18 + posN * 0.05;
    const bgG = 0.01 + posN * 0.04;
    const bgB = 0.04 - negN * 0.02 + posN * 0.02;
    this.scene.fog.color.setRGB(bgR, bgG, bgB);
    this.bgColor.setRGB(bgR, bgG, bgB);
    // Sync background colour so horizon blends without a hard cut at fog edge
    if (this.scene.background && this.scene.background.setRGB) {
      this.scene.background.setRGB(bgR, bgG, bgB);
    }

    // Stars colour
    this.starsFar.material.color.setRGB(
      0.65 + negN * 0.35,
      0.78 - negN * 0.4 + posN * 0.20,
      1.00 - negN * 0.7
    );
    this.starsMid.material.color.setRGB(
      0.78 + posN * 0.22 + negN * 0.22,
      0.85 - negN * 0.45 + posN * 0.10,
      1.00 - negN * 0.6
    );
    this.starsFar.material.opacity = 0.7 + posN * 0.3;
    this.starsMid.material.opacity = 0.55 + posN * 0.4;
    this.starsFar.rotation.y = t * 0.005;
    this.starsMid.rotation.y = -t * 0.008;

    // Spotlight under Eve
    this.spotlight.position.set(eve.position.x, GROUND_Y + 0.005, eve.position.z);
    this.spotlight.scale.setScalar(Math.max(1, eve.scale * 0.7));
    this.spotlight.material.color.setRGB(
      1.0 - negN * 0.3 + posN * 0.0,
      1.0 - negN * 0.6 + posN * (0.92 - 1.0 + 1.0),
      1.0 - negN * 0.8 + posN * 0.5
    );
    this.spotlight.material.opacity = 0.35 + posN * 0.5 - negN * 0.15;

    // Orbiting wire objects
    for (let i = 0; i < this.wireObjects.length; i++) {
      const obj = this.wireObjects[i];
      const d = obj.userData;
      const aggression = negN;
      const grace = posN;
      d.speed = d.baseSpeed * (1 + aggression * 3);
      d.angle += d.speed * 0.016;
      const rx = d.dist * Math.cos(d.angle + d.phase);
      const rz = d.dist * Math.sin(d.angle + d.phase);
      const ry = Math.sin(d.angle * 1.3 + d.phase) * d.dist * 0.3;
      const jx = aggression > 0.1 ? Math.sin(t * 9 + i) * aggression * 8 : 0;
      const jy = aggression > 0.1 ? Math.cos(t * 11 + i) * aggression * 6 : 0;
      obj.position.set(rx + jx, ry + jy, rz);
      obj.rotation.x += d.speed * 0.03 * (1 + aggression * 4);
      obj.rotation.y += d.speed * 0.045 * (1 + aggression * 3);
      obj.rotation.z += aggression * 0.04 * Math.sin(t * 7 + i);

      if (aggression > 0.2) {
        obj.material.color.setHSL(0.02 + Math.sin(t * 3 + i) * 0.02, 0.95, 0.42 + 0.1 * Math.sin(t * 5));
      } else if (grace > 0.2) {
        obj.material.color.setHSL(0.13, 0.75, 0.62 + 0.05 * Math.sin(t * 1.2 + i));
      } else {
        obj.material.color.setRGB(0.29, 0.41, 0.56);
      }
      obj.material.opacity = 0.45 + aggression * 0.45 + grace * 0.30;

      if (aggression > 0.55 && Math.random() < 0.0018) {
        obj.visible = false;
        setTimeout(() => { obj.visible = true; }, 130);
      }
    }

    // Heaven lattice cubes — drift around Eve at high positive
    this.heavenLattice.children.forEach((c, i) => {
      const op = posN * (0.55 + 0.45 * Math.sin(t * 0.55 + i));
      c.material.opacity = op;
      c.rotation.x = c.userData.baseRot[0] + t * (0.10 + i * 0.04);
      c.rotation.y = c.userData.baseRot[1] + t * (0.08 + i * 0.03);
      const orbit = (i / this.heavenLattice.children.length) * Math.PI * 2;
      const r = 18 + posN * 10;
      c.position.set(
        eve.position.x + Math.cos(t * 0.18 + orbit) * r,
        12 + Math.sin(t * 0.22 + orbit * 1.3) * 6,
        eve.position.z + Math.sin(t * 0.18 + orbit) * r
      );
    });

    // Heaven beams
    this.heavenBeams.rotation.y = t * 0.05;
    this.heavenBeams.position.set(eve.position.x, 0, eve.position.z);
    this.heavenBeams.children.forEach((b, i) => {
      b.material.opacity = posN * (0.35 + 0.25 * Math.sin(t * 1.2 + i));
    });

    // Hell shards — pulse and rotate aggressively around Eve at high negative
    this.hellShards.children.forEach((s, i) => {
      const op = negN * (0.55 + 0.4 * Math.sin(t * 4 + s.userData.phase));
      s.material.opacity = op;
      s.material.color.setHSL(0.02, 0.95, 0.4 + 0.1 * Math.sin(t * 6 + i));
      const a = s.userData.baseAngle + t * 0.4 * negN;
      const r = s.userData.baseRadius + Math.sin(t * 3 + s.userData.phase) * 2;
      s.position.set(
        eve.position.x + Math.cos(a) * r,
        s.userData.baseHeight + Math.sin(t * 5 + s.userData.phase) * 1.5,
        eve.position.z + Math.sin(a) * r
      );
      s.rotation.x += s.userData.rotSpeed[0] * 0.04 * negN;
      s.rotation.y += s.userData.rotSpeed[1] * 0.04 * negN;
      s.rotation.z += s.userData.rotSpeed[2] * 0.04 * negN;
    });

    // Hell embers — drift upward, fade in/out
    if (negN > 0) {
      this.hellEmbers.material.opacity = negN * 0.85;
      const positions = this.hellEmbers.geometry.attributes.position.array;
      const seeds = this.hellEmbers.userData.seeds;
      const N = positions.length / 3;
      for (let i = 0; i < N; i++) {
        const seedX = seeds[i*3];
        const speed = seeds[i*3+2];
        positions[i*3+1] += speed * 0.08;
        if (positions[i*3+1] > seeds[i*3+1]) {
          // recycle to base
          positions[i*3+1] = 0;
          const a = Math.random() * Math.PI * 2;
          const r = Math.random() * 30;
          positions[i*3]   = eve.position.x + Math.cos(a) * r;
          positions[i*3+2] = eve.position.z + Math.sin(a) * r;
        }
        // small jitter
        positions[i*3]   += Math.sin(t * 4 + seedX) * 0.02;
        positions[i*3+2] += Math.cos(t * 4 + seedX) * 0.02;
      }
      this.hellEmbers.geometry.attributes.position.needsUpdate = true;
    } else {
      this.hellEmbers.material.opacity = 0;
    }

    // Vignette colour shift via CSS variable
    const vig = document.getElementById('vignette');
    if (vig) {
      // Add tinted edge as score swings
      const edgeR = Math.round(negN * 30);
      const edgeG = 0;
      const edgeB = Math.round(posN * 25);
      vig.style.background = `radial-gradient(ellipse at 50% 35%, transparent 30%, rgba(${edgeR},${edgeG},${edgeB},0.4) 75%, rgba(0,0,0,0.85) 100%)`;
    }
  }
}

export const ENV_CONSTANTS = { SPHERE_RADIUS, GROUND_Y };
