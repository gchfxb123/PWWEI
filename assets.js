const Assets = {
  images: {},
  load() {
    const list = {
      camel: "assets/camel.png",
      cactus: "assets/cactus.png",
      rock: "assets/rock.png",
      sand: "assets/sand.png",
      sky: "assets/sky.png",
    };

    for (let key in list) {
      const img = new Image();
      img.src = list[key];
      this.images[key] = img;
    }
  }
};
