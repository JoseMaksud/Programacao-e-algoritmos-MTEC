double a = 10;
double g = 10;
String comb = "A";
double descAlc;
double descGas;
double total;

if ((comb == "A") & (a <= 20)) {
  descAlc = (2.90 * 0.03);
  total = (a * 2.90) - descAlc;
  println("O preço de", a,"litros é =", total);
}

else if ((comb == "A") & (a > 20)) {
  descAlc = (2.90 * 0.05);
  total = (a * 2.90) - descAlc;
  println("O preço de", a,"litros é =", total);
}

else if  ((comb == "G") & (g <= 20)) {
  descGas = (3.30 * 0.04);
  total = (g * 3.30) - descGas;
  println("O preço de", g,"litros é =", total);
}

else if ((comb == "G") & (g > 20)) {
  descGas = (3.30 * 0.06);
  total = (g * 3.30) - descGas;
  println("O preço de", g,"litros é =", total);
}
