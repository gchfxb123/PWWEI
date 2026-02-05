const UI = {
  scoreEl: document.getElementById("score"),
  speedEl: document.getElementById("speed"),
  paused: false,

  update(score, speed) {
    this.scoreEl.textContent = score;
    this.speedEl.textContent = speed.toFixed(2);
  }
};

document.getElementById("pauseBtn").onclick = () => {
  UI.paused = !UI.paused;
};
