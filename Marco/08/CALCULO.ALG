Algoritmo "Calculo"


Var
   n1,n2,Res:real
   op:caracter

Inicio
      escreval("Digite o 1° valor")
      leia(n1)
      escreval("Digite o 2° valor")
      leia(n2)
      escreval("Digite a operação")
      leia(op)
      escolha op
      caso "+"
      Res:=n1+n2
      caso "-"
      Res:=n1-n2
      caso "*"
      Res:=n1*n2
      caso "/"
      Res:=n1/n2
      fimescolha
      escreval("Resultado=",Res)


Fimalgoritmo