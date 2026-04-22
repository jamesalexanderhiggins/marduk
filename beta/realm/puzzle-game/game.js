// =====================
// VECTOR MASK v16
// =====================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ---------------------
// AUDIO FIX (REAL)
// ---------------------
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  audioCtx.resume();
  beep(800, 0.1);
}

function beep(freq, duration) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.frequency.value = freq;
  gain.gain.value = 0.1;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// unlock audio
canvas.addEventListener("pointerdown", initAudio);

// ---------------------
// GAME STATE
// ---------------------

let level = parseInt(new URLSearchParams(location.search).get("level")) || 1;

// RANDOM TARGET (NO ZERO CHEAT)
let target = {
  x: Math.random() * Math.PI,
  y: Math.random() * Math.PI,
  z: Math.random() * Math.PI
};

let rot = { x: 0, y: 0, z: 0 };

// timer (+20 seconds)
let time = 40 + level * 0.5;

// easing tolerance late game
function tolerance() {
  return 0.25 - level * 0.0015;
}

// ---------------------
// MASK SURFACE (KEY FIX)
// ---------------------

function maskSurface(u, v) {
  // u,v = -1 to 1
  // VERY shallow depth = no nose ridge

  let z =
    0.15 * Math.exp(-(u * u + v * v)) + // gentle face bulge
    0.05 * Math.sin(u * 3) * Math.cos(v * 2); // surface variation

  return { x: u, y: v, z: z };
}

// ---------------------
// LINE GENERATION
// ---------------------

function getLines() {
  let lines = [];
  let count = Math.min(3 + level, 103);

  for (let i = 0; i < count; i++) {
    let t = i / count;

    lines.push(
      Array.from({ length: 20 }, (_, j) => {
        let u = Math.sin(t * Math.PI * 2) * 0.7;
        let v = -1 + (j / 20) * 2;
        return maskSurface(u, v);
      })
    );
  }

  return lines;
}

// ---------------------
// 3D PROJECTION
// ---------------------

function project(p) {
  let x = p.x;
  let y = p.y;
  let z = p.z;

  // rotate
  let cx = Math.cos(rot.x);
  let sx = Math.sin(rot.x);
  let cy = Math.cos(rot.y);
  let sy = Math.sin(rot.y);

  let dx = cy * x - sy * z;
  let dz = sy * x + cy * z;

  let dy = cx * y - sx * dz;

  return {
    x: canvas.width / 2 + dx * 300,
    y: canvas.height / 2 + dy * 300
  };
}

// ---------------------
// DRAW
// ---------------------

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let lines = getLines();

  ctx.strokeStyle = "white";

  lines.forEach(line => {
    ctx.beginPath();
    line.forEach((p, i) => {
      let pr = project(p);
      if (i === 0) ctx.moveTo(pr.x, pr.y);
      else ctx.lineTo(pr.x, pr.y);
    });
    ctx.stroke();
  });

  // version marker
  ctx.fillStyle = "white";
  ctx.fillText("v16", canvas.width - 40, canvas.height - 20);
}

// ---------------------
// INPUT
// ---------------------

canvas.addEventListener("pointermove", e => {
  if (e.buttons) {
    rot.y += e.movementX * 0.005;
    rot.x += e.movementY * 0.005;
    beep(200 + Math.random() * 200, 0.05);
  }
});

// ---------------------
// LOOP
// ---------------------

function loop() {
  draw();

  // check solve
  let dx = Math.abs(rot.x - target.x);
  let dy = Math.abs(rot.y - target.y);

  if (dx < tolerance() && dy < tolerance()) {
    beep(1200, 0.2);
  }

  requestAnimationFrame(loop);
}

loop();
