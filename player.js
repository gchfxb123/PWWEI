class Player {
  constructor() {
    this.x = 100;
    this.y = CONFIG.groundY;
    this.vy = 0;
    this.width = 80;
    this.height = 60;
    this.onGround = true;
  }

  update() {
    if (Input.jump && this.onGround) {
      this.vy = CONFIG.jumpForce;
      this.onGround = false;
      AudioManager.playJump();
    }

    applyGravity(this);
  }

  draw(ctx) {
    ctx.drawImage(
      Assets.images.camel,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
  }
}
