class Square {
  constructor() {
    this.x = 300;
    this.y = 70;
    this.d = 70;
    this.maxSquares = 3;
  }

  setup() {
    this.x = random(0, width);
    this.y = random(0, height);
    // this.randomAppear();
  }

  draw() {
    noStroke();
    fill("#BFF5F4");
    square(this.x, this.y, this.d);
  }

  changePosition() {
    this.x = random(0, width);
    this.y = random(0, height);
  }

  checkCollision() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.d) {
      return true;
    } else {
      return false;
    }
  }
}
