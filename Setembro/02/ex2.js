var matr = [
    [12,24,38,41],
    [81,20,32,29],
    [53,66,30,21],
    [72,82,48,31]
];

var teste1 = 0;
var teste2 = 0;
var teste3 = 0;
console.table(matr);

for (let i = 0; i < matr.length; i++){
    for (let j = 0; j < matr.length; j++) {
        if (i == 3) {
            teste1 = teste1 + matr[i][j];
        }
        if (j == 1) {
            teste2 = teste2 + matr[i][j];
        }
        if (matr[i][j] >= 3) {
            teste3 = teste3 + matr[i][j];
        }
    }
}
console.log(teste1);
console.log(teste2);
console.log(teste3);