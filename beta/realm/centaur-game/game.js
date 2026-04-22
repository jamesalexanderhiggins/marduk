const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let time = 0;
let speed = 2;
let phase = 0;
let finished = false;

const RUN_DURATION = 9000; // ~10–15 mins pacing

const player = {
  x: 100,
  y: 180,
  vy: 0,
  frame: 0,
  jumping: false,
  attacking: false
};

const gravity = 0.5;
let enemies = [];

// INPUT
const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

document.getElementById("jump").onclick = () => jump();
document.getElementById("attack").onclick = () => player.attacking = true;

function jump() {
  if (!player.jumping) {
    player.vy = -10;
    player.jumping = true;
  }
}

// PHASES
function updatePhase() {
  if (time < 3000) phase = 0;
  else if (time < 7000) phase = 1;
  else phase = 2;
}

// ENEMY SPAWN
function spawnEnemy() {
  if (finished) return;

  let type;
  if (phase === 0) type = "serpent";
  else if (phase === 1) type = Math.random() > 0.5 ? "minotaur" : "serpent";
  else {
    let r = Math.random();
    if (r < 0.4) type = "minotaur";
    else if (r < 0.7) type = "serpent";
    else type = "harpy";
  }

  enemies.push({
    x: canvas.width + 20,
    y: type === "harpy" ? 140 : 180,
    type,
    dead: false
  });
}

setInterval(spawnEnemy, 1100);

// UPDATE
function update() {
  if (finished) return;

  time++;
  speed += 0.0006;

  updatePhase();

  // INPUT
  if (keys[" "] || keys["ArrowUp"]) jump();
  player.attacking = keys["ArrowRight"];

  // PHYSICS
  player.vy += gravity;
  player.y += player.vy;

  if (player.y >= 180) {
    player.y = 180;
    player.vy = 0;
    player.jumping = false;
  }

  player.frame += 0.2;

  // ENEMIES
  enemies.forEach(e => {
    e.x -= speed;

    let hit = Math.abs(e.x - player.x) < 18 &&
              Math.abs(e.y - player.y) < 18;

    if (hit) {
      if (player.attacking && e.type !== "harpy") {
        e.dead = true;
      } else {
        gameOver();
      }
    }
  });

  enemies = enemies.filter(e => !e.dead && e.x > -30);

  // FINISH
  if (time > RUN_DURATION) {
    finished = true;
  }
}

// DRAW SPRITES (pixel silhouettes)
function drawCentaur(x,y) {
  ctx.fillStyle = "white";

  let f = Math.floor(player.frame) % 2;

  // body
  ctx.fillRect(x, y, 20, 10);

  // legs (animated)
  ctx.fillRect(x + (f?2:6), y+10, 4, 8);
  ctx.fillRect(x + (f?10:14), y+10, 4, 8);

  // torso
  ctx.fillRect(x+8, y-8, 6, 10);

  // head
  ctx.fillRect(x+12, y-12, 4, 4);

  // spear
  if (player.attacking) {
    ctx.fillStyle = "#ff0";
    ctx.fillRect(x+20, y-4, 16, 2);
  }
}

function drawEnemy(e) {
  if (e.type === "minotaur") {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(e.x, e.y, 18, 18);
  }
  if (e.type === "serpent") {
    ctx.fillStyle = "#0aa";
    ctx.fillRect(e.x, e.y+8, 20, 10);
  }
  if (e.type === "harpy") {
    ctx.fillStyle = "#a0f";
    ctx.fillRect(e.x, e.y, 16, 12);
  }
}

// BACKGROUND
function drawBackground() {
  let dark = Math.min(phase * 40, 120);
  ctx.fillStyle = `rgb(${20-dark/3},${20-dark/3},${20-dark/3})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // dunes
  ctx.fillStyle = "#222";
  for (let i=0;i<3;i++){
    let x = (i*200 - (time*0.2 % 200));
    ctx.fillRect(x,170,200,30);
  }

  // pyramid grows
  let px = canvas.width - (time * 0.03);
  let size = 60 + (time * 0.015);

  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(px,120);
  ctx.lineTo(px+size,200);
  ctx.lineTo(px-size,200);
  ctx.fill();

  if (phase === 2) {
    ctx.fillStyle = "red";
    ctx.fillRect(px-6,150,12,4);
  }

  // FINAL WALL
  if (finished) {
    ctx.fillStyle = "#555";
    ctx.fillRect(canvas.width-80,120,80,80);

    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width-50,150,30,50);
  }
}

// DRAW
function draw() {
  drawBackground();

  ctx.fillStyle = "#111";
  ctx.fillRect(0,200,canvas.width,70);

  drawCentaur(player.x, player.y);

  enemies.forEach(drawEnemy);

  ctx.fillStyle = "#888";
  if (!finished) {
    ctx.fillText("DIST " + Math.floor(time/10), 10, 20);
  } else {
    ctx.fillText("THE GATE OPENS", 150, 140);
  }
}

// GAME OVER
function gameOver() {
  alert("You fell before the Pyramid.");
  location.reload();
}

// LOOP
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
