size(400,400);

String nome = javax.swing.JOptionPane.showInputDialog("Qual é seu nome?");

textAlign(CENTER);

PFont f = createFont("",20);

textFont(f);

text("Oi, " + nome, 60, 20);

String sDiametro = javax.swing.JOptionPane.showInputDialog("Qual é o diâmetro do círculo?");

float diametro = float(sDiametro);

ellipse(width/2,height/2,diametro,diametro);
