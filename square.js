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
  }

  draw() {
    noStroke();
    fill("#BFF5F4");
    square(this.x, this.y, this.d);
  }

  changePosition() {
    let randX = random(0, width);
    let randY = random(0, height);

    while (
      mouseX > randX &&
      mouseX < randX + 70 &&
      mouseY > randY &&
      mouseY < randY + 70
    ) {
      randX = random(0, width);
      randY = random(0, height);
    }

    this.x = randX;
    this.y = randY;
  }
  /*
  changePositionAgain() {
    if (this.x === mouseX && this.y === mouseY) changePosition();
  }
  */

  checkCollision() {
    let d = dist(mouseX, mouseY, this.x + this.d / 2, this.y + this.d / 2);
    if (d < this.d / 2) {
      return true;
    } else {
      return false;
    }
  }
}
