let trailarr = [];
let a = 0;

class Trail {
  draw() {
    trailarr.push([mouseX, mouseY]);
    for (let i = 0; i < trailarr.length; i++) {
      noStroke();
      fill(255, 20, 189, a);
      ellipse(trailarr[i][0], trailarr[i][1], 8 + i * 0.5);
      if (a > 255) {
        trailarr.shift();
        a = 0;
      }
      a += 8;
    }
  }
}
