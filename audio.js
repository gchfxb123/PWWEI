const AudioManager = {
  music: new Audio("assets/music.mp3"),
  jump: new Audio("assets/jump.wav"),

  init() {
    this.music.loop = true;
    this.music.volume = 0.5;
  },

  playMusic() {
    this.music.play();
  },

  playJump() {
    this.jump.currentTime = 0;
    this.jump.play();
  }
};
