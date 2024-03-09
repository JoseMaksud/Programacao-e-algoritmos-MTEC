String comb = "A";
double litro;
int qtde = 10;
double valor;

if (comb == "A") {
  litro = 2.90;
  valor = qtde * litro;
  if (qtde <= 20) {
    valor = valor - valor * 0.03;
    println("Total a pagar - Alcool - (3% desc.) =",valor);
  }
  else {
    valor = valor - valor * 0.05;
    println("Total a pagar - Alcool - (5% desc.) =",valor);
  }
}

else if (comb == "G") {
  litro = 3.30;
  valor = qtde * litro;
  if (qtde <= 20) {
    valor = valor - valor * 0.04;
    println("Total a pagar - Gasolina - (4% desc.) =",valor);
  }
  else {
    valor = valor - valor * 0.06;
    println("Total a pagar - Gasolina - (6% desc.) =",valor);
  }
}

else {
  println("Combustível inválido!");
}
