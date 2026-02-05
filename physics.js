function applyGravity(entity) {
  entity.vy += CONFIG.gravity;
  entity.y += entity.vy;

  if (entity.y >= CONFIG.groundY) {
    entity.y = CONFIG.groundY;
    entity.vy = 0;
    entity.onGround = true;
  }
}
