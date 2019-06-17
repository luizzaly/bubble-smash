let bubbles = Array.from({ length: 10 }).map(bub => new Bubble());
console.log(bubbles);

let squares = Array.from({ length: 3 }).map(squ => new Square());

//let bubbleCounter = 0;
//let n = null;
var particle;

function setup() {
  createCanvas(800, 600);
  background("black");

  bubbles.forEach(bubble => {
    bubble.setup();
  });
  squares.forEach(square => {
    square.setup();
  });
  //particle = new Particle(100, 100);
}
function draw() {
  //particle.update();
  //particle.show();
  //if (bubbleCounter < 1)
  // bubbles.forEach(bubble => {
  //  bubble.draw();
  // });
  // bubbleCounter++;
  // mousePressed();
  //bubbles[0].randomAppear();
  //noLoop();
}
function mousePressed() {
  checkCollision();
}

function checkCollision() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clicked(mouseX, mouseY)) {
      console.log("clicked");
      bubbles.splice(i, 1);
    }
  }
  //bubbleCounter = 0;
}
