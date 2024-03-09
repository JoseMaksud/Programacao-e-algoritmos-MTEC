var vetor = [5, 10, 25, 30, 45, 50];

var soma = 0;
var somaPar = 0;
var somaImpar = 0;

for (var i =0; i <= vetor.length-1;i++) {
    soma = soma + vetor[i];
    if (vetor[i] % 2 == 0) {
        somaPar = somaPar + vetor[i];
    }
    else {
        somaImpar = somaImpar + vetor[i];
    }
}

console.log("Soma total = " + soma);
console.log("Soma pares = " + somaPar);
console.log("Soma ímpares = " + somaImpar);