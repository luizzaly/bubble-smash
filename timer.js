let timer = 20;

class Timer {
  draw() {
    fill("white");
    textSize(30);
    text(timer + "sec", 710, 50);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer == 0) {
    }
  }
}
