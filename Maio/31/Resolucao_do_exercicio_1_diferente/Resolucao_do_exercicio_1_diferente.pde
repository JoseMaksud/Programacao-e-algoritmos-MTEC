//ex.1

int inicio = 50;

int fim = 200; 

int cont = 0;

while (inicio <= fim) {
  if (inicio % 2 == 0){
    println(cont,"º = ",inicio);
    cont++;
  }
  inicio++;
}

println("A quantidade de pares entre 50 e 200 é",cont);
