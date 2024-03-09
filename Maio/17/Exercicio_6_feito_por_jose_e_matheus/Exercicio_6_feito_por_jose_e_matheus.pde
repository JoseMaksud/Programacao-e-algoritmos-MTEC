String sexoMouF = "F";
double peso = 0;
double altura = 1.60;


if (sexoMouF == "M") {
  peso=(72.7 * altura)- 58;
  println("Seu peso ideal é =",peso);
}

else if (sexoMouF == "F") {
  peso=(62.1 * altura)- 44.7;
  println("Seu peso ideal é =",peso);
}

else {
  println("Sexo invalido");
}
