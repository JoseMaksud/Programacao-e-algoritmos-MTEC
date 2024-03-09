int cor = 0;
boolean muda = true;

void setup() {
  size(500,500);
  PImage img;
  img = loadImage("fundo.png");
  background(img);
  textSize(128);
}

void draw() {
  text("word", 40, 120);
  fill(cor);
  text("word", 40, 240);
  fill(cor);
  text("word", 40, 360);
  fill(cor);
  
  if ((cor <= 255) & (muda == true)) {
    cor++;
    if (cor == 255) {
      muda = false;
    }
  }
  else if (cor >= 0) {
    cor--;
    if (cor ==0) {
      muda = true;
    }
  }
}
