var dados = [
    [1,2,3,4],
    [5,6,7,8],
    [9,11,7,6],
    [15,6,8,9]
];

//ex. a
console.log(dados[2][3]);
console.log("___________");

//ex. b
console.log(dados[0][2]);
console.log("___________");

//ex. c
console.log(dados[1][3]);
console.log("___________");

//ex. d
console.log(dados[3][0]);
console.log("___________");

for (let i = 0; i < dados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
        if (i == 1) {
            //ex. e
            console.log(dados[i][j]);
        }
    }
}
console.log("___________");

for (let i = 0; i < dados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
        if (j == 3) {
            //ex. f
            console.log(dados[i][j]);
        }
    }
}
console.log("___________");

var teste1 = 0;

for (let i = 0; i < dados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
        if (i == 2) {
            teste1 = teste1 + dados[i][j];
        }
    }
}
//ex. g
console.log(teste1);
console.log("___________");

var teste2 = 0;

for (let i = 0; i < dados.length; i++) {
    for (let j = 0; j < dados.length; j++) {
        //ex. h
        if (i == j) {
            teste2 = teste2 + dados[i][j];
        }
    }
}

//ex. i
console.log(teste2);
console.log("___________");

//ex. j
var teste3 = dados[2][3] * dados[2][3];
console.log(teste3);

//ex. k
var teste4 = dados[0][0] * dados[3][3];
console.log(teste4);