var cont = 1;
var id;
var soma = 0;
var media;

while (cont < 11) {
    id = parseInt(prompt("Digite a " + cont + "ª idade:"));
    soma = soma + id;
    cont++;
}

media = soma / 10;

console.log("A média das idades é " + media);