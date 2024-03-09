//ex.9

int num = int(random(1,1000));
int cprimo = 0;

for (int i = 1; i <= num; i++) {
  if (num % i ==0) {
    cprimo++;
  }
}

if (cprimo == 2) {
  println(num, " é primo!");
}

else { 
  println(num, " não é primo!");
}
