int cor = 0;
boolean muda = true;

void setup() {
  size(500,500);
  textSize(128);
}

void draw() {
  PImage img1, img2;
  img1 = loadImage("fundo.png");
  img2= loadImage("fundo2.jpg");
  
  
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
      background(img1);
    }
  }
  else if (cor >= 0) {
    cor--;
    if (cor ==0) {
      muda = true;
      background(img2);
    }
  }
}
