Algoritmo "Calculo 2"


Var
   Num,Res:inteiro
   Op:caracter

Inicio
      escreval("Digite um número")
      leia(Num)
      escreval("Digite d p/ dobro e t p/ triplo")
      leia(Op)
      escolha Op
      caso "D"
      Res:=Num*2
      escreval("Dobro de",Num," é",res)
      caso "T"
      Res:=Num*3
      escreval("Triplo de",Num," é",res)
      outrocaso
      escreval("Opção inválida")
      fimescolha


Fimalgoritmo