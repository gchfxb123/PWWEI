const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

Assets.load();
AudioManager.init();
Input.init();

const bg = new Background(ctx);
const player = new Player();
let obstacles = [];

let frame = 0;
let score = 0;
let speed = CONFIG.baseSpeed;

AudioManager.playMusic();

function loop() {
  if (!UI.paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    speed += CONFIG.speedIncrease;
    score++;

    bg.update(speed);
    bg.draw();

    player.update();
    player.draw(ctx);

    if (frame % CONFIG.obstacleSpawnRate === 0) {
      const type = Math.random() > 0.5 ? "cactus" : "rock";
      obstacles.push(new Obstacle(type, speed));
    }

    obstacles.forEach(o => {
      o.update();
      o.draw(ctx);
      if (o.hit(player)) {
        alert("Game Over");
        location.reload();
      }
    });

    obstacles = obstacles.filter(o => o.x > -50);

    UI.update(score, speed);
    frame++;
  }

  requestAnimationFrame(loop);
}

loop();
