background(255,0,0);
size(400,400);

String nome = javax.swing.JOptionPane.showInputDialog("Qual é seu nome?");

textAlign(CENTER);

PFont f = createFont("Brush Script Std",40);

textFont(f);

text("Oi, " + nome, width/2,40);

String sDiametro = javax.swing.JOptionPane.showInputDialog("Qual é o diâmetro do círculo?");

float diametro = float(sDiametro);

fill(255,72,200);
stroke(0,0,0);
ellipse(width/2,height/2,diametro,diametro);
