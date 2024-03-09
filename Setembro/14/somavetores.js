var vet1 = [0,0,0,0,0];
var vet2 = [0,0,0,0,0];
var vet3 = [0,0,0,0,0];
var subtvet23 = [0,0,0,0,0];
var multvet12 = [0,0,0,0,0];
var multvet123 = [0,0,0,0,0];
var divvet31 = [0,0,0,0,0];
var quadvet2 = [0,0,0,0,0];
var cubvet1 = [0,0,0,0,0];
var medvet12 = [0,0,0,0,0];
var medvet23 = [0,0,0,0,0];
var medvet123 = [0,0,0,0,0];
var antvet1 = [0,0,0,0,0];
var sucvet3 = [0,0,0,0,0];


//outra aula: 
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

for (let i = 0; i < vet3.length; i++) {
    vet3[i] = parseFloat(prompt("Posição: " + (i + 1) + " vetor C"));
}

// exibir os dados dos vetores preenchidos
console.log("Preencher os dados do vetor A: ");
for (let i = 0; i < vet1.length; i++) {
    console.table(vet1[i])
}

console.log("Preencher os dados do vetor B: ");
for (let i = 0; i < vet2.length; i++) {
    console.table(vet2[i])
}

console.log("Preencher os dados do vetor C: ");
for (let i = 0; i < vet3.length; i++) {
    console.table(vet3[i])
}


// a) subtação vetor2 pelo vetor3
for (let i = 0; i < subtvet23.length; i++) {
    subtvet23[i] = vet2[i] - vet3[i]; 
}

// b) multiplicação vetor1 pelo vetor2
for (let i = 0; i < multvet12.length; i++) {
    multvet12[i] = vet1[i] * vet2[i]; 
}

// c) multiplicação vetor1 pelo vetor2 pelo vetor3
for (let i = 0; i < multvet123.length; i++) {
    multvet123[i] = vet1[i] * vet2[i] * vet3[i]; 
}

// d) divisão vetor3 pelo vetor1
for (let i = 0; i < divvet31.length; i++) {
    multvet123[i] = vet3[i] / vet1[i]; 
}

// e) quadrado vetor2
for (let i = 0; i < quadvet2.length; i++) {
    quadvet2[i] = vet2[i] * vet2[i]; 
}

// f) cubo vetor1
for (let i = 0; i < cubvet1.length; i++) {
    cubvet1[i] = vet1[i] * vet1[i] * vet1[i]; 
}

// g) media dos vetores 1 e 2
for (let i = 0; i < medvet12.length; i++) {
    medvet12[i] = vet1[i] * vet2[i] / 2; 
}

// h) media dos vetores 2 e 3
for (let i = 0; i < medvet12.length; i++) {
    medvet23[i] = vet2[i] * vet3[i] / 2; 
}

// i) media dos vetores 1, 2 e 3
for (let i = 0; i < medvet12.length; i++) {
    medvet123[i] = vet1[i] * vet2[i] * vet3[i] / 3; 
}

// j) antecessor do vetor1
for (let i = 0; i < antvet1.length; i++) {
    antvet1[i] = vet1[i] - 1; 
}

// k) sucessor do vetor3
for (let i = 0; i < sucvet3.length; i++) {
    sucvet3[i] = vet3[i] + 1; 
}


//outra aula:
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



// exibe o resultado do exercício a
console.log("Subtração do vet2 pelo vet3");
for (let i = 0; i < subtvet23.length; i++) {
    console.log(subtvet23[i]);
}

// exibe o resultado do exercício b
console.log("Multiplicação do vet1 pelo vet2");
for (let i = 0; i < multvet12.length; i++) {
    console.log(multvet12[i]);
}

// exibe o resultado do exercício c
console.log("Multiplicação do vet1 pelo vet2 pelo vet3");
for (let i = 0; i < multvet123.length; i++) {
    console.log(multvet123[i]);
}

// exibe o resultado do exercício d
console.log("Divisão do vet3 pelo vet1");
for (let i = 0; i < divvet31.length; i++) {
    console.log(divvet31[i]);
}

// exibe o resultado do exercício e
console.log("Quadrado do vetor2");
for (let i = 0; i < quadvet2.length; i++) {
    console.log(quadvet2[i]);
}

// exibe o resultado do exercício f
console.log("Cubo do vetor1");
for (let i = 0; i < cubvet1.length; i++) {
    console.log(cubvet1[i]);
}

// exibe o resultado do exercício g
console.log("Média dos vetores 1 e 2");
for (let i = 0; i < medvet12.length; i++) {
    console.log(medvet12[i]);
}

// exibe o resultado do exercício h
console.log("Média dos vetores 2 e 3");
for (let i = 0; i < medvet23.length; i++) {
    console.log(medvet23[i]);
}

// exibe o resultado do exercício i
console.log("Média dos vetores 1, 2 e 3");
for (let i = 0; i < medvet123.length; i++) {
    console.log(medvet123[i]);
}

// exibe o resultado do exercício j
console.log("Antecessor do vetor1");
for (let i = 0; i < antvet1.length; i++) {
    console.log(antvet1[i]);
}

// exibe o resultado do exercício k
console.log("Sucessor do vetor3");
for (let i = 0; i < sucvet3.length; i++) {
    console.log(sucvet3[i]);
}

// exibe o resultado do exercício l
console.log("Ordem do último a primeiro do vetor1")
for (let i = 4; i >= 0; i--) {
    console.log(vet1[i]);
}

// exibe o resultado do exercício m
console.log("Ordem do último a primeiro do vetor2")
for (let i = 4; i >= 0; i--) {
    console.log(vet2[i]);
}

// exibe o resultado do exercício n
console.log("Ordem do último a primeiro do vetor3")
for (let i = 4; i >= 0; i--) {
    console.log(vet3[i]);
}


// outra aula:
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