var matrA = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]; 

var matrB = [
    [20, 40, 60],
    [70, 80, 30],
    [10, 30, 20]
];

var SomaMatrAB = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

for (var i = 0; i < SomaMatrAB.length;i++){
    for(var j = 0; j < SomaMatrAB.length; j++){
        SomaMatrAB[i][j] = matrA[i][j] + matrB[i][j];
    }
}

console.log("Dados da Matriz A: ");
console.table(matrA);

console.log("Dados da Matriz B: ");
console.table(matrB);

console.log("Soma Matrizes A e B: ");
console.table(SomaMatrAB);