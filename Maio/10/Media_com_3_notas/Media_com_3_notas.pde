//calcule a média e retorna se o estudante 
//está aprovado, em exame ou reprovado
//média >= 6 - aprovado
//média >= 3 - exme
//médoa < 3 - reprovado

double nota1 = 8;
double nota2 = 10;
double nota3= 10;
double media = (nota1 + nota2 + nota3) / 3;

if ((media >= 6) & (media <=10)){
  println(media, ": aluno aprovado!");
}

else if ((media >= 3) & (media < 6)){
  println(media, ": aluno de exame!");
}

else if ((media >= 0) & (media < 3)){
  println(media, ": aluno reprovado!");
}

else {
  println("Média inválida");
}
  
