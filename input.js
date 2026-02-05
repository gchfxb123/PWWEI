const Input = {
  jump: false,

  init() {
    window.addEventListener("keydown", e => {
      if (e.code === "Space") this.jump = true;
    });

    window.addEventListener("keyup", e => {
      if (e.code === "Space") this.jump = false;
    });

    window.addEventListener("touchstart", () => this.jump = true);
    window.addEventListener("touchend", () => this.jump = false);
  }
};
