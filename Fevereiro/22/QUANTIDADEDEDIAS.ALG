Algoritmo "quantidadededias"
//Digite uma quantidade de dias e converta em anos,meses e dias.
Var
Dias,Anos,Meses,Restodias:inteiro


Inicio
escreval("Digite a quantidade de dias")
leia(Dias)
Anos:=Dias Div 365
Restodias:=Dias Mod 365
Meses:=Restodias Div 30
Restodias:=Restodias Mod 30
escreval("Em",Dias," Dias temos",Anos," Ano(s)",Meses," Mes(es) e",Restodias," Dia(s)")


Fimalgoritmo