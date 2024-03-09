Algoritmo "Parimpar"
//Par ou impar de outra forma

Var
   n1,n2,Soma,Resto:Inteiro


Inicio
      escreval("Digite 2 números inteiros")
      leia(n1,n2)
      Soma:=n1+n2
      Resto:=Soma mod 2
      escolha Resto
      caso 0
      escreval(Soma," é par")
      caso 1
      escreval(Soma," é ímpar")
      fimescolha

      

Fimalgoritmo