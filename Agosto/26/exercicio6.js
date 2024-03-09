var vet1 = [1,2,3];
var vet2 = [3,2,1];
var vet3 = [5,4,3];
var i = 0;

while (i <= vet1.length-1) {
    console.log(vet1[i] * vet3[i]);
    i++
}
console.log("________________");
i = 0;
while (i <= vet2.length-1) {
    console.log(vet3[i] / vet2[i]);
    i++;
}
console.log("________________");
i = 0;
var teste1 = 1;
while (i <= vet3.length-1) {
    teste1 = vet3[i] * vet3[i] * vet3[i];
    console.log(teste1);
    i++;
}

//enquanto o i for menor ou igual que os numeros do vetor 1
//exibe o vetor 1 multiplicado pelo vetor 3
//i aumenta 1
//separação
//enquanto i for menor ou igual que os valores do vetor 2
//exibe o vetor 3 dividido pelo vetor 2
//i aumenta 1
//separação
//enquato o i for menor ou igual que os valores do vetor 3
//exibe o triplo desse numero
//i aumenta 1