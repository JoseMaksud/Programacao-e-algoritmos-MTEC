int teste1 = 0;
int teste2 = 0;

while (teste1 <= 1000) { 
  if ((teste1 % 5 == 0) & (teste1 % 12 == 0)) {
    println(teste1);
    teste2 = teste2 + teste1;
  }
  teste1++;
}
println("____________");
println(teste2);
