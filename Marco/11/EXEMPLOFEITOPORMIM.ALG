Algoritmo "Exemplofeitopormim"


Var
   Alt,pesoM,pesoF:Real
   sexo,op:caracter


Inicio
      escreval("Digite sua altura")
      leia(Alt)
      escreval("Digite seu sexo")
      leia(sexo)
      se sexo="Masculino" entao
      pesoM:=(72.7*Alt)-58
      escreval("Seu peso ideal é=",pesoM)
      senao
      se sexo="Feminino" entao
      pesoF:=(62.1*Alt)-44.7
      escreval("Seu peso ideal é=",pesoF)
      fimse
      fimse

Fimalgoritmo