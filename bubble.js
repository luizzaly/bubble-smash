class Bubble {
  constructor() {
    this.x = 100;
    this.y = 50;
    this.r = 10;
    this.maxBubble = 0;
  }
  setup() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(20, 25);
    noStroke();
    fill("pink");
    ellipse(this.x, this.y, this.r * 2);
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
