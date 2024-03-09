var frutas = ['Maçã', 'Banana', 'Pera', 'Mamão', 'Manga'];

var fim = parseInt(frutas.length);

for (var i = 0; i <= fim;i++) {
    console.log(frutas[i]);
}

console.log("===============");
var teste1 = frutas.push('Laranja');

for (var i = 0; i <= fim;i++) {
    console.log(frutas[i]);
}

console.log("===============");
var teste2 = frutas.pop();

for (var i = 0; i <= fim;i++) {
    console.log(frutas[i]);
}

console.log("==================");
var teste4 = frutas.shift();

for (var i = 0; i <= fim;i++) {
    console.log(frutas[i]);
}

console.log("=====================");