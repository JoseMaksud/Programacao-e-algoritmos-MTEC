//ex.8

int num = 0;
int soma = 0;
int cont = 1;

while (num != 1) {
  num = int(random(1,10));
  if (num != 1) {
  println(cont,"° =", num);
  soma = soma + num;
  cont++;
  }
}

println("Soma dos valores =", soma);
