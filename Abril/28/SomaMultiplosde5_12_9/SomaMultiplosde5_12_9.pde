// soma múltiplos de 5, 12 e 9 entre 0 e 10000

int teste1 = 0;
int teste2 = 0;

while (teste1 <= 100000) {
   if ((teste1 % 5 == 0) & (teste1 % 12 == 0) & (teste1 % 9 == 0)){
     println(teste1);
     teste2 = teste2 + teste1; 
   }
   teste1++;
}
println("__________");
println(teste2);
