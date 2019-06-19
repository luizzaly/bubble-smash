let bubbles = Array.from({ length: 10 }).map(bub => new Bubble());
console.log(bubbles);

let squares = Array.from({ length: 3 }).map(squ => new Square());

let dead = false;
let canvas;
let button;
let trail = new Trail();

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent("canvas-center");
  textFont("Anton");
  button = createButton("Play");
  button.hide();
  button.parent("canvas-center");
  button.position(644, 425);
  button.style(
    "color: white ; background-color: pink ; padding: 10px ; width: 150px; font-size: 18px; font-family: Anton; border-radius: 50px; border: none"
  );

  button.mousePressed(reloadGame);

  // button.style("display", "none");

  bubbles.forEach(bubble => {
    bubble.setup();
  });
  squares.forEach(square => {
    square.setup();
  });
}

function draw() {
  if (dead)
    return (
      background(0) &&
      fill("white") &&
      text(
        `Game Over! You have smashed ${counter} bubbles`,
        100,
        230,
        600,
        600
      ) &&
      textSize(30) &&
      textAlign(CENTER) &&
      button.show()
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
      squares.forEach(square => square.changePosition());
    }
  });
}

function reloadGame() {
  button.hide();
  if ((dead = true)) dead = false;
  bubbles.forEach(bubble => {
    bubble.setup();
  });
  squares.forEach(square => {
    square.setup();
  });
}
