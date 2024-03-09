var num = parseInt(prompt("Digite um número:"));
var cont = 1;
var cprimo = 0;

while (cont <= num) {
    if (num % cont == 0){
        cprimo++;
    }
    cont++;
}

if (cprimo == 2) {
    console.log(num + " é primo!");
}

else {
    console.log(num + " não é primo!");
}