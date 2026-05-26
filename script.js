const canvas =
document.getElementById("game");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

// ======================================
// PLAYER
// ======================================

const player = {

  x: 300,
  y: 300,

  width: 40,
  height: 40,

  speed: 5,

  color: "#3b82f6",

  health: 100,

  hunger: 100,

  tool: "hand"

};

// ======================================
// RECURSOS
// ======================================

let wood = 0;
let stone = 0;

// ======================================
// BLOCOS
// ======================================

const trees = [];
const rocks = [];
const houses = [];
const zombies = [];

// ======================================
// GERAR MAPA
// ======================================

for (let i = 0; i < 15; i++) {

  trees.push({

    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    width: 50,
    height: 70,

    hp: 5

  });

}

for (let i = 0; i < 12; i++) {

  rocks.push({

    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    width: 50,
    height: 50,

    hp: 8

  });

}

// ======================================
// CONTROLES
// ======================================

const keys = {};

window.addEventListener(
  "keydown",
  e => {

    keys[e.key] = true;

  }
);

window.addEventListener(
  "keyup",
  e => {

    keys[e.key] = false;

  }
);

// ======================================
// MOVIMENTO
// ======================================

function updatePlayer() {

  if (keys["w"])
    player.y -= player.speed;

  if (keys["s"])
    player.y += player.speed;

  if (keys["a"])
    player.x -= player.speed;

  if (keys["d"])
    player.x += player.speed;

}

// ======================================
// DESENHAR PLAYER
// ======================================

function drawPlayer() {

  ctx.fillStyle =
  player.color;

  ctx.fillRect(

    player.x,
    player.y,

    player.width,
    player.height

  );

}

// ======================================
// ÁRVORES
// ======================================

function drawTrees() {

  trees.forEach(tree => {

    // tronco

    ctx.fillStyle = "#6b3e26";

    ctx.fillRect(

      tree.x + 15,
      tree.y + 40,

      20,
      30

    );

    // folhas

    ctx.fillStyle = "#2e8b57";

    ctx.beginPath();

    ctx.arc(

      tree.x + 25,
      tree.y + 20,

      30,

      0,
      Math.PI * 2

    );

    ctx.fill();

  });

}

// ======================================
// PEDRAS
// ======================================

function drawRocks() {

  rocks.forEach(rock => {

    ctx.fillStyle = "gray";

    ctx.beginPath();

    ctx.arc(

      rock.x,
      rock.y,

      30,

      0,
      Math.PI * 2

    );

    ctx.fill();

  });

}

// ======================================
// CASAS
// ======================================

function drawHouses() {

  houses.forEach(house => {

    ctx.fillStyle = "#8b5a2b";

    ctx.fillRect(

      house.x,
      house.y,

      100,
      100

    );

    ctx.fillStyle = "#5c3317";

    ctx.fillRect(

      house.x + 30,
      house.y + 50,

      30,
      50

    );

  });

}

// ======================================
// ZUMBIS
// ======================================

function drawZombies() {

  zombies.forEach(zombie => {

    ctx.fillStyle = "green";

    ctx.fillRect(

      zombie.x,
      zombie.y,

      40,
      40

    );

  });

}

// ======================================
// IA ZUMBI
// ======================================

function updateZombies() {

  zombies.forEach(zombie => {

    if (player.x > zombie.x)
      zombie.x += zombie.speed;

    if (player.x < zombie.x)
      zombie.x -= zombie.speed;

    if (player.y > zombie.y)
      zombie.y += zombie.speed;

    if (player.y < zombie.y)
      zombie.y -= zombie.speed;

  });

}

// ======================================
// MINERAR
// ======================================

canvas.addEventListener(
  "click",
  () => {

    trees.forEach((tree, index) => {

      const dx =
      player.x - tree.x;

      const dy =
      player.y - tree.y;

      const dist =
      Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {

        tree.hp--;

        if (tree.hp <= 0) {

          trees.splice(index, 1);

          wood += 10;

        }

      }

    });

    rocks.forEach((rock, index) => {

      const dx =
      player.x - rock.x;

      const dy =
      player.y - rock.y;

      const dist =
      Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {

        rock.hp--;

        if (rock.hp <= 0) {

          rocks.splice(index, 1);

          stone += 10;

        }

      }

    });

  }
);

// ======================================
// EQUIPAR
// ======================================

function equipTool(tool) {

  player.tool = tool;

}

// ======================================
// CASA
// ======================================

function craftHouse() {

  if (
    wood >= 30 &&
    stone >= 20
  ) {

    wood -= 30;
    stone -= 20;

    houses.push({

      x: player.x + 80,
      y: player.y

    });

  }

}

// ======================================
// SPAWN ZUMBI
// ======================================

function spawnZombie() {

  zombies.push({

    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    speed: 1.5

  });

}

// ======================================
// HUD
// ======================================

function updateHUD() {

  document.getElementById(
    "health"
  ).innerText =
  player.health;

  document.getElementById(
    "hunger"
  ).innerText =
  player.hunger;

  document.getElementById(
    "wood"
  ).innerText =
  wood;

  document.getElementById(
    "stone"
  ).innerText =
  stone;

  document.getElementById(
    "inventoryItems"
  ).innerHTML =

  `
  🪵 Madeira: ${wood}<br>
  🪨 Pedra: ${stone}<br>
  🛠 Ferramenta: ${player.tool}
  `;

}

// ======================================
// LOOP
// ======================================

function gameLoop() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  updatePlayer();

  updateZombies();

  drawTrees();

  drawRocks();

  drawHouses();

  drawZombies();

  drawPlayer();

  updateHUD();

  requestAnimationFrame(
    gameLoop
  );

}

gameLoop();