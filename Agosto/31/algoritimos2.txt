var numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.table(numeros);

console.log('_______________');

var somadp = 0;
var somads = 0;

for (let i = 0; i < numeros.length; i++) {
    var fim = numeros[i].length;
    for (let j = 0; j < fim; j++) {
        console.log('[' + i + ',' + j + '] = ' + numeros[i] [j]);
        if (i == j) {
            somadp = somadp + numeros[i] [j];
        }
        if ((i+1)==(j+1)) {
            somads = somads + numeros[i] [j];
        }
    }
}
console.log("Soma da diagonal Principal = ", somadp);
console.log("Soma da diagonal Secundária = ", somads);