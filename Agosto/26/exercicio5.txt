var vet1 = [1, 3, 5, 2, 1];
var vet2 = [80, 20, 50, 30, 70];
var i = 0;
var teste1 = 1;
var teste2 = 0;
var teste3 = 0;

while (i <= vet1.length-1){
    teste1 = teste1 * vet1[1];
    i++;
}
console.log(teste1);
console.log("__________________");

var i = 0;

while (i <= vet2.length-1){
    teste2 = teste2 + vet2[1];
    i++;
}

console.log(teste2);
console.log("__________________");
console.log(teste1 + teste2);
console.log("__________________");
console.log(teste2 - teste1);
console.log("__________________");
console.log(teste2 / teste1);
console.log("__________________");
console.log(teste1 * teste1);
console.log("__________________");

//enquanto i for menor ou igua aos vetores da lista
//teste 1 recebe ele mesmo multiplicado pela posicao da lista do vetor 1
//i aumenta 1
//exibe o valor do teste1
//enquanto o i for menor ou igual aos valores do vetor 2
//teste2 recebe ele mesmo mais o valor determinado da picao do vetor 2
//i aumenta 1
//exibe o teste 2
//exibe o teste 1 mais teste 2
//exibe o teste 2 menos teste 1
//exibe o teste 2 dividido por teste 1
//exibe o teste 1 multiplicado por teste 1