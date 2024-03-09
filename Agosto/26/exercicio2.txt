var lista = [-20, -15, -10, -5, 0, 5, 10, 15, 20];

var i = 0;

var teste1 = 0;
var teste2 = 0;

while (i <= 8){
    if (lista[i] > 0){
        teste1 = teste1 + lista[i];
    }
    else {
        teste2 = teste2 + lista[i];
    }
    i++
}
console.log(teste1);
console.log(teste2);

//enquanto o i for menor ou igual a 8
//e se o número da lista for maior que 0 então
//teste1 recebe ele + o numero da lista
//senao
//teste2 recebe teste2 mais o valor da lista
//i aumenta 1 