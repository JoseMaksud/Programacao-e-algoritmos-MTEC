var matrA = [
    [1, 6, 8],
    [3, 5, 7],
    [8, 9, 2]
]; 

var matrB = [
    [2, 4, 7],
    [9, 5, 1],
    [2, 4, 5]
];

var matrC = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var matrD = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var SomaMatrBA = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var SubMatrAB = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var SomaMatrBA = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var MedMatrAB = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var DivMatrDC = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

var MedMatrABCD= [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];


// resolução do a
for (var i = 0; i < SomaMatrBA.length;i++){
    for(var j = 0; j < SomaMatrBA.length; j++){
        SomaMatrBA[i][j] = matrA[i][j] + matrB[i][j];
    }
}

// resolução do b
for (var i = 0; i < SubMatrAB.length;i++){
    for(var j = 0; j < SubMatrAB.length; j++){
        SubMatrAB[i][j] = matrA[i][j] - matrB[i][j];
    }
}

// resolução do c
for (var i = 0; i < matrC.length;i++){
    for(var j = 0; j < matrC.length; j++){
        matrC[i][j] = matrA[i][j] * matrA[i][j];
    }
}

// resolução do d
for (var i = 0; i < matrD.length;i++){
    for(var j = 0; j < matrD.length; j++){
        matrD[i][j] = matrB[i][j] * matrB[i][j] * matrB[i][j];
    }
}

// resolução do e
for (var i = 0; i < MedMatrAB.length;i++){
    for(var j = 0; j < MedMatrAB.length; j++){
        MedMatrAB[i][j] = (matrA[i][j] + matrB[i][j]) / 2;
    }
}

// resolução do f
for (var i = 0; i < DivMatrDC.length;i++){
    for(var j = 0; j < DivMatrDC.length; j++){
        DivMatrDC[i][j] = matrD[i][j] / matrC[i][j];
    }
}


// resolução do g 
// exibe a média de todos os vetores
for (var i = 0; i < MedMatrABCD.length;i++){
    for(var j = 0; j < MedMatrABCD.length; j++){
        MedMatrABCD[i][j] = (matrA[i][j] + matrB[i][j] + matrC[i][j] + matrD[i][j])  / 4;
    }
}


console.log("Dados da Matriz A: ");
console.table(matrA);

console.log("Dados da Matriz B: ");
console.table(matrB);

console.log("Dados da Matriz C: ");
console.table(matrC);

console.log("Dados da Matriz D: ");
console.table(matrD);

console.log("Soma Matrizes B e A: ");
console.table(SomaMatrBA);

console.log("Subtração Matrizes A e B: ");
console.table(SubMatrAB);

console.log("Quadrado Matriz A: ");
console.table(matrC);

console.log("Cubo Matriz B: ");
console.table(matrD);

console.log("Média Matrizes A e B: ");
console.table(MedMatrAB);

console.log("Divisão Matrizes D e C: ");
console.table(DivMatrDC);

console.log("Média Vetores A, B, C e D: ");
console.table(MedMatrABCD);