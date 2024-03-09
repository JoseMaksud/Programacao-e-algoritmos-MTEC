var vet1 = [0,0,0,0,0];
var vet2 = [0,0,0,0,0];
var somavet = [0,0,0,0,0];
var subtracaovet = [0,0,0,0,0];
var multiplicacaovet = [0,0,0,0,0];
var divisaovet = [0,0,0,0,0];
var quadradovet = [0,0,0,0,0];
var cubovet = [0,0,0,0,0];

for (let i = 0; i < vet1.length; i++) {
    vet1[i] = parseFloat(prompt("Posição: " + (i + 1) + " vetor A"));
}

for (let i = 0; i < vet2.length; i++) {
    vet2[i] = parseFloat(prompt("Posição: " + (i + 1) + " vetor B"));
}

for (let i = 0; i < somavet.length; i++) {
    somavet[i] = vet1[i] + vet2[i];
}

for (let i = 0; i < subtracaovet.length; i++) {
    subtracaovet[i] = vet1[i] - vet2[i];
}

for (let i = 0; i < multiplicacaovet.length; i++) {
    multiplicacaovet[i] = vet1[i] * vet2[i];
}

for (let i = 0; i < divisaovet.length; i++) {
    divisaovet[i] = vet1[i] / vet2[i];
}

for (let i = 0; i < quadradovet.length; i++) {
    quadradovet[i] = vet1[i] * vet1[i];
}

for (let i = 0; i < cubovet.length; i++) {
    cubovet[i] = vet2[i] * vet2[i] * vet2[i];
}



console.log("Dados do vetor A");
for (let i = 0; i < vet1.length; i++) {
    console.log(vet1[i]);
}

console.log("Dados do vetor B");
for (let i = 0; i < vet2.length; i++) {
    console.log(vet2[i]);
}

console.log("Soma dos vetores A e B");
for (let i = 0; i < somavet.length; i++) {
    console.log(somavet[i]);
}  

console.log("Subtração dos vetores A e B");
for (let i = 0; i < subtracaovet.length; i++) {
    console.log(subtracaovet[i]);
} 

console.log("Multiplicação dos vetores A e B");
for (let i = 0; i < multiplicacaovet.length; i++) {
    console.log(multiplicacaovet[i]);
} 

console.log("Divisão dos vetores A e B");
for (let i = 0; i < divisaovet.length; i++) {
    console.log(divisaovet[i]);
} 

console.log("Quadrado dos vetores A");
for (let i = 0; i < quadradovet.length; i++) {
    console.log(quadradovet[i]);
} 

console.log("Cubo dos vetores B");
for (let i = 0; i < cubovet.length; i++) {
    console.log(cubovet[i]);
} 