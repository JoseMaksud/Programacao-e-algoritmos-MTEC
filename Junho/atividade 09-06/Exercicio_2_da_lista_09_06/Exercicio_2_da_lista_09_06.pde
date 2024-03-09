//ex.2 - intervalos números primos

int inic = 1;
int fim = 100;
int cont = 1;
int cprimo = 0;

while (inic <= fim) {
  cont = 1;
  cprimo = 0;
  
  while (cont <= inic) {
    if (inic % cont == 0) {
      cprimo++;
    }
    cont ++;
  }
   if (cprimo == 2) {
    println(inic," é primo!");
   }
   inic++;
}
