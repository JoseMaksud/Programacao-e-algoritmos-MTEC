//ex.4

int num = 0;
int cont = 1;
int soma = 0;

while (cont <= 10) {
  num = int(random(0,10));
  println(cont,"º =", num);
  soma = soma + num;
  cont++;
}

double media = soma / 10;

println("A média dos 10 valores gerados é igual a ", media);
