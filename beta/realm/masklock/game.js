/* ═══════════════════════════════════════════════════════════════
   VECTOR MASK LOCK — game.js
   Mardukverse Realm Access Protocol v3.14

   IFRAME EMBED:
     <iframe src="index.html?range=3-8&redirect=https://example.com">

   SCRIPT EMBED (injects own HTML + loads style.css from same dir):
     <div id="vml-root"></div>
     <script src="game.js?range=3-8&redirect=https://example.com"></script>

   PARAMS:
     ?level=N         single level (1-100)
     ?range=N-M       level range
     ?redirect=URL    navigate top frame on range/level completion
   ═══════════════════════════════════════════════════════════════ */

(function () {
'use strict';

// ═══════════════════════════════════════════════════════════════
// EMBED MODE DETECTION & DOM INJECTION
// ═══════════════════════════════════════════════════════════════

const SCRIPT_EL  = document.currentScript;
const EMBED_MODE = !document.getElementById('c');   // no canvas = script embed

if (EMBED_MODE) {
  // Resolve base path for style.css alongside game.js
  const base = SCRIPT_EL
    ? SCRIPT_EL.src.replace(/\/[^\/]*$/, '')
    : (location.pathname.replace(/\/[^\/]*$/, '') || '');

  // Inject stylesheet
  if (!document.getElementById('vml-css')) {
    const lnk = document.createElement('link');
    lnk.id = 'vml-css'; lnk.rel = 'stylesheet';
    lnk.href = base + '/style.css';
    document.head.appendChild(lnk);
  }

  // Inject game HTML into #vml-root or body
  const root = document.getElementById('vml-root') || document.body;
  root.insertAdjacentHTML('beforeend', [
    '<div id="crt"></div>',
    '<header id="hdr">',
    '  <div class="sys-line">MARDUKVERSE &gt;&gt; REALM ACCESS PROTOCOL &gt;&gt; v3.14.159</div>',
    '  <div id="game-title"><span class="br">[</span>VECTOR&nbsp;MASK&nbsp;LOCK<span class="br">]</span></div>',
    '  <div class="sys-line blink-warn">FACIAL RECONSTRUCTION REQUIRED &#8212; ACCESS DENIED</div>',
    '</header>',
    '<div id="level-hud">',
    '  <div class="hud-l"><span class="htag">LVL</span><span id="h-level">01</span><span class="hdim">/<span id="h-max">100</span></span></div>',
    '  <div id="prog-track"><div id="prog-fill"></div></div>',
    '  <div class="hud-r"><span class="htag">NODES</span><span id="h-nodes" class="hval">--</span><span class="hsep">|</span><span class="htag">OPEN</span><span id="h-open" class="hval hwarn">--</span></div>',
    '</div>',
    '<div id="wrap"><canvas id="c"></canvas>',
    '  <div class="cx tl"></div><div class="cx tr"></div><div class="cx bl"></div><div class="cx br"></div>',
    '</div>',
    '<div id="ctrl-bar">',
    '  <div id="nav-btns"><button class="cb" id="prev-btn">&#9664; PREV</button><button class="cb" id="next-btn">NEXT &#9654;</button></div>',
    '  <div id="rot-btns"><span class="htag">ROT</span><button class="cb sm" id="rleft">&#9664;</button><button class="cb sm" id="rreset">&#9711;</button><button class="cb sm" id="rright">&#9654;</button><button class="cb sm on" id="rauto">&#8635;</button><span class="hint-txt">&#8592;&#8594; keys</span></div>',
    '</div>',
    '<div id="status-row"><span id="s-msg">DRAG DISPLACED NODES TO THEIR LOCK POSITIONS</span><span id="s-cnt"></span></div>',
    '<div id="unlock-line">&nbsp;</div>',
    '<div id="overlay"><div id="ol-panel">',
    '  <div class="olc tl"></div><div class="olc tr"></div><div class="olc bl"></div><div class="olc br"></div>',
    '  <div id="ol-tag">&#47;&#47; ACCESS GRANTED &#47;&#47;</div>',
    '  <div id="ol-num">01</div>',
    '  <div id="ol-title">RECONSTRUCTION COMPLETE</div>',
    '  <div id="ol-msg">&nbsp;</div><div id="ol-unlock">&nbsp;</div>',
    '  <div id="ol-nav"><button class="olb" id="ol-prev">&#9664; PREV</button><button class="olb" id="ol-next">NEXT &#9654;</button></div>',
    '</div></div>',
    '<div id="solve-bar"><button id="solve-btn">&#9889; AUTO-SOLVE</button><span id="solve-tag">&#9646; SOLVE MODE ACTIVE &#9646;</span></div>',
  ].join(''));
}

// ═══════════════════════════════════════════════════════════════
// URL PARAMETERS
// Read from script src first (embed mode), else page URL
// ═══════════════════════════════════════════════════════════════

(function resolveParams() {
  let P;
  if (EMBED_MODE && SCRIPT_EL) {
    try { P = new URL(SCRIPT_EL.src).searchParams; } catch(e) {}
  }
  if (!P || P.toString() === '') P = new URLSearchParams(location.search);
  window._VML_P = P;
})();

const _P    = window._VML_P;
const _lvl  = parseInt(_P.get('level'))  || 0;
const _rng  = (_P.get('range') || '').split('-').map(Number);
const REDIR = _P.get('redirect') || null;
const LVL_MIN = _lvl ? _lvl : (_rng[0] || 1);
const LVL_MAX = _lvl ? _lvl : (_rng[1] || 100);

// ═══════════════════════════════════════════════════════════════
// MASK GEOMETRY — 31 vertices, 48 edges
// ═══════════════════════════════════════════════════════════════

const V = [
  // Face oval (0-7)
  [ 0.00,  1.15,  0.00],   // 0  crown
  [ 0.52,  0.95, -0.08],   // 1  top-right
  [ 0.74,  0.22, -0.18],   // 2  right
  [ 0.60, -0.68, -0.10],   // 3  bottom-right
  [ 0.00, -1.10,  0.00],   // 4  chin
  [-0.60, -0.68, -0.10],   // 5  bottom-left
  [-0.74,  0.22, -0.18],   // 6  left
  [-0.52,  0.95, -0.08],   // 7  top-left
  // Forehead (8)
  [ 0.00,  0.88,  0.05],   // 8  forehead
  // Brow arch (9-11)
  [ 0.50,  0.60,  0.07],   // 9  R brow peak
  [ 0.00,  0.66,  0.10],   // 10 brow centre
  [-0.50,  0.60,  0.07],   // 11 L brow peak
  // Right eye (12-15)
  [ 0.54,  0.30,  0.08],   // 12 R-eye outer
  [ 0.34,  0.44,  0.15],   // 13 R-eye top
  [ 0.16,  0.30,  0.10],   // 14 R-eye inner
  [ 0.34,  0.17,  0.10],   // 15 R-eye bottom
  // Left eye (16-19)
  [-0.54,  0.30,  0.08],   // 16 L-eye outer
  [-0.34,  0.44,  0.15],   // 17 L-eye top
  [-0.16,  0.30,  0.10],   // 18 L-eye inner
  [-0.34,  0.17,  0.10],   // 19 L-eye bottom
  // Nose (20-23)
  [ 0.00,  0.15,  0.22],   // 20 nose bridge
  [ 0.00, -0.12,  0.30],   // 21 nose tip
  [ 0.20, -0.24,  0.20],   // 22 R nostril
  [-0.20, -0.24,  0.20],   // 23 L nostril
  // Cheeks (24-25)
  [ 0.64,  0.04,  0.06],   // 24 R cheek
  [-0.64,  0.04,  0.06],   // 25 L cheek
  // Mouth (26-29)
  [ 0.00, -0.46,  0.22],   // 26 mouth top
  [ 0.36, -0.56,  0.16],   // 27 mouth R
  [ 0.00, -0.72,  0.18],   // 28 mouth bottom
  [-0.36, -0.56,  0.16],   // 29 mouth L
  // Chin (30)
  [ 0.00, -0.94,  0.02],   // 30 chin ridge
];

// [vertA, vertB, group]
const E = [
  [0,1,'oval'],[1,2,'oval'],[2,3,'oval'],[3,4,'oval'],
  [4,5,'oval'],[5,6,'oval'],[6,7,'oval'],[7,0,'oval'],
  [0,8,'str'],[8,10,'str'],[10,9,'brow'],[10,11,'brow'],
  [9,1,'str'],[11,7,'str'],
  [9,13,'str'],[11,17,'str'],
  [12,13,'reye'],[13,14,'reye'],[14,15,'reye'],[15,12,'reye'],
  [16,17,'leye'],[17,18,'leye'],[18,19,'leye'],[19,16,'leye'],
  [12,24,'cheek'],[16,25,'cheek'],[24,2,'cheek'],[25,6,'cheek'],
  [15,24,'cheek'],[19,25,'cheek'],
  [24,22,'cheek'],[25,23,'cheek'],
  [14,20,'nose'],[18,20,'nose'],
  [20,21,'nose'],[21,22,'nose'],[21,23,'nose'],[22,23,'nose'],
  [22,27,'mouth'],[23,29,'mouth'],
  [26,27,'mouth'],[27,28,'mouth'],[28,29,'mouth'],[29,26,'mouth'],
  [27,3,'str'],[29,5,'str'],
  [28,30,'chin'],[30,4,'chin'],[3,30,'chin'],[5,30,'chin'],
];

// RGB per feature group
const GC = {
  oval:  [0,229,255],    // cyan
  str:   [50,120,255],   // structural blue
  brow:  [80,180,255],   // lighter blue
  reye:  [0,255,136],    // green
  leye:  [0,255,136],    // green
  nose:  [168,85,247],   // purple
  cheek: [255,136,50],   // orange
  mouth: [255,68,204],   // magenta
  chin:  [255,255,68],   // yellow
};

// Unlock level per vertex
const UL = [
  1,1,1,1,1,1,1,1,   // 0-7
  1,                   // 8
  1,1,1,              // 9-11
  6,6,6,6,           // 12-15
  11,11,11,11,       // 16-19
  16,                  // 20
  21,21,21,          // 21-23
  27,27,             // 24-25
  36,36,36,36,       // 26-29
  47,                  // 30
];

const VNAME = {
  6:  'RIGHT EYE SOCKET RESTORED',
  11: 'LEFT EYE SOCKET RESTORED',
  16: 'NOSE BRIDGE EMERGES',
  21: 'NOSE GEOMETRY COMPLETE',
  27: 'CHEEKBONES DEFINED',
  36: 'MOUTH PATTERN LOCKED',
  47: 'CHIN RIDGE CALIBRATED',
};

// ═══════════════════════════════════════════════════════════════
// STARFIELD
// ═══════════════════════════════════════════════════════════════

// Star color palette: cyan, purple, white-blue, green-tint
const SCOLS = [
  [0,229,255], [168,85,247], [180,210,255], [0,255,180],
];

const STARS = Array.from({ length: 180 }, () => ({
  nx:  Math.random(),
  ny:  Math.random() * 0.52,      // upper half only (above grid horizon)
  r:   Math.random() * 1.6 + 0.3,
  a:   Math.random() * 0.65 + 0.12,
  tw:  Math.random() * Math.PI * 2,
  ts:  0.0007 + Math.random() * 0.002,
  ci:  Math.floor(Math.random() * SCOLS.length),
  flare: Math.random() > 0.82,   // cross-flare on ~18%
}));

// ═══════════════════════════════════════════════════════════════
// ENGINE STATE
// ═══════════════════════════════════════════════════════════════

const canvas = document.getElementById('c');
const ctx    = canvas.getContext('2d');
const FOCAL  = 5.0;
const ZOFF   = 2.5;

let level    = Math.max(LVL_MIN, Math.min(LVL_MAX, LVL_MIN));
let rotY     = -0.15;
let autoRot  = true;
let rotDir   = 0;
let lastT    = 0;

let dm       = {};      // { vi: {cur,target,snapped} }
let flashes  = [];      // [ {vi,t0} ]
let sparks   = [];      // [ {x,y,vx,vy,r,life,decay,col} ]

let drag     = null;
let scDrag   = false, sdRotY = 0, sdMx = 0;

// Solve mode — persists across levels until toggled
let solveMode = false;
let pwBuf     = '';
const PW      = 'evilamaicram';

// ═══════════════════════════════════════════════════════════════
// CANVAS SIZING
// ═══════════════════════════════════════════════════════════════

function resize() {
  const wrap = document.getElementById('wrap');
  const W    = wrap.clientWidth - 32;
  canvas.width  = W;
  canvas.height = Math.round(W * 0.76);
}
window.addEventListener('resize', () => { resize(); });
resize();

// ═══════════════════════════════════════════════════════════════
// PROJECTION
// ═══════════════════════════════════════════════════════════════

function proj(v, ry) {
  const c = Math.cos(ry), s = Math.sin(ry);
  const x3 = v[0]*c - v[2]*s;
  const z3 = v[0]*s + v[2]*c;
  const sc = Math.min(canvas.width, canvas.height) * 0.35;
  const t  = FOCAL / (FOCAL + z3 + ZOFF);
  return {
    sx: canvas.width*0.5  + x3*t*sc,
    sy: canvas.height*0.5 - v[1]*t*sc,
    z3, t, sc,
  };
}

function unproj(sx, sy, z0) {
  let c = Math.cos(rotY), s = Math.sin(rotY);
  if (Math.abs(c) < 0.10) c = c < 0 ? -0.10 : 0.10;
  const sc = Math.min(canvas.width, canvas.height) * 0.35;
  const cx = canvas.width*0.5, cy = canvas.height*0.5;
  let xm = 0;
  for (let i = 0; i < 6; i++) {
    const z3   = xm*s + z0*c;
    const tval = FOCAL/(FOCAL+z3+ZOFF)*sc;
    xm = Math.max(-2.5, Math.min(2.5, ((sx-cx)/tval + z0*s)/c));
  }
  const z3   = xm*s + z0*c;
  const tval = FOCAL/(FOCAL+z3+ZOFF)*sc;
  return [xm, -(sy-cy)/tval, z0];
}

// ═══════════════════════════════════════════════════════════════
// LEVEL HELPERS
// ═══════════════════════════════════════════════════════════════

function unlockedSet(lvl) {
  const s = new Set();
  UL.forEach((u,i) => { if (u<=lvl) s.add(i); });
  return s;
}

function dispCount(lvl) {
  if (lvl<=4)  return 1;
  if (lvl<=12) return 2;
  if (lvl<=25) return Math.min(4,  1+Math.floor(lvl/7));
  if (lvl<=55) return Math.min(9,  2+Math.floor(lvl/7));
  return Math.min(15, 3+Math.floor(lvl/6));
}
function dispAmt(lvl)  { return 0.26+(lvl/100)*0.62; }
function snapRad(lvl)  { return Math.max(0.09, 0.22-(lvl/100)*0.13); }
function snapPx(lvl) {
  const sc = Math.min(canvas.width,canvas.height)*0.35;
  return snapRad(lvl)*(FOCAL/(FOCAL+ZOFF))*sc;
}
function rng(lo,hi) { return lo+Math.random()*(hi-lo); }

// ═══════════════════════════════════════════════════════════════
// LEVEL SETUP
// ═══════════════════════════════════════════════════════════════

function setupLevel(lvl) {
  dm={}; flashes=[]; sparks=[];
  const newVs = UL.map((u,i)=>u===lvl?i:-1).filter(i=>i>=0);
  const pool  = [...unlockedSet(lvl)];
  for (let i=pool.length-1;i>0;i--) {
    const j=0|(Math.random()*(i+1));
    [pool[i],pool[j]]=[pool[j],pool[i]];
  }
  const n=Math.min(dispCount(lvl),pool.length), amt=dispAmt(lvl);
  for (let i=0;i<n;i++) {
    const vi=pool[i], tgt=[...V[vi]], ang=rng(0,Math.PI*2), d=amt*rng(0.72,1.28);
    dm[vi]={
      cur:[
        Math.max(-1.6,Math.min(1.6,tgt[0]+Math.cos(ang)*d)),
        Math.max(-1.4,Math.min(1.4,tgt[1]+Math.sin(ang)*d)),
        tgt[2]+rng(-0.08,0.08)*amt,
      ],
      target:tgt, snapped:false,
    };
  }
  updateHUD(lvl, newVs);
  updateStatus();
  updateNavButtons();

  // If solve mode is on, auto-solve after a brief delay
  if (solveMode) {
    setTimeout(() => {
      Object.keys(dm).forEach((vi,i) => {
        setTimeout(() => { if(dm[vi]&&!dm[vi].snapped) snapVert(+vi); }, i*60);
      });
    }, 400);
  }
}

function updateHUD(lvl, newVs) {
  const ul = unlockedSet(lvl);
  const rem = Object.values(dm).filter(d=>!d.snapped).length;

  El('h-level').textContent  = pad(lvl);
  El('h-max').textContent    = LVL_MAX;
  El('prog-fill').style.width= ((lvl-LVL_MIN)/(LVL_MAX-LVL_MIN||1)*100).toFixed(1)+'%';
  El('h-nodes').textContent  = ul.size;
  El('h-open').textContent   = rem || 0;

  const notice = El('unlock-line');
  if (newVs&&newVs.length) {
    const key = newVs.reduce((a,b)=>Math.min(a,UL[b]),Infinity);
    notice.textContent  = VNAME[key]||'NEW NODE UNLOCKED';
    notice.style.opacity='1';
    setTimeout(()=>{ notice.style.opacity='0'; }, 3000);
  } else {
    notice.textContent='\u00a0'; notice.style.opacity='1';
  }
}

function updateStatus() {
  const rem=Object.values(dm).filter(d=>!d.snapped).length;
  El('s-cnt').textContent = rem===0 ? 'ALL NODES LOCKED' : rem+' NODE'+(rem===1?'':'S')+' DISPLACED';
  El('h-open').textContent= rem||0;
}

function updateNavButtons() {
  El('prev-btn').disabled    = level<=LVL_MIN;
  El('next-btn').disabled    = level>=LVL_MAX;
  El('ol-prev').disabled     = level<=LVL_MIN;
  El('ol-next').disabled     = level>=LVL_MAX;
}

function pad(n) { return n<10 ? '0'+n : ''+n; }
function El(id) { return document.getElementById(id); }

// ═══════════════════════════════════════════════════════════════
// SPARKS
// ═══════════════════════════════════════════════════════════════

function emitSparks(sx, sy, rgb) {
  const n = 16+Math.floor(Math.random()*8);
  for (let i=0;i<n;i++) {
    const ang = Math.random()*Math.PI*2;
    const spd = 1.6+Math.random()*4.8;
    sparks.push({
      x:sx, y:sy,
      vx:Math.cos(ang)*spd, vy:Math.sin(ang)*spd-0.8,
      r: 0.8+Math.random()*2.6,
      life:1.0, decay:0.015+Math.random()*0.030,
      col: rgb || [0,229,255],
    });
  }
}

function updateSparks() {
  sparks=sparks.filter(s=>s.life>0);
  for (const s of sparks) {
    s.x+=s.vx; s.y+=s.vy;
    s.vy+=0.08; s.vx*=0.97;
    s.life-=s.decay;
    if (s.life<=0) continue;
    const a=Math.max(0,s.life);
    const [r,g,b]=s.col;
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r*Math.max(0.1,s.life),0,Math.PI*2);
    ctx.fillStyle=`rgba(${r},${g},${b},${a.toFixed(3)})`;
    ctx.fill();
  }
}

// ═══════════════════════════════════════════════════════════════
// BACKGROUND: TRON GRID + STARS
// ═══════════════════════════════════════════════════════════════

function drawCrossFlare(x, y, size, r, g, b, a) {
  const hg=ctx.createLinearGradient(x-size,y,x+size,y);
  hg.addColorStop(0,`rgba(${r},${g},${b},0)`);
  hg.addColorStop(0.5,`rgba(${r},${g},${b},${a.toFixed(3)})`);
  hg.addColorStop(1,`rgba(${r},${g},${b},0)`);
  ctx.fillStyle=hg; ctx.fillRect(x-size,y-0.8,size*2,1.6);
  const vg=ctx.createLinearGradient(x,y-size,x,y+size);
  vg.addColorStop(0,`rgba(${r},${g},${b},0)`);
  vg.addColorStop(0.5,`rgba(${r},${g},${b},${a.toFixed(3)})`);
  vg.addColorStop(1,`rgba(${r},${g},${b},0)`);
  ctx.fillStyle=vg; ctx.fillRect(x-0.8,y-size,1.6,size*2);
}

function drawBackground(W, H, ts) {
  // Base — deep black with slight blue-purple tint
  const bg=ctx.createRadialGradient(W*0.5,H*0.44,0,W*0.5,H*0.5,Math.max(W,H)*0.85);
  bg.addColorStop(0,'#010c18'); bg.addColorStop(0.6,'#000510'); bg.addColorStop(1,'#000208');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  // Nebula clouds
  const nb1=ctx.createRadialGradient(W*0.22,H*0.28,0,W*0.22,H*0.28,W*0.38);
  nb1.addColorStop(0,'rgba(80,0,160,0.06)'); nb1.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=nb1; ctx.fillRect(0,0,W,H);
  const nb2=ctx.createRadialGradient(W*0.75,H*0.20,0,W*0.75,H*0.20,W*0.30);
  nb2.addColorStop(0,'rgba(0,120,200,0.05)'); nb2.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=nb2; ctx.fillRect(0,0,W,H);

  // ── TRON PERSPECTIVE GRID (lower half) ──
  const gh  = H*0.50;   // horizon
  const gvx = W*0.50;   // vanishing x
  const pulse = 0.72+0.28*Math.sin(ts*0.00078);

  ctx.save();
  ctx.beginPath(); ctx.rect(0,gh,W,H-gh); ctx.clip();

  // Horizontal lines
  for (let i=1;i<=22;i++) {
    const p=Math.pow(i/22,1.65);
    const y=gh+p*(H-gh);
    const al=(0.02+(1-p)*0.22)*pulse;
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y);
    ctx.strokeStyle=`rgba(0,200,255,${al.toFixed(3)})`; ctx.lineWidth=0.65; ctx.stroke();
  }
  // Vertical lines
  for (let i=0;i<=26;i++) {
    const x=(i/26)*W;
    const ef=1-Math.pow(Math.abs(i/26-0.5)*2,0.55);
    const al=Math.max(0,(0.015+ef*0.10))*pulse;
    ctx.beginPath(); ctx.moveTo(x,H); ctx.lineTo(gvx,gh);
    ctx.strokeStyle=`rgba(0,80,220,${al.toFixed(3)})`; ctx.lineWidth=0.5; ctx.stroke();
  }
  ctx.restore();

  // Horizon glow
  const hgl=ctx.createLinearGradient(0,gh-4,0,gh+4);
  hgl.addColorStop(0,'rgba(0,200,255,0)');
  hgl.addColorStop(0.5,`rgba(0,200,255,${(0.35*pulse).toFixed(3)})`);
  hgl.addColorStop(1,'rgba(0,200,255,0)');
  ctx.fillStyle=hgl; ctx.fillRect(0,gh-4,W,8);

  // ── STARS (upper half) ──
  for (const s of STARS) {
    if (s.ny*H > gh-4) continue;
    const twk=0.65+0.35*Math.sin(ts*s.ts+s.tw);
    const sx=s.nx*W, sy=s.ny*H;
    const [r,g,b]=SCOLS[s.ci];
    if (s.flare && s.r>1.2) {
      const fg=ctx.createRadialGradient(sx,sy,0,sx,sy,s.r*6);
      fg.addColorStop(0,`rgba(${r},${g},${b},${(s.a*0.4*twk).toFixed(3)})`);
      fg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(sx,sy,s.r*6,0,Math.PI*2);
      ctx.fillStyle=fg; ctx.fill();
      drawCrossFlare(sx,sy,s.r*14,r,g,b,s.a*0.55*twk);
    }
    ctx.beginPath(); ctx.arc(sx,sy,s.r*twk,0,Math.PI*2);
    ctx.fillStyle=`rgba(${r},${g},${b},${(s.a*twk).toFixed(3)})`; ctx.fill();
  }

  // Vignette
  const vig=ctx.createRadialGradient(W*0.5,H*0.5,W*0.15,W*0.5,H*0.5,W*0.88);
  vig.addColorStop(0,'rgba(0,0,0,0)'); vig.addColorStop(1,'rgba(0,0,0,0.68)');
  ctx.fillStyle=vig; ctx.fillRect(0,0,W,H);
}

// ═══════════════════════════════════════════════════════════════
// MAIN DRAW LOOP
// ═══════════════════════════════════════════════════════════════

const MSGS = [
  'NODE SEQUENCE VERIFIED. TOPOLOGY RESTORED.',
  'VERTEX ARRAY SYNCHRONIZED. PATTERN LOCKED.',
  'MESH INTEGRITY CONFIRMED. FACE STABLE.',
  'ALIGNMENT ACHIEVED. MATRIX VALIDATED.',
  'LOCK ALGORITHM SATISFIED. ACCESS PENDING.',
  'RECONSTRUCTION SUCCESSFUL. PROCEEDING.',
  'FACIAL TOPOLOGY CONFIRMED. MOVING ON.',
  'PATTERN MATCH: 100%. UNLOCKING NEXT SEQUENCE.',
  'GEOMETRY RESTORED. IDENTITY CONFIRMED.',
  'ALL NODES LOCKED. SYSTEM PROCEEDING.',
];

function draw(ts) {
  if (!lastT) lastT=ts;
  const dt=Math.min((ts-lastT)/1000,0.05);
  lastT=ts;

  if (rotDir!==0&&!drag) {
    rotY+=rotDir*dt*1.5;
  } else if (autoRot&&!drag&&!scDrag&&rotDir===0) {
    rotY+=dt*0.16;
  }

  const W=canvas.width, H=canvas.height;
  ctx.clearRect(0,0,W,H);
  drawBackground(W,H,ts);

  const ul=unlockedSet(level);
  const pos={};
  for (const vi of ul) pos[vi]=(dm[vi]&&!dm[vi].snapped)?dm[vi].cur:V[vi];

  const sp={};
  for (const vi of ul) sp[vi]=proj(pos[vi],rotY);

  const tp={};
  for (const vi of Object.keys(dm)) tp[vi]=proj(V[vi],rotY);

  // Ghost wireframe (correct positions)
  for (const [a,b] of E) {
    if (!ul.has(a)||!ul.has(b)) continue;
    const pa=proj(V[a],rotY), pb=proj(V[b],rotY);
    ctx.beginPath(); ctx.moveTo(pa.sx,pa.sy); ctx.lineTo(pb.sx,pb.sy);
    ctx.strokeStyle='rgba(0,60,120,0.20)'; ctx.lineWidth=0.7; ctx.stroke();
  }

  // Dashed guide lines: displaced → target
  ctx.setLineDash([3,9]);
  for (const [vi,d] of Object.entries(dm)) {
    if (d.snapped) continue;
    ctx.beginPath(); ctx.moveTo(sp[vi].sx,sp[vi].sy); ctx.lineTo(tp[vi].sx,tp[vi].sy);
    ctx.strokeStyle='rgba(255,80,0,0.30)'; ctx.lineWidth=0.8; ctx.stroke();
  }
  ctx.setLineDash([]);

  // Snap rings
  const sr=snapPx(level);
  for (const [vi,d] of Object.entries(dm)) {
    if (d.snapped) continue;
    const t=tp[vi];
    ctx.beginPath(); ctx.arc(t.sx,t.sy,sr,0,Math.PI*2);
    ctx.strokeStyle='rgba(0,255,136,0.40)'; ctx.lineWidth=0.9; ctx.stroke();
    ctx.beginPath(); ctx.arc(t.sx,t.sy,2.5,0,Math.PI*2);
    ctx.fillStyle='rgba(0,255,136,0.65)'; ctx.fill();
  }

  // Wireframe edges — depth-sorted, per-group colour
  const edges=E.filter(([a,b])=>ul.has(a)&&ul.has(b));
  edges.sort(([a1,b1],[a2,b2])=>(sp[a1].z3+sp[b1].z3)-(sp[a2].z3+sp[b2].z3));

  for (const [a,b,grp] of edges) {
    const pa=sp[a], pb=sp[b];
    const aD=dm[a]&&!dm[a].snapped, bD=dm[b]&&!dm[b].snapped;
    const avgZ=(pa.z3+pb.z3)*0.5;
    const df=Math.max(0.28,1.0-avgZ*0.20);
    const [r,g,b2]=GC[grp]||[0,229,255];

    if (aD||bD) {
      // Displaced — pulse orange-red glow
      const pk=0.5+0.5*Math.sin(ts*0.0045);
      ctx.beginPath(); ctx.moveTo(pa.sx,pa.sy); ctx.lineTo(pb.sx,pb.sy);
      ctx.strokeStyle=`rgba(255,80,0,${(0.14*df).toFixed(3)})`; ctx.lineWidth=8; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pa.sx,pa.sy); ctx.lineTo(pb.sx,pb.sy);
      ctx.strokeStyle=`rgba(255,${Math.round(60+80*pk)},0,${(0.65*df).toFixed(3)})`; ctx.lineWidth=1.3; ctx.stroke();
    } else {
      // Correct — feature colour with neon glow
      ctx.beginPath(); ctx.moveTo(pa.sx,pa.sy); ctx.lineTo(pb.sx,pb.sy);
      ctx.strokeStyle=`rgba(${r},${g},${b2},${(0.12*df).toFixed(3)})`; ctx.lineWidth=5; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pa.sx,pa.sy); ctx.lineTo(pb.sx,pb.sy);
      ctx.strokeStyle=`rgba(${r},${g},${b2},${(0.68*df).toFixed(3)})`; ctx.lineWidth=1.1; ctx.stroke();
    }
  }

  // Snap flash rings
  flashes=flashes.filter(f=>ts-f.t0<800);
  for (const f of flashes) {
    const age=(ts-f.t0)/800;
    const p=proj(V[f.vi],rotY);
    const [r,g,b]=f.col;
    ctx.beginPath(); ctx.arc(p.sx,p.sy,4+age*38,0,Math.PI*2);
    ctx.strokeStyle=`rgba(${r},${g},${b},${((1-age)*0.6).toFixed(3)})`; ctx.lineWidth=1.6; ctx.stroke();
    // Inner ring
    ctx.beginPath(); ctx.arc(p.sx,p.sy,2+age*18,0,Math.PI*2);
    ctx.strokeStyle=`rgba(${r},${g},${b},${((1-age)*0.3).toFixed(3)})`; ctx.lineWidth=0.8; ctx.stroke();
  }

  // Vertices
  for (const vi of ul) {
    const p=sp[vi], d=dm[vi];

    if (d&&!d.snapped) {
      // DISPLACED — red pulsing
      const pk=0.55+0.45*Math.sin(ts*0.0038+vi*1.5);
      const gg=ctx.createRadialGradient(p.sx,p.sy,0,p.sx,p.sy,28);
      gg.addColorStop(0,`rgba(255,80,0,${(0.45*pk).toFixed(3)})`);
      gg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(p.sx,p.sy,28,0,Math.PI*2); ctx.fillStyle=gg; ctx.fill();
      ctx.beginPath(); ctx.arc(p.sx,p.sy,5.5,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,120,30,${(0.8+0.2*pk).toFixed(3)})`; ctx.fill();
      ctx.strokeStyle=`rgba(255,220,80,${(0.7+0.3*pk).toFixed(3)})`; ctx.lineWidth=0.9; ctx.stroke();

    } else if (d&&d.snapped) {
      // SNAPPED — bright cyan-white
      const gs=ctx.createRadialGradient(p.sx,p.sy,0,p.sx,p.sy,16);
      gs.addColorStop(0,'rgba(0,255,255,0.40)'); gs.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(p.sx,p.sy,16,0,Math.PI*2); ctx.fillStyle=gs; ctx.fill();
      ctx.beginPath(); ctx.arc(p.sx,p.sy,4.5,0,Math.PI*2);
      ctx.fillStyle='rgba(180,255,255,0.96)'; ctx.fill();

    } else {
      // LOCKED — dim feature colour
      const edgeForVi = E.find(([a,b])=>a===vi||b===vi);
      const grp = edgeForVi ? edgeForVi[2] : 'oval';
      const [r,g,b]=GC[grp]||[0,229,255];
      ctx.beginPath(); ctx.arc(p.sx,p.sy,2.8,0,Math.PI*2);
      ctx.fillStyle=`rgba(${r},${g},${b},0.60)`; ctx.fill();
    }
  }

  // Sparks
  updateSparks();

  // Corner HUD brackets
  ctx.strokeStyle='rgba(0,229,255,0.45)'; ctx.lineWidth=1.0;
  const bl=20;
  [[4,4,1,1],[W-4,4,-1,1],[4,H-4,1,-1],[W-4,H-4,-1,-1]].forEach(([x,y,dx,dy])=>{
    ctx.beginPath(); ctx.moveTo(x,y+dy*bl); ctx.lineTo(x,y); ctx.lineTo(x+dx*bl,y); ctx.stroke();
  });

  requestAnimationFrame(draw);
}

// ═══════════════════════════════════════════════════════════════
// SNAP & COMPLETION
// ═══════════════════════════════════════════════════════════════

function snapVert(vi) {
  const d=dm[vi];
  if (!d||d.snapped) return;
  const p=proj(d.cur,rotY);
  const edg=E.find(([a,b])=>a===vi||b===vi);
  const col=edg ? GC[edg[2]] : [0,229,255];
  d.cur=[...d.target]; d.snapped=true;
  flashes.push({vi:+vi, t0:lastT, col});
  emitSparks(p.sx,p.sy,col);
  updateStatus();
  if (Object.values(dm).every(d=>d.snapped)) setTimeout(checkCompletion,420);
}

function checkCompletion() {
  if (level>=LVL_MAX) {
    // Range/level complete
    if (REDIR) {
      try { window.top.location.href=REDIR; } catch(e) { location.href=REDIR; }
    } else {
      showOverlay(true);
    }
  } else {
    showOverlay(false);
  }
}

function showOverlay(isFinal) {
  const next=level+1;
  El('ol-num').textContent   = pad(level);
  El('ol-title').textContent = isFinal ? 'ALL SEQUENCES COMPLETE' : 'RECONSTRUCTION COMPLETE';
  El('ol-msg').textContent   = isFinal ? 'FULL ACCESS GRANTED' : MSGS[Math.floor(Math.random()*MSGS.length)];

  if (!isFinal && next<=LVL_MAX) {
    const newVs=UL.map((u,i)=>u===next?i:-1).filter(i=>i>=0);
    const key=newVs.length?newVs.reduce((a,b)=>Math.min(a,UL[b]),Infinity):null;
    El('ol-unlock').textContent=key&&VNAME[key]?'NEXT: '+VNAME[key]:'\u00a0';
  } else {
    El('ol-unlock').textContent='\u00a0';
  }
  updateNavButtons();
  El('overlay').classList.add('show');
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════

function goTo(lvl) {
  level=Math.max(LVL_MIN,Math.min(LVL_MAX,lvl));
  El('overlay').classList.remove('show');
  setupLevel(level);
}

El('prev-btn').addEventListener('click', ()=>goTo(level-1));
El('next-btn').addEventListener('click', ()=>goTo(level+1));
El('ol-prev').addEventListener('click',  ()=>goTo(level-1));
El('ol-next').addEventListener('click',  ()=>goTo(level+1));

// ═══════════════════════════════════════════════════════════════
// ROTATION CONTROLS
// ═══════════════════════════════════════════════════════════════

function setRotDir(d){ rotDir=d; }

const RL=El('rleft'), RR=El('rright');
RL.addEventListener('mousedown',()=>setRotDir(-1));
RR.addEventListener('mousedown',()=>setRotDir(+1));
RL.addEventListener('mouseup',  ()=>setRotDir(0));
RR.addEventListener('mouseup',  ()=>setRotDir(0));
RL.addEventListener('mouseleave',()=>setRotDir(0));
RR.addEventListener('mouseleave',()=>setRotDir(0));
RL.addEventListener('touchstart',e=>{e.preventDefault();setRotDir(-1);},{passive:false});
RR.addEventListener('touchstart',e=>{e.preventDefault();setRotDir(+1);},{passive:false});
RL.addEventListener('touchend',()=>setRotDir(0));
RR.addEventListener('touchend',()=>setRotDir(0));
El('rreset').addEventListener('click',()=>{ rotY=0; rotDir=0; });
El('rauto').addEventListener('click',()=>{
  autoRot=!autoRot;
  El('rauto').classList.toggle('on',autoRot);
});

document.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft')  { setRotDir(-1); e.preventDefault(); }
  if(e.key==='ArrowRight') { setRotDir(+1); e.preventDefault(); }
});
document.addEventListener('keyup',e=>{
  if(e.key==='ArrowLeft'||e.key==='ArrowRight') setRotDir(0);
});

// ═══════════════════════════════════════════════════════════════
// CANVAS INTERACTION
// ═══════════════════════════════════════════════════════════════

function cvPos(cx,cy) {
  const r=canvas.getBoundingClientRect();
  return {mx:(cx-r.left)*(canvas.width/r.width),my:(cy-r.top)*(canvas.height/r.height)};
}

function pickVert(mx,my) {
  const PR=32; let best=null,bd=Infinity;
  for (const [vi,d] of Object.entries(dm)) {
    if (d.snapped) continue;
    const p=proj(d.cur,rotY), dist=Math.hypot(p.sx-mx,p.sy-my);
    if (dist<PR&&dist<bd){best=+vi;bd=dist;}
  }
  return best;
}

function doDown(mx,my){
  const vi=pickVert(mx,my);
  if(vi!==null){drag={vi};autoRot=false;canvas.style.cursor='crosshair';}
  else{scDrag=true;sdRotY=rotY;sdMx=mx;autoRot=false;}
}
function doMove(mx,my){
  if(drag!==null){
    const d=dm[drag.vi];
    if(!d||d.snapped){drag=null;autoRot=true;return;}
    d.cur=unproj(mx,my,d.target[2]);
    const cp=proj(d.cur,rotY),tp2=proj(d.target,rotY);
    if(Math.hypot(cp.sx-tp2.sx,cp.sy-tp2.sy)<snapPx(level)){
      snapVert(drag.vi);drag=null;autoRot=true;canvas.style.cursor='crosshair';
    }
  } else if(scDrag){
    rotY=sdRotY+(mx-sdMx)*0.007;
  } else {
    canvas.style.cursor=pickVert(mx,my)!==null?'grab':'crosshair';
  }
}
function doUp(){drag=null;scDrag=false;autoRot=true;canvas.style.cursor='crosshair';}

canvas.addEventListener('mousedown', e=>{const{mx,my}=cvPos(e.clientX,e.clientY);doDown(mx,my);});
canvas.addEventListener('mousemove', e=>{const{mx,my}=cvPos(e.clientX,e.clientY);doMove(mx,my);});
canvas.addEventListener('mouseup',   ()=>doUp());
canvas.addEventListener('mouseleave',()=>doUp());
canvas.addEventListener('touchstart',e=>{e.preventDefault();const t=e.touches[0];const{mx,my}=cvPos(t.clientX,t.clientY);doDown(mx,my);},{passive:false});
canvas.addEventListener('touchmove', e=>{e.preventDefault();const t=e.touches[0];const{mx,my}=cvPos(t.clientX,t.clientY);doMove(mx,my);},{passive:false});
canvas.addEventListener('touchend',  e=>{e.preventDefault();doUp();},{passive:false});

// ═══════════════════════════════════════════════════════════════
// CHEAT MODE — password toggles solve mode, persists across levels
// ═══════════════════════════════════════════════════════════════

function setSolveMode(on) {
  solveMode=on;
  El('solve-bar').style.display=on?'flex':'none';
}

document.addEventListener('keypress',e=>{
  pwBuf=(pwBuf+e.key.toLowerCase()).slice(-PW.length);
  if(pwBuf===PW){ setSolveMode(!solveMode); pwBuf=''; }
});

El('solve-btn').addEventListener('click',()=>{
  const pending=Object.entries(dm).filter(([,d])=>!d.snapped);
  pending.forEach(([vi],i)=>{
    setTimeout(()=>{ if(dm[vi]&&!dm[vi].snapped) snapVert(+vi); },i*60);
  });
});

// ═══════════════════════════════════════════════════════════════
// GO
// ═══════════════════════════════════════════════════════════════
setupLevel(level);
requestAnimationFrame(draw);

})();
