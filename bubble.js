var counter = 0;

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
  }

  draw() {
    noStroke();
    fill("pink");
    ellipse(this.x, this.y, this.r * 2);
  }

  checkCollision() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      mysound.play();
      counter += 1;

      return true;
    } else {
      return false;
    }
  }
}
