//exemplo 1
// o algoritmo exibe os múltiplos de 9 entre 0 e e 100
// e ao final exibe a soma destes valores
int teste1 = 0;
int teste2 = 0;

while (teste1 <= 100){
   if (teste1 % 9 == 0) {
      println(teste1);
      teste2 = teste2 + teste1; 
   }
   teste1++;
}
println("=======");
println(teste2);
