class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
  }

  update(speed) {
    this.x -= speed * 0.3;
    if (this.x <= -900) this.x = 0;
  }

  draw() {
    this.ctx.drawImage(Assets.images.sky, 0, 0, 900, 300);
    this.ctx.drawImage(Assets.images.sand, this.x, 300, 900, 200);
    this.ctx.drawImage(Assets.images.sand, this.x + 900, 300, 900, 200);
  }
}
