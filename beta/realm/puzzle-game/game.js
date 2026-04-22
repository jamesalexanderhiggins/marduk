const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --------------------
// URL PARAM HANDLING
// --------------------

const params = new URLSearchParams(window.location.search);

let startLevel = parseInt(params.get("level")) || null;
let range = params.get("range");
let redirect = params.get("redirect") || null;

let levelQueue = [];

if (range) {
  let [start, end] = range.split("-").map(Number);
  for (let i = start; i <= end; i++) levelQueue.push(i);
} else if (startLevel) {
  levelQueue = [startLevel];
} else {
  levelQueue = [1];
}

let currentLevelIndex = 0;
let currentLevel = levelQueue[currentLevelIndex];

// --------------------
// LEVEL SYSTEM
// --------------------

function getLevelConfig(level) {
  return {
    complexity: Math.min(1 + level * 0.2, 20),
    speed: 0.01 + level * 0.002,
    tolerance: Math.max(0.3 - level * 0.002, 0.05)
  };
}

// --------------------
// GAME STATE
// --------------------

let angleX = 0;
let angleY = 0;

let targetX = Math.random() * Math.PI * 2;
let targetY = Math.random() * Math.PI * 2;

let dragging = false;
let lastX, lastY;

// --------------------
// INPUT
// --------------------

canvas.addEventListener("mousedown", e => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

canvas.addEventListener("mouseup", () => dragging = false);

canvas.addEventListener("mousemove", e => {
  if (!dragging) return;

  let dx = e.clientX - lastX;
  let dy = e.clientY - lastY;

  angleY += dx * 0.005;
  angleX += dy * 0.005;

  lastX = e.clientX;
  lastY = e.clientY;
});

// --------------------
// DRAWING
// --------------------

function drawShape(complexity) {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  let size = 100 + complexity * 5;

  for (let i = 0; i < complexity * 10; i++) {
    let a = (i / complexity) * Math.PI * 2;

    let x = Math.cos(a + angleX) * size;
    let y = Math.sin(a + angleY) * size;

    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(canvas.width/2 + x, canvas.height/2 + y);
    ctx.stroke();
  }
}

// --------------------
// GAME LOOP
// --------------------

function update() {
  let config = getLevelConfig(currentLevel);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawShape(config.complexity);

  // WIN CONDITION
  let dx = Math.abs(angleX - targetX);
  let dy = Math.abs(angleY - targetY);

  if (dx < config.tolerance && dy < config.tolerance) {
    nextLevel();
  }

  requestAnimationFrame(update);
}

// --------------------
// LEVEL PROGRESSION
// --------------------

function nextLevel() {
  currentLevelIndex++;

  if (currentLevelIndex >= levelQueue.length) {
    if (redirect) {
      window.location.href = redirect;
    }
    return;
  }

  currentLevel = levelQueue[currentLevelIndex];

  // Reset state
  angleX = 0;
  angleY = 0;

  targetX = Math.random() * Math.PI * 2;
  targetY = Math.random() * Math.PI * 2;
}

// --------------------

update();
