//ex.3 - intervalo - tabuada 

int inic = 3;
int fim = 6;
int cont;

while (inic <= fim) {
  cont = 0;
  while (cont <= 10) {
    println(inic, "X", cont, "=", inic*cont);
    cont++;
  }
  print("----------------");
  println("");
  inic++;
}
