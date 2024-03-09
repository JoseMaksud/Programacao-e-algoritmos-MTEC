var dados = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

var teste1 = 0;
var teste2 = 0;
var teste3 = 0;

for (let i = 0; i < dados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
        if (j == 2) {
            teste1 = teste1 + dados[i][j];
        }
        if (i == 0) {
            teste2 = teste2 + dados[i][j];
        }
        if (dados[i][j] % 2 == 1) {
            teste3 = teste3 + dados[i][j];
        }
    }
}

console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log(teste1 - teste2);
console.log(teste1 * teste2);
console.log(teste1 + teste2 + teste3);
console.log(teste1 + teste3);