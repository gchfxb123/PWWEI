class Obstacle {
  constructor(type, speed) {
    this.type = type;
    this.x = 900;
    this.y = CONFIG.groundY;
    this.speed = speed;
    this.width = 40;
    this.height = 60;
  }

  update() {
    this.x -= this.speed;
  }

  draw(ctx) {
    const img = this.type === "cactus"
      ? Assets.images.cactus
      : Assets.images.rock;

    ctx.drawImage(img, this.x, this.y - this.height, this.width, this.height);
  }

  hit(player) {
    return (
      player.x < this.x + this.width &&
      player.x + player.width > this.x &&
      player.y < this.y &&
      player.y + player.height > this.y - this.height
    );
  }
}
