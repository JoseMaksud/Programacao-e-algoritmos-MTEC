var numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.table(numeros);

console.log('_______________');

for (let i = 0; i < numeros.length; i++) {
    var fim = numeros[i].length;
    for (let j = 0; j < fim; j++) {
        console.log('[' + i + ',' + j + '] = ' + numeros[i] [j]);
    }
}