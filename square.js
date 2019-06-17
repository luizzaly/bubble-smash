class Square {
  constructor() {
    this.x = 300;
    this.y = 70;
    this.maxSquares = 3;
  }

  setup() {
    this.randomAppear();
  }

  randomAppear() {
    this.x = random(0, width);
    this.y = random(0, height);
    noStroke();
    fill("blue");

    square(this.x, this.y, 70);
  }

  draw() {
    //rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
  }
}
