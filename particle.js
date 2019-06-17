/*
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }

  update() {
    this.y += random(-10, 10);
    this.x += random(-10, 10);

    var vector = createVector(this.x, this.y);
    this.history.push(vector);

    if (this.history.length > 10) {
      this.history.splice(0, 1);
    }
  }

  show() {
    noStroke();
    fill("red");
    ellipse(this.x, this.y, 24, 24);

    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      ellipse(pos.x, pos.y, i, i);
    }
  }
}
*/
