var num = 1;
var soma = 0;

while (num != 0){
    num = parseFloat(prompt("Digite um valor"));
    soma = soma + num;
}

console.log("A soma dos valores digitados é " + soma);