var lista = [10,20,30,40,50];

var i = 0;

var teste1 = 0;
var teste2 = 0;

while (i <= 5) {
    if (lista[i] % 2 == 0) {
        teste1 = teste1 + i;
        teste2 = teste2 + lista[i];
    }
    i++;
}

console.log(teste1);
console.log(teste2);

//enquanto o i for monor ou igual a 5
//se o teste 1 q é o numero da lista for par soma o i
//e o teste2 recebe ele mesmo mais o numero da lista
//e depois acrescenta i