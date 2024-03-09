var matr = [
    [1,2,3,4],
    [8,9,3,2],
    [5,6,3,2],
    [7,8,4,3]
];

var teste1 = 0;
var teste2 = 0;
var teste3 = 0;
var teste4 = 0;

console.table(matr);

for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr.length; j++) {
        if (i == 2) {
            teste1 = teste1 + matr[i][j]; 
        }
        if (j == 3) {
            teste2 = teste2 + matr[i][j];
        }
        if (matr[i][j] >= 5) {
            teste3 = teste3 + matr[i][j];
        }
        teste4 = teste4 + matr[i][j];
    }
}

console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log(teste4);