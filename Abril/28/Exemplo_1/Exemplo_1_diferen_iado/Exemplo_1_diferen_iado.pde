//exemplo 1
int teste1 = 0;
int teste2 = 0;

while (teste1 <= 100){
  if (teste1 % 9 == 0){
    println(teste1);
    teste2 = teste2 + teste1;
  }
  teste1++;
}
println("=======");
println(teste2);