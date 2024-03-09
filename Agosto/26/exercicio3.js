var lista = [1,2,3,4,5,6,7,8,9,10,11];

var teste1 = 0;

for (var i = 0; i <= 10; i++) {
    if (lista[i] % 3 == 0) {
        teste1 = teste1 + lista[i];
    }
}

console.log(teste1);

//para i recebe 0 e for menor ou igual a 10
//e se o numero da lista dividido por 3 for igual a 0
//teste1 + o valor da lista e acrescenta no i