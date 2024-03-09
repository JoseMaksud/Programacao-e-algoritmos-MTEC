var fim = 500;
var cont = 1;
var soma = 0;

while (cont <= fim) {
    if (cont % 3 == 0 && cont % 2 == 1) {
        //console.log(cont + " é multiplo de 3 e é impar ");
        soma = soma + cont;
    }
    cont++;
}

console.log("a soma dos valore é " + soma);