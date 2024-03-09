//ex.1 

int qtde = 30;
int n1 = 1;
int n2 = 1;
int prox;
int cont = 3;

println("1º valor =",n1);
println("2º valor =",n2);

while (cont <= qtde) {
  prox = n1 + n2;
  println(cont, "ºvalor = " , prox);
  n1 = n2;
  n2 = prox;
  cont++;
}
