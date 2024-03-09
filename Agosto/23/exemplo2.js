var frutas = ['Maçã', 'Banana', 'Pera', 'Manga', 'Mamão'];

var fim = parseInt(frutas.length-1);

for (var i = 0; i <= fim;i++) {
    console.log((i+1) + "ª posição=  " + frutas[i]);
}

console.log("==============");

var teste1 = frutas.push('Laranja');

var fim = parseInt(frutas.length-1);

for (var i = 0; i <= fim;i++) {
    console.log((i+1) + "ª posição=  " + frutas[i]);
}

console.log("==================");

var teste2 = frutas.pop();

var fim = parseInt(frutas.length-1);

for (var i = 0; i <= fim;i++) {
    console.log((i+1) + "ª posição=  " + frutas[i]);
}

console.log("==================");

var teste4 = frutas.shift();

var fim = parseInt(frutas.length-1);

for (var i = 0; i <= fim;i++) {
    console.log((i+1) + "ª posição=  " + frutas[i]);
}