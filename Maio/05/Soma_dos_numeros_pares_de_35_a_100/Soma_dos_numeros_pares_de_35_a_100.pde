int inicio = 35;
int fim = 100;
int soma = 0;

for (int i = inicio; i <= fim; i++) {
  if (i % 2 == 0){
    soma = soma + i;
  }
}
println("A soma dos valores pares entre 35 e 100 é igual a ", soma);
