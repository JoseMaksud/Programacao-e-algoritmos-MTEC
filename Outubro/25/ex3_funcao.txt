//Porcentagem de um número

function porc(p) {
    return (porcentagem * preco) / 100;
} 

var preco = parseFloat(prompt("Digite o preço do produto"));
var porcentagem = parseFloat(prompt("Digite a porcentagem do produto"));
console.log("O valor sera de " + porc(porcentagem));