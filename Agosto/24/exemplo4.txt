// a partir dos vetores abaixo exibir a soma, subtração, multiplicação
// e divisão dos mesmos.

var vet1 = [10,20,30,40,50];
var vet2 = [50,40,20,10,30];

console.log("Vetor 1:");

for (var i = 0; i <= vet1.length-1;i++) {
    console.log(vet1[i]);
}

console.log("___________________");
console.log("Vetor 2:");

for (var i = 0; i <= vet2.length-1;i++) {
    console.log(vet2[i]);
}

console.log("___________________");
console.log("Soma de vetor 1 e 2:");

for (var i = 0; i <= vet1.length-1;i++) {
    console.log(vet1[i]+vet2[i]);
}   

console.log("___________________");
console.log("Subtração de vetor 1 e 2:");

for (var i = 0; i <= vet1.length-1;i++) {
    console.log(vet1[i]-vet2[i]);
}   

console.log("___________________");
console.log("Multiplicação de vetor 1 e 2:");

for (var i = 0; i <= vet1.length-1;i++) {
    console.log(vet1[i]*vet2[i]);
}   

console.log("___________________");
console.log("Divisão de vetor 1 e 2:");

for (var i = 0; i <= vet1.length-1;i++) {
    console.log(vet1[i]/vet2[i]);
}   