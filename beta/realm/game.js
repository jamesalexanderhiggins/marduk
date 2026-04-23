(function () {
'use strict';

// ══════════════════════════════════════════════════════════════
//  CONSTANTS
// ══════════════════════════════════════════════════════════════
const VERSION  = 'v2.2';
const MAX_DOTS = 200; // cap dot count for performance

document.getElementById('version-label').textContent = VERSION;

// ══════════════════════════════════════════════════════════════
//  URL PARAMS
// ══════════════════════════════════════════════════════════════
const PARAMS   = new URLSearchParams(location.search);
const REDIRECT = PARAMS.get('redirect');
const _sl      = parseInt(PARAMS.get('level'));
const _rp      = PARAMS.get('range');
let LVL_MIN = 1, LVL_MAX = 1000;
if (!isNaN(_sl) && _sl >= 1 && _sl <= 1000) {
  LVL_MIN = LVL_MAX = _sl;
} else if (_rp) {
  const [a, b] = _rp.split('-').map(Number);
  if (!isNaN(a)) LVL_MIN = Math.max(1, Math.min(1000, a));
  if (!isNaN(b)) LVL_MAX = Math.max(LVL_MIN, Math.min(1000, b));
}

// ══════════════════════════════════════════════════════════════
//  SEEDED RNG
// ══════════════════════════════════════════════════════════════
function mkRng(seed) {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  const nx = () => { s = Math.imul(1664525, s) + 1013904223 >>> 0; return s / 4294967296; };
  return { f: (a, b) => a + nx() * (b - a), i: (a, b) => Math.floor(a + nx() * (b - a + 1)) };
}

// ══════════════════════════════════════════════════════════════
//  AUDIO
// ══════════════════════════════════════════════════════════════
let AC = null, soundOn = true;
const getAC = () => {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
};
function playTone(freq, type, dur, vol, delay) {
  if (!soundOn) return;
  delay = delay || 0;
  const ac = getAC(), t = ac.currentTime + delay;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(ac.destination);
  o.start(t); o.stop(t + dur + 0.02);
}
const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
function sndConnect(n) {
  const f = SCALE[n % 8] * (1 + Math.floor(n / 8) * 0.5);
  playTone(f, 'sine', 0.4, 0.10);
  playTone(f * 1.5, 'sine', 0.25, 0.04, 0.025);
}
function sndWrong()  { playTone(65, 'sawtooth', 0.12, 0.07); }
function sndHover(i) { playTone(480 + i * 35, 'sine', 0.07, 0.022); }
function sndDone()   { [261.63,329.63,392,523.25,659.26,783.99].forEach((f,i) => playTone(f,'sine',0.55,0.09,i*0.09)); }

// Sound button
const $sndBtn = document.getElementById('btn-sound');
$sndBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  $sndBtn.classList.toggle('muted', !soundOn);
  $sndBtn.textContent = soundOn ? '\u266b SFX' : '\u266b OFF';
  if (soundOn) getAC();
});

// ══════════════════════════════════════════════════════════════
//  THREE.JS CORE
// ══════════════════════════════════════════════════════════════
const canvas = document.getElementById('c');
const W = () => window.innerWidth, H = () => window.innerHeight;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0x000308);
renderer.setSize(W(), H());

const scene  = new THREE.Scene();
scene.fog    = new THREE.Fog(0x000308, 60, 145);

const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 220);
window.addEventListener('resize', () => {
  renderer.setSize(W(), H()); camera.aspect = W()/H(); camera.updateProjectionMatrix();
});

// ══════════════════════════════════════════════════════════════
//  ORBIT CONTROLS
// ══════════════════════════════════════════════════════════════
const orb = { theta: 0.4, phi: 1.3, r: 20 };
const focal = new THREE.Vector3();
let dragging = false, dragStart = {x:0,y:0}, clickStart = {x:0,y:0};
function camSync() {
  camera.position.set(
    focal.x + orb.r * Math.sin(orb.phi) * Math.sin(orb.theta),
    focal.y + orb.r * Math.cos(orb.phi),
    focal.z + orb.r * Math.sin(orb.phi) * Math.cos(orb.theta)
  );
  camera.lookAt(focal);
}
camSync();
const onPD = (x,y) => { dragging=true; dragStart={x,y}; clickStart={x,y}; };
const onPM = (x,y) => {
  if (!dragging) return;
  orb.theta -= (x-dragStart.x)*0.006;
  orb.phi = Math.max(0.05,Math.min(Math.PI-0.05,orb.phi+(y-dragStart.y)*0.006));
  dragStart={x,y}; camSync();
};
const onPU = () => { dragging=false; };
canvas.addEventListener('mousedown', e => onPD(e.clientX,e.clientY));
window.addEventListener('mousemove', e => onPM(e.clientX,e.clientY));
window.addEventListener('mouseup', onPU);

// Touch drag (single finger) + pinch zoom (two fingers)
let pinchDist0 = 0;
canvas.addEventListener('touchstart', e => {
  if(e.touches.length===1) onPD(e.touches[0].clientX,e.touches[0].clientY);
  if(e.touches.length===2){
    dragging=false;
    pinchDist0=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
  }
},{passive:true});
window.addEventListener('touchmove', e => {
  if(e.touches.length===1) onPM(e.touches[0].clientX,e.touches[0].clientY);
  if(e.touches.length===2&&pinchDist0>0){
    const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
    orb.r=Math.max(1.5,Math.min(110,orb.r*(pinchDist0/d)));
    pinchDist0=d; camSync();
  }
},{passive:true});
window.addEventListener('touchend', onPU);
canvas.addEventListener('wheel', e => { orb.r=Math.max(1.5,Math.min(110,orb.r+e.deltaY*0.04)); camSync(); },{passive:true});

// ══════════════════════════════════════════════════════════════
//  TESSERACT GEOMETRY (4D)
// ══════════════════════════════════════════════════════════════
const T4V = [];
for (let x=-1;x<=1;x+=2) for (let y=-1;y<=1;y+=2) for (let z=-1;z<=1;z+=2) for (let w=-1;w<=1;w+=2) T4V.push([x,y,z,w]);
const T4E = [];
for (let i=0;i<16;i++) for (let j=i+1;j<16;j++) {
  let d=0; for(let k=0;k<4;k++) d+=(T4V[i][k]!==T4V[j][k])?1:0; if(d===1) T4E.push([i,j]);
}
function rot4(v,axw,ayw) {
  let [x,y,z,w]=v;
  const c1=Math.cos(axw),s1=Math.sin(axw); const nx=x*c1-w*s1,nw=x*s1+w*c1;
  const c2=Math.cos(ayw),s2=Math.sin(ayw); const ny=y*c2-nw*s2,nw2=y*s2+nw*c2;
  return [nx,ny,z,nw2];
}
function proj4(v,scale) {
  const [x,y,z,w]=v, f=2.5/(2.5-w*0.68);
  return new THREE.Vector3(x*f*scale,y*f*scale,z*f*scale);
}

// ══════════════════════════════════════════════════════════════
//  SCENE GROUPS
// ══════════════════════════════════════════════════════════════
const worldGrp = new THREE.Group(); // distant environment
const bgGrp    = new THREE.Group(); // cube cages + tesseract wireframe
const lvGrp    = new THREE.Group(); // puzzle dots + lines
scene.add(worldGrp, bgGrp, lvGrp);

// ══════════════════════════════════════════════════════════════
//  STARFIELD
// ══════════════════════════════════════════════════════════════
(function() {
  const pos=[];
  for(let i=0;i<600;i++){
    const r=85+Math.random()*55,th=Math.random()*Math.PI,ph=Math.random()*Math.PI*2;
    pos.push(r*Math.sin(th)*Math.cos(ph),r*Math.sin(th)*Math.sin(ph),r*Math.cos(th));
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  scene.add(new THREE.Points(geo,new THREE.PointsMaterial({color:0x1a2c44,size:0.11,sizeAttenuation:true})));
})();

// ══════════════════════════════════════════════════════════════
//  PUZZLE BACKGROUND (cube cages + animated tesseract)
// ══════════════════════════════════════════════════════════════
let tessLines=[], bgPhase=0, axw=0, ayw=0;
function mkLine(a,b,color,alpha){
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints([a,b]),
    new THREE.LineBasicMaterial({color,transparent:alpha<1,opacity:alpha,depthWrite:false}));
}
function buildBg(ph) {
  bgPhase=ph;
  while(bgGrp.children.length) bgGrp.remove(bgGrp.children[0]);
  tessLines=[];
  const GS=5,GR=50;
  for(let i=-GR;i<=GR;i+=GS){
    bgGrp.add(mkLine(new THREE.Vector3(i,-14,-GR),new THREE.Vector3(i,-14,GR),0x000e1f,0.30));
    bgGrp.add(mkLine(new THREE.Vector3(-GR,-14,i),new THREE.Vector3(GR,-14,i),0x000e1f,0.30));
  }
  if(ph>=2) addCage(14,0x001530,0.14);
  if(ph>=3) addCage(7,0x001a38,0.10);
  if(ph>=3){
    const o=[[14,14,14],[14,14,-14],[14,-14,14],[14,-14,-14],[-14,14,14],[-14,14,-14],[-14,-14,14],[-14,-14,-14]];
    const inn=[[7,7,7],[7,7,-7],[7,-7,7],[7,-7,-7],[-7,7,7],[-7,7,-7],[-7,-7,7],[-7,-7,-7]];
    for(let i=0;i<8;i++) bgGrp.add(mkLine(new THREE.Vector3(...o[i]),new THREE.Vector3(...inn[i]),0x001228,0.07));
  }
  if(ph>=4){
    const alpha=ph>=5?0.22:0.11, color=ph>=5?0x003088:0x001555;
    T4E.forEach(([i,j])=>{
      const pts=[new THREE.Vector3(),new THREE.Vector3()];
      const g=new THREE.BufferGeometry().setFromPoints(pts);
      const ln=new THREE.Line(g,new THREE.LineBasicMaterial({color,transparent:true,opacity:alpha,depthWrite:false}));
      bgGrp.add(ln); tessLines.push({line:ln,i,j});
    });
  }
}
function addCage(s,color,alpha){
  [
    [[-s,-s,-s],[s,-s,-s]],[[-s,s,-s],[s,s,-s]],[[-s,-s,s],[s,-s,s]],[[-s,s,s],[s,s,s]],
    [[-s,-s,-s],[-s,s,-s]],[[s,-s,-s],[s,s,-s]],[[-s,-s,s],[-s,s,s]],[[s,-s,s],[s,s,s]],
    [[-s,-s,-s],[-s,-s,s]],[[s,-s,-s],[s,-s,s]],[[-s,s,-s],[-s,s,s]],[[s,s,-s],[s,s,s]]
  ].forEach(([a,b])=>bgGrp.add(mkLine(new THREE.Vector3(...a),new THREE.Vector3(...b),color,alpha)));
}
function tickTesseract(dt,globalTick,worldTier){
  if(!tessLines.length) return;
  axw+=dt*0.14; ayw+=dt*0.085;
  const sc=bgPhase>=5?8.5:5.5;
  tessLines.forEach(({line,i,j},idx)=>{
    const pa=proj4(rot4(T4V[i],axw,ayw),sc);
    const pb=proj4(rot4(T4V[j],axw,ayw),sc);
    const arr=line.geometry.attributes.position.array;
    arr[0]=pa.x;arr[1]=pa.y;arr[2]=pa.z;arr[3]=pb.x;arr[4]=pb.y;arr[5]=pb.z;
    line.geometry.attributes.position.needsUpdate=true;
    // Rainbow in world tier 5+
    if(worldTier>=5){
      const h=((idx/32)+globalTick*0.07)%1;
      line.material.color.setHSL(h,1.0,0.65);
      line.material.opacity=0.45+Math.sin(globalTick*2.2+idx*0.38)*0.2;
    }
  });
}

// ══════════════════════════════════════════════════════════════
//  WORLD SYSTEM  (progressive environment L1–L1000, 11 tiers)
//  T0-T5 (L1–100): void → rainbow chaos (compressed)
//  T6-T10 (L101–1000): civilisation expansion
// ══════════════════════════════════════════════════════════════
const World = (function(){
  // Tier boundaries: lv < TIERS[t] → tier t
  const TIERS=[11,26,51,71,91,101,251,451,651,851,1001];
  function getTier(lv){for(let t=0;t<TIERS.length;t++)if(lv<TIERS[t])return t;return 10;}

  let curTier=-1;
  let sphereMesh=null;
  const ships=[], bokehSprites=[], chevrons=[];
  const planets=[], fleets=[], dragons=[];
  let partPoints=null;
  const parallaxTarget=new THREE.Vector3();

  function noise(x,y,z,oct){
    let v=0,a=1,f=1,s=0;
    for(let i=0;i<oct;i++){v+=Math.sin(x*f+1.1)*Math.sin(y*f+2.3)*Math.sin(z*f+0.7)*a;s+=a;a*=0.5;f*=2.1;}
    return v/s;
  }

  function makeBokehTex(hue){
    const c=document.createElement('canvas');c.width=c.height=64;
    const ctx=c.getContext('2d');
    const g=ctx.createRadialGradient(32,32,0,32,32,32);
    g.addColorStop(0,`hsla(${hue},75%,75%,0.9)`);
    g.addColorStop(0.5,`hsla(${hue},60%,52%,0.28)`);
    g.addColorStop(1,`hsla(${hue},50%,40%,0)`);
    ctx.fillStyle=g;ctx.fillRect(0,0,64,64);
    return new THREE.CanvasTexture(c);
  }

  // ── Distant sphere (inverted planet) ─────────────────────
  function buildSphere(tier,lv){
    if(sphereMesh){worldGrp.remove(sphereMesh);sphereMesh=null;}
    if(tier<1) return;
    const segs=tier<=1?14:tier<=3?20:tier<=5?26:34;
    const geo=new THREE.SphereGeometry(72,segs,Math.ceil(segs/2));
    if(tier>=2){
      const prog=Math.min((lv-26)/64,1);
      const disp=prog*11, oct=2+Math.floor(prog*4);
      const pos=geo.attributes.position;
      for(let i=0;i<pos.count;i++){
        const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);
        const R=Math.sqrt(x*x+y*y+z*z);
        const n=noise(x/R,y/R,z/R,oct)*disp;
        pos.setXYZ(i,x+x/R*n,y+y/R*n,z+z/R*n);
      }
      pos.needsUpdate=true;geo.computeVertexNormals();
    }
    const colors=[0,0x0d1e2e,0x0a1c30,0x0e1a34,0x141040,0x1a0830,0x100840,0x0c0850,0x0a0860,0x060868,0x040870];
    const alphas=[0,0.05,0.08,0.11,0.15,0.20,0.22,0.24,0.26,0.28,0.30];
    sphereMesh=new THREE.LineSegments(new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({color:colors[tier]||0x0d1e2e,transparent:true,opacity:alphas[tier]||0.05,depthWrite:false})
    );
    worldGrp.add(sphereMesh);
  }

  // ── Ships ─────────────────────────────────────────────────
  const SHIP_COUNTS=[0,0,6,12,20,30,32,36,44,55,70];
  function syncShips(tier){
    const target=SHIP_COUNTS[tier]||0;
    const rg=mkRng(tier*1234+7);
    while(ships.length<target){
      const s=tier>=8?1.8:tier>=5?1.1:0.8;
      const col=new THREE.Color().setHSL(ships.length/Math.max(target,1),tier>=4?0.9:0,0.55);
      const pts=[new THREE.Vector3(-s,s*0.42,0),new THREE.Vector3(s*0.65,0,0),new THREE.Vector3(-s,-s*0.42,0)];
      const ship=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({color:col,transparent:true,opacity:0.58,depthWrite:false}));
      const R=rg.f(60,74),th=rg.f(0,Math.PI),ph=rg.f(0,Math.PI*2);
      ship.position.set(R*Math.sin(th)*Math.cos(ph),R*Math.sin(th)*Math.sin(ph),R*Math.cos(th));
      ship.userData={axis:new THREE.Vector3(rg.f(-1,1),rg.f(-1,1),rg.f(-1,1)).normalize(),
        speed:rg.f(0.012,0.055)*(tier>=4?2.2:1),theta:rg.f(0,Math.PI*2),r:R};
      worldGrp.add(ship);ships.push(ship);
    }
    ships.forEach((s,i)=>{s.visible=i<target;});
  }

  // ── Particles ─────────────────────────────────────────────
  function buildParticles(tier){
    if(partPoints){worldGrp.remove(partPoints);partPoints=null;}
    if(tier<3) return;
    const count=tier<=3?400:tier<=5?900:tier<=7?1400:2000;
    const rg=mkRng(tier*9999+3),pos=[];
    for(let i=0;i<count;i++){
      const r=rg.f(45,71),th=rg.f(0,Math.PI),ph=rg.f(0,Math.PI*2);
      pos.push(r*Math.sin(th)*Math.cos(ph),r*Math.sin(th)*Math.sin(ph),r*Math.cos(th));
    }
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
    partPoints=new THREE.Points(geo,new THREE.PointsMaterial({
      color:tier>=5?0xff88ee:tier>=4?0x4499ff:0x224466,
      size:tier>=8?0.55:tier>=5?0.40:tier>=4?0.28:0.18,
      transparent:true,opacity:0.38,sizeAttenuation:true,depthWrite:false
    }));
    worldGrp.add(partPoints);
  }

  // ── Bokeh ─────────────────────────────────────────────────
  function buildBokeh(tier){
    bokehSprites.forEach(s=>worldGrp.remove(s));bokehSprites.length=0;
    if(tier<3) return;
    const count=tier<=3?5:tier<=5?10:tier<=7?16:24;
    const rg=mkRng(tier*7777+2);
    for(let i=0;i<count;i++){
      const hue=tier>=5?Math.floor(rg.f(0,360)):tier>=4?Math.floor(rg.f(180,260)):210;
      const sp=new THREE.Sprite(new THREE.SpriteMaterial({
        map:makeBokehTex(hue),transparent:true,opacity:0.03+tier*0.018,
        blending:THREE.AdditiveBlending,depthWrite:false
      }));
      const r2=rg.f(38,66),th=rg.f(0,Math.PI),ph=rg.f(0,Math.PI*2);
      sp.position.set(r2*Math.sin(th)*Math.cos(ph),r2*Math.sin(th)*Math.sin(ph),r2*Math.cos(th));
      const sz=rg.f(9,24)*(tier>=8?3.8:tier>=5?2.5:1);
      sp.scale.set(sz,sz,1);
      worldGrp.add(sp);bokehSprites.push(sp);
    }
  }

  // ── Planets + orbital stations ────────────────────────────
  function buildPlanets(tier,lv){
    planets.forEach(p=>worldGrp.remove(p));planets.length=0;
    if(tier<6) return;
    const rg=mkRng(lv*7777+11);
    const count=Math.min(3+Math.floor((tier-6)*2.5),13);
    for(let i=0;i<count;i++){
      const radius=rg.f(2.2,5.8);
      const hue=tier>=8?rg.f(0,1):0.58;
      const sat=tier>=8?0.85:0.15;
      const grp=new THREE.Group();
      // Planet sphere
      const planet=new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.SphereGeometry(radius,8,6)),
        new THREE.LineBasicMaterial({color:new THREE.Color().setHSL(hue,sat,0.42),transparent:true,opacity:0.30,depthWrite:false})
      );
      grp.add(planet);
      // Station ring T7+
      if(tier>=7){
        const st=new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.TorusGeometry(radius*1.85,0.17,4,10)),
          new THREE.LineBasicMaterial({color:new THREE.Color().setHSL((hue+0.33)%1,tier>=8?0.9:0.3,0.58),transparent:true,opacity:0.36,depthWrite:false})
        );
        st.userData.spin=rg.f(0.25,1.1);grp.add(st);
      }
      // Second ring T9+
      if(tier>=9){
        const s2=new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.TorusGeometry(radius*2.5,0.11,4,8)),
          new THREE.LineBasicMaterial({color:new THREE.Color().setHSL((hue+0.6)%1,0.9,0.6),transparent:true,opacity:0.28,depthWrite:false})
        );
        s2.rotation.x=Math.PI/2.2;s2.userData.spin=rg.f(-0.8,-0.2);grp.add(s2);
      }
      grp.userData={
        orbitR:rg.f(18,52),phase:rg.f(0,Math.PI*2),speed:rg.f(0.006,0.022),
        axis:new THREE.Vector3(rg.f(-0.4,0.4),1,rg.f(-0.4,0.4)).normalize(),
        planet,hue
      };
      worldGrp.add(grp);planets.push(grp);
    }
  }

  // ── Fleets (T8+): formation clusters on wide orbits ───────
  function buildFleets(tier){
    fleets.forEach(f=>worldGrp.remove(f));fleets.length=0;
    if(tier<8) return;
    const rg=mkRng(tier*3333+44);
    const fcount=tier>=10?9:tier>=9?6:3;
    for(let fi=0;fi<fcount;fi++){
      const grp=new THREE.Group();
      const hue=rg.f(0,1);
      const s=0.32;
      for(let si=0;si<7;si++){
        const ship=new THREE.Line(new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-s,s*0.4,0),new THREE.Vector3(s*0.6,0,0),new THREE.Vector3(-s,-s*0.4,0)
        ]),new THREE.LineBasicMaterial({color:new THREE.Color().setHSL(hue,0.9,0.6),transparent:true,opacity:0.72,depthWrite:false}));
        ship.position.set(rg.f(-2.2,2.2),rg.f(-0.8,0.8),rg.f(-2.2,2.2));
        grp.add(ship);
      }
      grp.userData={phase:rg.f(0,Math.PI*2),speed:rg.f(0.008,0.032),r:rg.f(30,66),
        axis:new THREE.Vector3(rg.f(-0.5,0.5),1,rg.f(-0.5,0.5)).normalize(),hue};
      worldGrp.add(grp);fleets.push(grp);
    }
  }

  // ── Dragons (T10): animated flapping-wing shapes ──────────
  function buildDragons(){
    dragons.forEach(d=>worldGrp.remove(d));dragons.length=0;
    for(let i=0;i<20;i++){
      const hue=i/20;
      const mat=()=>new THREE.LineBasicMaterial({color:new THREE.Color().setHSL(hue,1,0.72),transparent:true,opacity:0.88,depthWrite:false});
      const grp=new THREE.Group();
      const bs=1.0+Math.random()*0.9;
      // Fuselage chevron
      grp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-bs,bs*0.38,0),new THREE.Vector3(bs*0.7,0,0),new THREE.Vector3(-bs,-bs*0.38,0)
      ]),mat()));
      // Left wing — updatable
      const la=new Float32Array([0,bs*0.32,0, -bs*0.28,bs*1.55,0.36, -bs*0.65,bs*0.85,0.25]);
      const lGeo=new THREE.BufferGeometry();lGeo.setAttribute('position',new THREE.BufferAttribute(la,3));
      grp.add(new THREE.Line(lGeo,mat()));
      // Right wing — updatable
      const ra=new Float32Array([0,-bs*0.32,0, -bs*0.28,-bs*1.55,0.36, -bs*0.65,-bs*0.85,0.25]);
      const rGeo=new THREE.BufferGeometry();rGeo.setAttribute('position',new THREE.BufferAttribute(ra,3));
      grp.add(new THREE.Line(rGeo,mat()));
      const R=10+Math.random()*40;
      grp.userData={bs,lGeo,rGeo,hue,
        phase:Math.random()*Math.PI*2,speed:0.04+Math.random()*0.14,
        axis:new THREE.Vector3(Math.random()-0.5,0.4+Math.random()*0.6,Math.random()-0.5).normalize(),
        flapSpeed:2.5+Math.random()*5,flapAmp:bs*(0.7+Math.random()*0.8),r:R
      };
      grp.scale.setScalar(0.5+Math.random()*1.7);
      worldGrp.add(grp);dragons.push(grp);
    }
  }

  // ── Chevron sparks (born from tesseract) ──────────────────
  function spawnChevron(){
    if(chevrons.length>=60) return;
    const idx=Math.floor(Math.random()*16);
    const origin=proj4(rot4(T4V[idx],axw,ayw),8.5);
    const hue=Math.random(),s=0.2+Math.random()*0.38;
    const cv=new THREE.Line(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-s,s*0.4,0),new THREE.Vector3(s*0.5,0,0),new THREE.Vector3(-s,-s*0.4,0)
    ]),new THREE.LineBasicMaterial({color:new THREE.Color().setHSL(hue,1,0.7),transparent:true,opacity:0.9,depthWrite:false}));
    cv.position.copy(origin);
    const vel=origin.clone().normalize().multiplyScalar(4+Math.random()*8);
    vel.x+=(Math.random()-0.5)*3;vel.y+=(Math.random()-0.5)*3;vel.z+=(Math.random()-0.5)*3;
    cv.lookAt(new THREE.Vector3());
    const life=1.5+Math.random()*4;
    cv.userData={vel,life,maxLife:life};
    worldGrp.add(cv);chevrons.push(cv);
  }

  // ── Tier rebuild ──────────────────────────────────────────
  function setLevel(lv){
    const tier=getTier(lv);
    if(tier!==curTier){
      buildSphere(tier,lv);
      syncShips(tier);
      buildParticles(tier);
      buildBokeh(tier);
      buildPlanets(tier,lv);
      buildFleets(tier);
      if(tier>=10&&!dragons.length) buildDragons();
      if(tier<10){dragons.forEach(d=>worldGrp.remove(d));dragons.length=0;}
      curTier=tier;
    }
  }

  // ── Per-frame tick ────────────────────────────────────────
  let wTick=0;
  function tick(dt){
    wTick+=dt;
    const tier=curTier;

    // Parallax: world drifts opposite camera direction
    if(sphereMesh){
      const dir=new THREE.Vector3();camera.getWorldDirection(dir);
      parallaxTarget.set(-dir.x*5,-dir.y*3,-dir.z*5);
      worldGrp.position.lerp(parallaxTarget,0.025);
    }

    // Ships orbit + hue-cycle from T4
    ships.forEach((ship,i)=>{
      if(!ship.visible) return;
      const d=ship.userData;d.theta+=d.speed*dt;
      ship.position.copy(new THREE.Vector3(d.r,0,0).applyQuaternion(new THREE.Quaternion().setFromAxisAngle(d.axis,d.theta)));
      ship.lookAt(worldGrp.position);
      if(tier>=4) ship.material.color.setHSL(((i/70)+wTick*0.045)%1,1,0.65);
    });

    // Particles drift + rainbow T5
    if(partPoints){
      partPoints.rotation.y+=dt*0.016;partPoints.rotation.x+=dt*0.006;
      if(tier>=5) partPoints.material.color.setHSL((wTick*0.035)%1,0.9,0.55);
    }

    // Bokeh pulse + rainbow T5
    bokehSprites.forEach((sp,i)=>{
      sp.material.opacity=Math.max(0,(0.03+tier*0.018)*(0.65+Math.sin(wTick*0.55+i*1.4)*0.35));
      if(tier>=5&&sp.material.color) sp.material.color.setHSL(((i/24)+wTick*0.038)%1,0.9,0.7);
    });

    // Planet orbits + station spins + rainbow T8
    planets.forEach((pGrp,i)=>{
      const d=pGrp.userData;d.phase+=d.speed*dt;
      pGrp.position.copy(new THREE.Vector3(d.orbitR,0,0).applyQuaternion(new THREE.Quaternion().setFromAxisAngle(d.axis,d.phase)));
      d.planet.rotation.y+=dt*0.28;
      pGrp.children.forEach((child,ci)=>{
        if(ci>0&&child.userData.spin) child.rotation.y+=dt*child.userData.spin;
        if(tier>=8&&child.material) child.material.color.setHSL(((d.hue+wTick*0.055+ci*0.25))%1,0.88,0.55);
      });
      if(tier>=8) d.planet.material.color.setHSL(((d.hue+wTick*0.04+i*0.18))%1,0.85,0.42);
    });

    // Fleet orbits + hue cycle
    fleets.forEach((fGrp,fi)=>{
      const d=fGrp.userData;d.phase+=d.speed*dt;
      fGrp.position.copy(new THREE.Vector3(d.r,0,0).applyQuaternion(new THREE.Quaternion().setFromAxisAngle(d.axis,d.phase)));
      fGrp.lookAt(worldGrp.position);
      fGrp.children.forEach(ship=>{if(ship.material) ship.material.color.setHSL(((d.hue+wTick*0.06))%1,1,0.65);});
    });

    // Chevron sparks T5+
    if(tier>=5){
      const rate=tier>=10?12:tier>=8?8:tier>=6?5:3;
      if(Math.random()<dt*rate) spawnChevron();
      for(let i=chevrons.length-1;i>=0;i--){
        const c=chevrons[i],d=c.userData;d.life-=dt;
        c.position.addScaledVector(d.vel,dt);
        c.material.opacity=Math.max(0,d.life/d.maxLife)*0.9;
        c.material.color.setHSL(((d.maxLife-d.life)*0.14+wTick*0.09)%1,1,0.7);
        if(d.life<=0){worldGrp.remove(c);chevrons.splice(i,1);}
      }
    }

    // Dragon orbits + flap + rainbow (T10 only)
    dragons.forEach((grp,i)=>{
      const d=grp.userData;d.phase+=d.speed*dt;
      grp.position.copy(new THREE.Vector3(d.r,0,0).applyQuaternion(new THREE.Quaternion().setFromAxisAngle(d.axis,d.phase)));
      grp.lookAt(worldGrp.position);
      const flap=Math.sin(wTick*d.flapSpeed)*d.flapAmp;
      const la=d.lGeo.attributes.position.array;
      la[4]=d.bs*1.55+flap;la[7]=d.bs*0.85+flap*0.5;
      d.lGeo.attributes.position.needsUpdate=true;
      const ra=d.rGeo.attributes.position.array;
      ra[4]=-(d.bs*1.55+flap);ra[7]=-(d.bs*0.85+flap*0.5);
      d.rGeo.attributes.position.needsUpdate=true;
      const h=((d.hue+wTick*0.07+i*0.055))%1;
      grp.children.forEach(child=>{if(child.material)child.material.color.setHSL(h,1,0.72);});
    });
  }

  return { setLevel, tick, getTier };
})();

// ══════════════════════════════════════════════════════════════
//  LEVEL LOGIC
// ══════════════════════════════════════════════════════════════
function getPhase(lv){
  if(lv<=5)  return 1; if(lv<=20) return 2;
  if(lv<=80) return 3; if(lv<=300)return 4;
  return 5;
}
const PHASE_NAMES=['','DIMENSION I · THE POINT','DIMENSION II · THE LINE','DIMENSION III · SPACE','DIMENSION IV · HYPERSPACE','DIMENSION V · THE TESSERACT'];

function getDotCount(lv){
  if(lv<=100) return lv;
  return Math.min(MAX_DOTS, 100+Math.floor((lv-100)/5));
}

const FIXED={
  1:[[0,0,0]],
  2:[[-3.2,0,0],[3.2,0,0]],
  3:[[0,3.5,0],[-3,-1.75,0],[3,-1.75,0]],
  4:[[0,3.5,0],[-3,-1.75,0],[3,-1.75,0],[0,0.5,3.2]],
  5:[[0,3.5,0],[-3,-1.75,0],[3,-1.75,0],[0,0.5,3.2],[0,0.5,-3.2]],
};

function genLevel100(){
  const d=[];
  for(let i=0;i<60;i++){const t=(i/60)*Math.PI*2;d.push(new THREE.Vector3((2+Math.cos(3*t))*Math.cos(2*t)*4.2,(2+Math.cos(3*t))*Math.sin(2*t)*4.2,Math.sin(3*t)*4.2));}
  for(let i=0;i<16;i++) d.push(proj4(rot4(T4V[i],Math.PI/4,Math.PI/5.5),4.5));
  for(let i=0;i<24;i++){const t=(i/24)*Math.PI*2;d.push(new THREE.Vector3(Math.cos(t)*10.5,Math.sin(t*2)*2.2,Math.sin(t)*10.5));}
  return d;
}

function genDots(lv){
  if(FIXED[lv]) return FIXED[lv].map(v=>new THREE.Vector3(...v));
  if(lv===100) return genLevel100();
  if(lv>100)   return genSymmetricDots(lv);
  // Levels 6–99: organic random growth
  const rg=mkRng(lv*8191+54321);
  const ph=getPhase(lv), n=getDotCount(lv);
  const spread=3.5+Math.log(lv)*2.2;
  const dots=[];
  for(let idx=0;idx<n;idx++){
    let x,y,z;
    if(ph===2){
      const th=rg.f(0,Math.PI),phi=rg.f(0,Math.PI*2),r=spread*rg.f(0.5,1);
      x=r*Math.sin(th)*Math.cos(phi);y=r*Math.sin(th)*Math.sin(phi);z=r*Math.cos(th);
    } else if(ph===3){
      if(idx%3===0){const g=Math.max(2,Math.floor(spread/2));x=rg.i(-g,g)*2.2;y=rg.i(-g,g)*2.2;z=rg.i(-g,g)*2.2;}
      else{const th=rg.f(0,Math.PI),phi=rg.f(0,Math.PI*2),r=spread*rg.f(0.3,1);x=r*Math.sin(th)*Math.cos(phi);y=r*Math.sin(th)*Math.sin(phi);z=r*Math.cos(th);}
    } else {
      const tv=T4V[idx%16],wa=lv*0.042;
      const pr=proj4(rot4(tv,wa,wa*0.61),spread*0.36);
      x=pr.x+rg.f(-1.3,1.3);y=pr.y+rg.f(-1.3,1.3);z=pr.z+rg.f(-1.3,1.3);
    }
    dots.push(new THREE.Vector3(x,y,z));
  }
  return dots;
}

// ══════════════════════════════════════════════════════════════
//  MANDALA GENERATORS  (L101–1000)
// Principle: generate one radial "arm" then apply N-fold rotation.
// Arm is in local coords: x = outward, y = height, z = lateral.
// N-fold axis is Y (horizontal mandala) at L101, tilts into 3D by L1000.
// ══════════════════════════════════════════════════════════════

// Symmetry table — hand-picked for visual beauty at each level band
const SYM_SEQ = [5,6,5,7,6,8,10,5,12,6,7,8,5,10,6,9,8,5,7,12,6,10,8,7,5,6,9,10,5,8];

// Each family generates one arm: k points along a distinct 3D curve
function makeArm(fam, k, sc, te, lv) {
  const pts = [];
  for(let i=0; i<k; i++){
    const s = i / Math.max(k-1, 1); // 0..1
    let x, y, z;
    switch(fam){

      case 0: { // Outward sine wave — clean, simple, beautiful at low t
        x = sc * (0.08 + s * 0.92);
        y = Math.sin(s * Math.PI * (2 + lv%6)) * sc * 0.42 * te;
        z = Math.cos(s * Math.PI * (3 + lv%4)) * sc * 0.12 * te * s;
        break; }

      case 1: { // Petal — a loop that peaks and returns, like a flower petal
        const theta = s * Math.PI;
        const r = Math.sin(theta) * sc * 0.88;
        x = r * Math.cos(theta * 0.22) + sc * 0.06;
        y = Math.sin(s * Math.PI * 3) * sc * 0.38 * te;
        z = r * Math.sin(theta * 0.22) * 0.18;
        break; }

      case 2: { // Helix wound around the radial axis — coiled arm
        x = sc * (0.1 + s * 0.9);
        const ha = s * Math.PI * (3 + lv%5);
        const hr = sc * 0.24 * te * (1 - s * 0.35);
        y = Math.cos(ha) * hr;
        z = Math.sin(ha) * hr;
        break; }

      case 3: { // Crystal steps — quantised radial jumps with sine lift
        const step = Math.floor(s * 7) / 7;
        const fine = (s - step) * 7;
        x = sc * (0.12 + step * 0.82 + fine * 0.1);
        y = Math.sin(step * Math.PI * 2 + fine * 0.5) * sc * 0.36 * te;
        z = Math.cos(fine * Math.PI * 4) * sc * 0.07 * te;
        break; }

      case 4: { // Logarithmic arc — explodes outward, pulled back by sine
        x = sc * (0.08 + (Math.exp(s * 1.5) - 1) / (Math.exp(1.5) - 1) * 0.92);
        y = Math.sin(s * Math.PI * (1 + te * 5)) * sc * 0.48 * te;
        z = Math.cos(s * Math.PI * 2) * sc * 0.09 * te;
        break; }

      case 5: { // Elliptic lift — sweeps up and over like a calligraphy stroke
        const a = s * Math.PI * 0.82;
        x = Math.cos(a) * sc * 0.82 + sc * 0.12;
        y = Math.sin(a * 1.8) * sc * 0.44 * te;
        z = Math.sin(a) * sc * 0.3 * te;
        break; }

      case 6: { // Torus slice — arm wraps around a minor circle as it extends
        const u = s * Math.PI * 0.20;
        const v = s * Math.PI * 2 * (2 + lv%3);
        const Rt = sc * 0.58, rt = sc * (0.11 + te * 0.24);
        x = (Rt + rt * Math.cos(v)) * Math.cos(u);
        y = rt * Math.sin(v);
        z = (Rt + rt * Math.cos(v)) * Math.sin(u) * 0.22;
        break; }

      case 7: { // Golden spiral segment — Fibonacci-flavoured unfurling
        const ga = s * Math.PI * 2.618;
        const gr = sc * 0.9 * Math.pow(s + 0.04, 0.62);
        x = Math.cos(ga * 0.12) * gr;
        y = Math.sin(ga * 0.52) * sc * 0.40 * te;
        z = Math.sin(ga * 0.12) * gr * 0.16;
        break; }

      default: { // Ripple wand — concentric bumps along radial ray
        x = sc * (0.1 + s);
        y = Math.sin(s * Math.PI * (4 + lv%7)) * sc * 0.38 * te * Math.sin(s * Math.PI);
        z = Math.cos(s * Math.PI * (5 + lv%5)) * sc * 0.14 * te * s;
        break; }
    }
    pts.push(new THREE.Vector3(x, y, z));
  }
  return pts;
}

function genSymmetricDots(lv){
  const n    = getDotCount(lv);
  const t    = Math.min((lv - 101) / 899, 1);     // 0..1 across mandala range
  const te   = 0.18 + t * 0.82;                    // min height even at L101
  const sc   = 5.5 + t * 13;                       // scale grows with level

  // Pick fold symmetry from hand-curated sequence
  const sym  = SYM_SEQ[(lv + Math.floor(lv/7)) % SYM_SEQ.length];
  const k    = Math.ceil(n / sym);                  // arm length

  // Pick arm family from stable level hash
  const fam  = (lv * 17 + Math.floor(lv/13) * 11) % 8;

  const arm  = makeArm(fam, k, sc, te, lv);

  // Rotation axis: pure Y at t=0 (flat mandala), tilts into 3D with progress
  const ax = Math.sin(t * 0.75) * Math.cos(lv * 0.241) * 0.65;
  const az = Math.sin(t * 0.75) * Math.sin(lv * 0.241) * 0.65;
  const axis = new THREE.Vector3(ax, 1, az).normalize();

  const result = [];
  for(let s=0; s<sym; s++){
    const ang = (s / sym) * Math.PI * 2;
    const q   = new THREE.Quaternion().setFromAxisAngle(axis, ang);
    arm.forEach(p => result.push(p.clone().applyQuaternion(q)));
  }

  // Pad to exactly n if sym doesn't divide evenly
  while(result.length < n) result.push(result[result.length % arm.length].clone());
  return result.slice(0, n);
}

// ══════════════════════════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════════════════════════
let CUR_LV=LVL_MIN, dots=[], dotMeshes=[], glowMeshes=[], hitMeshes=[], next=0;
const GEO_DOT=new THREE.SphereGeometry(0.22,10,10);
const GEO_GLOW=new THREE.SphereGeometry(0.52,8,8);
const GEO_HIT=new THREE.SphereGeometry(0.65,6,6);
const MAT_HIT=new THREE.MeshBasicMaterial({visible:false});

function loadLevel(lv){
  while(lvGrp.children.length) lvGrp.remove(lvGrp.children[0]);
  dotMeshes=[];glowMeshes=[];hitMeshes=[];next=0;
  dots=genDots(lv);
  buildBg(getPhase(lv));
  World.setLevel(lv);
  dots.forEach((pos,i)=>{
    const isNext=i===0;
    const dot=new THREE.Mesh(GEO_DOT,new THREE.MeshBasicMaterial({color:isNext?0x00ffee:0xd0e8ff}));
    dot.position.copy(pos);dot.userData.idx=i;
    const glow=new THREE.Mesh(GEO_GLOW,new THREE.MeshBasicMaterial({color:isNext?0x00aaff:0x112233,transparent:true,opacity:isNext?0.22:0.07,depthWrite:false}));
    glow.position.copy(pos);
    const hit=new THREE.Mesh(GEO_HIT,MAT_HIT);hit.position.copy(pos);hit.userData.idx=i;
    lvGrp.add(glow,dot,hit);
    dotMeshes.push(dot);glowMeshes.push(glow);hitMeshes.push(hit);
  });
  const maxD=Math.max(1,...dots.map(d=>d.length()));
  orb.r=Math.max(12,maxD*2.6);orb.phi=1.3;orb.theta=0.4;focal.set(0,0,0);camSync();
  setUI(lv,0,dots.length);
  document.getElementById('phase-label').textContent=PHASE_NAMES[getPhase(lv)];
}

// ══════════════════════════════════════════════════════════════
//  UI
// ══════════════════════════════════════════════════════════════
const $badge=document.getElementById('lv-badge');
const $msg=document.getElementById('lv-msg');
const $prog=document.getElementById('lv-prog');
const $flash=document.getElementById('flash');

const SPECIAL_MSG={
  1:'THE POINT EXISTS',2:'THE LINE FORMS',3:'PLANES EMERGE',4:'SPACE STIRS',5:'GEOMETRY WAKES',
  10:'DEPTH UNFOLDS',20:'FIND THE PATH THROUGH SPACE',50:'THE FOURTH DIMENSION STIRS',
  80:'THE TESSERACT BREATHES',100:'EVE TAKES SHAPE',200:'THE WORLD FORMS BEHIND YOU',
  300:'SHIPS IN THE DARK',500:'THE PLANET STIRS',800:'THE RAINBOW AWAKENS',1000:'THE MIND OF EVE'
};
const PHASE_MSG=['','THE POINT EXISTS','SPACE OPENS','NAVIGATE THE VOID','DIMENSIONS FOLD','THE TESSERACT BREATHES'];

function setUI(lv,done,total){
  $badge.innerHTML='MARDUK\'S TESSERACT &nbsp;&middot;&nbsp; LEVEL '+lv;
  if(done===0) $msg.textContent=SPECIAL_MSG[lv]||PHASE_MSG[getPhase(lv)];
  else if(done===total) $msg.textContent='SEQUENCE COMPLETE';
  else $msg.textContent=(total-done)+' NODE'+(total-done!==1?'S':'')+' REMAINING';
  $prog.textContent=total<=24?'\u25A0'.repeat(done)+'\u25A1'.repeat(total-done):done+' / '+total;
}
function flashScreen(color,alpha){
  $flash.style.background=color;$flash.style.opacity=alpha;
  setTimeout(()=>{$flash.style.opacity=0;},70);
}

// ══════════════════════════════════════════════════════════════
//  GLOW LINES
// ══════════════════════════════════════════════════════════════
function addConnectLine(a,b){
  lvGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a.clone(),b.clone()]),new THREE.LineBasicMaterial({color:0x00eeff,transparent:true,opacity:0.90})));
  lvGrp.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a.clone(),b.clone()]),new THREE.LineBasicMaterial({color:0x0044cc,transparent:true,opacity:0.22})));
}

// ══════════════════════════════════════════════════════════════
//  RAYCASTING + INPUT
// ══════════════════════════════════════════════════════════════
const RAY=new THREE.Raycaster(), MP=new THREE.Vector2();
let lastHover=-1;
function castAndHandle(cx,cy){
  getAC();
  MP.set((cx/W())*2-1,-(cy/H())*2+1);
  RAY.setFromCamera(MP,camera);
  const hits=RAY.intersectObjects(hitMeshes);
  if(hits.length) onDotClick(hits[0].object.userData.idx);
}
canvas.addEventListener('mousedown',e=>{clickStart={x:e.clientX,y:e.clientY};});
canvas.addEventListener('click',e=>{
  if(Math.hypot(e.clientX-clickStart.x,e.clientY-clickStart.y)>8) return;
  if(designerMode) return;
  castAndHandle(e.clientX,e.clientY);
});
canvas.addEventListener('touchend',e=>{
  if(designerMode) return;
  const t=e.changedTouches[0]; castAndHandle(t.clientX,t.clientY);
},{passive:true});
canvas.addEventListener('mousemove',e=>{
  if(dragging||designerMode) return;
  MP.set((e.clientX/W())*2-1,-(e.clientY/H())*2+1);
  RAY.setFromCamera(MP,camera);
  const hits=RAY.intersectObjects(hitMeshes);
  const idx=hits.length?hits[0].object.userData.idx:-1;
  if(idx!==lastHover){lastHover=idx;canvas.style.cursor=idx>=0?'crosshair':'default';if(idx===next&&idx>=0)sndHover(idx);}
});

// ══════════════════════════════════════════════════════════════
//  GAME LOGIC
// ══════════════════════════════════════════════════════════════
function onDotClick(idx){
  if(idx!==next){
    sndWrong();flashScreen('rgba(255,30,30,1)',0.07);
    const m=dotMeshes[idx],orig=m.position.clone();let t=0;
    const iv=setInterval(()=>{m.position.x=orig.x+(Math.random()-0.5)*0.32;if(++t>=9){clearInterval(iv);m.position.copy(orig);}},28);
    return;
  }
  const pos=dots[idx];
  if(idx>0) addConnectLine(dots[idx-1],pos);
  dotMeshes[idx].material.color.setHex(0x004455);
  glowMeshes[idx].material.color.setHex(0x001122);
  glowMeshes[idx].material.opacity=0.04;
  dotMeshes[idx].scale.setScalar(1);
  next++;
  if(next<dots.length){
    dotMeshes[next].material.color.setHex(0x00ffee);
    glowMeshes[next].material.color.setHex(0x00aaff);
    glowMeshes[next].material.opacity=0.22;
  }
  sndConnect(idx);flashScreen('rgba(0,210,255,1)',0.05);setUI(CUR_LV,next,dots.length);
  if(next===dots.length){sndDone();flashScreen('rgba(0,130,255,1)',0.13);setTimeout(advanceLevel,1700);}
}

function advanceLevel(){
  if(CUR_LV>=LVL_MAX){showVictory();return;}
  const el=document.getElementById('transition');
  el.style.opacity=1;
  setTimeout(()=>{CUR_LV++;loadLevel(CUR_LV);el.style.opacity=0;},300);
}

function showVictory(){
  document.getElementById('victory').classList.add('show');sndDone();
  if(REDIRECT) setTimeout(()=>{location.href=REDIRECT;},3200);
}

// ══════════════════════════════════════════════════════════════
//  DESIGNER (MARDUK) MODE
// ══════════════════════════════════════════════════════════════
let designerMode=false;
const DES_PASS='evilamaicram';
let keyBuf='';

window.addEventListener('keypress',e=>{
  keyBuf=(keyBuf+e.key.toLowerCase()).slice(-DES_PASS.length);
  if(keyBuf===DES_PASS) activateDesignerMode();
});

function activateDesignerMode(){
  if(designerMode) return;
  designerMode=true;
  document.getElementById('designer-bar').classList.add('visible');
  document.getElementById('ui').style.opacity='0.3';
  document.getElementById('hint').style.display='none';
  solveCurrentLevel();
}

function deactivateDesignerMode(){
  designerMode=false;
  document.getElementById('designer-bar').classList.remove('visible');
  document.getElementById('ui').style.opacity='1';
  document.getElementById('hint').style.display='';
  loadLevel(CUR_LV); // reload in play mode
}

function solveCurrentLevel(){
  while(lvGrp.children.length) lvGrp.remove(lvGrp.children[0]);
  dotMeshes=[];glowMeshes=[];hitMeshes=[]; // clear before repopulating
  dots.forEach((pos,i)=>{
    const dot=new THREE.Mesh(GEO_DOT,new THREE.MeshBasicMaterial({color:0x004455}));
    dot.position.copy(pos);dot.userData.idx=i;
    const glow=new THREE.Mesh(GEO_GLOW,new THREE.MeshBasicMaterial({color:0x001a22,transparent:true,opacity:0.06,depthWrite:false}));
    glow.position.copy(pos);
    const hit=new THREE.Mesh(GEO_HIT,MAT_HIT);hit.position.copy(pos);hit.userData.idx=i;
    lvGrp.add(glow,dot,hit);
    dotMeshes.push(dot);glowMeshes.push(glow);hitMeshes.push(hit);
  });
  // Draw all connections
  for(let i=1;i<dots.length;i++) addConnectLine(dots[i-1],dots[i]);
  next=dots.length;
  document.getElementById('des-lv').textContent='LEVEL '+CUR_LV;
  setUI(CUR_LV,dots.length,dots.length);
}

function desLoadLevel(lv){
  CUR_LV=Math.max(LVL_MIN,Math.min(LVL_MAX,lv));
  while(lvGrp.children.length) lvGrp.remove(lvGrp.children[0]);
  dotMeshes=[];glowMeshes=[];hitMeshes=[];
  dots=genDots(CUR_LV);
  buildBg(getPhase(CUR_LV));
  World.setLevel(CUR_LV);
  solveCurrentLevel();
  const maxD=Math.max(1,...dots.map(d=>d.length()));
  orb.r=Math.max(12,maxD*2.6);orb.phi=1.3;orb.theta=0.4;focal.set(0,0,0);camSync();
  document.getElementById('phase-label').textContent=PHASE_NAMES[getPhase(CUR_LV)];
}

document.getElementById('btn-prev').addEventListener('click',()=>{ if(designerMode) desLoadLevel(CUR_LV-1); });
document.getElementById('btn-next').addEventListener('click',()=>{ if(designerMode) desLoadLevel(CUR_LV+1); });
document.getElementById('btn-exit-des').addEventListener('click',deactivateDesignerMode);

// ══════════════════════════════════════════════════════════════
//  ANIMATION LOOP
// ══════════════════════════════════════════════════════════════
let tick=0, lastT=performance.now();

function animate(ts){
  requestAnimationFrame(animate);
  const dt=Math.min((ts-lastT)/1000,0.05); lastT=ts; tick+=dt;
  const wTier=World.getTier(CUR_LV);
  tickTesseract(dt,tick,wTier);
  World.tick(dt);
  // Pulse next dot (play mode only)
  if(!designerMode && next<dotMeshes.length){
    const p=1+Math.sin(tick*4.6)*0.18;
    dotMeshes[next].scale.setScalar(p);
    if(glowMeshes[next]){glowMeshes[next].scale.setScalar(1+Math.sin(tick*3.1)*0.40);}
  }
  // Gentle auto-drift phase 4+
  if(bgPhase>=4&&!dragging){orb.theta+=dt*0.012;camSync();}
  renderer.render(scene,camera);
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════
loadLevel(LVL_MIN);
requestAnimationFrame(animate);

})();
