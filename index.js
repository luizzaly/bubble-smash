let bubbles = Array.from({ length: 10 }).map(bub => new Bubble());
console.log(bubbles);

let squares = Array.from({ length: 3 }).map(squ => new Square());

let dead = false;

let button;
let trail = new Trail();

function setup() {
  createCanvas(800, 600);

  bubbles.forEach(bubble => {
    bubble.setup();
  });
  squares.forEach(square => {
    square.setup();
  });

  //particle = new Particle(100, 100);
}
function draw() {
  if (dead)
    return (
      background(0) &&
      fill("white") &&
      text(
        `Game Over! You have smashed ${counter} bubbles`,
        80,
        80,
        600,
        600
      ) &&
      textSize(20) &&
      textAlign(CENTER)
    );
  clear();
  background("black");
  trail.draw();

  squares.forEach(square => {
    square.draw();

    if (square.checkCollision()) {
      console.log("dead");
      dead = true;
    }
  });

  bubbles.forEach((bubble, i) => {
    bubble.draw();

    if (bubble.checkCollision()) {
      bubbles.splice(i, 1);
      bubbles.push(new Bubble());
      bubbles[bubbles.length - 1].setup();
      //squares.unshift(new Square(), new Square(), new Square());
      squares.forEach(square => square.changePosition());
    }
  });
}

// function checkCollision() {
//   for (let i = 0; i < bubbles.length; i++) {
//     if (bubbles[i].clicked(mouseX, mouseY)) {
//       console.log("clicked");
//       bubbles.splice(i, 1);
//     }
//   }
//   //bubbleCounter = 0;
// }
