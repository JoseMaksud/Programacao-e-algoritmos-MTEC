//exercício 5

int a = 1;
int b = 2;
int c = 3;

if ((a >= b) & (a >= c)) {
  if (b >= c) {
    println(a,"-",b,"-",c);
  }
  else {
    println(a,"-",c,"-",b);
  }
}

else if ((b >= a) & (b >= c)) {
  if (a >= c) {
    println(b,"-",a,"-",c);
  }
  else {
    println(b,"-",c,"-",a);
  }
}

else {
  if (a >= b) {
    println(c,"-",a,"-",b);
  }
  else {
    println(c,"-",b,"-",a);
  }
}
  
