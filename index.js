let bubbles = Array.from({ length: 10 }).map(bub => new Bubble());
console.log(bubbles);

let squares = Array.from({ length: 3 }).map(squ => new Square());

let countdown = new Timer();
let dead = false;
let canvas;
let button;
let trail = new Trail();
let mysound;
let crash;

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent("canvas-center");
  textFont("Anton");

  mysound = loadSound(
    "assets/zapsplat_multimedia_game_designed_bubble_pop_038_26304 (online-audio-converter.com).wav"
  );
  crash = loadSound(
    "assets/zapsplat_impacts_glass_small_object_smash_break_hit_on_cardboard_002_29023 (online-audio-converter.com).wav"
  );
  button = createButton("Play");
  button.hide();
  button.parent("canvas-center");
  button.position(644, 460);
  button.style(
    "color: white ; background-color: pink ; padding: 10px ; width: 150px; font-size: 18px; font-family: Anton; border-radius: 50px; border: none"
  );
  button.mouseOver(changeColor);
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
  if (dead || timer === 0)
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
  countdown.draw();
}

function reloadGame() {
  button.style(
    "color: white ; background-color: pink ; padding: 10px ; width: 150px; font-size: 18px; font-family: Anton; border-radius: 50px; border: none"
  );
  timer = 20;
  counter = 0;
  button.hide();
  if ((dead = true)) dead = false;
  bubbles.forEach(bubble => {
    bubble.setup();
  });
  squares.forEach(square => {
    square.setup();
  });
}

function changeColor() {
  button.style("color: pink; background-color: white");
}
