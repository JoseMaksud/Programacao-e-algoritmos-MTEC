//verifica se um valor é primo ou não

var num = 7;
var cont = 1;
var cprimo = 0;

for (cont=1;cont<=num;cont++) {
	if (num % cont ==0) {
		cprimo++;
	}
}

if (cprimo == 2) {
	console.log(num + " é primo!");
}

else {
	console.log(num + " não é primo!");
}


prompt(“Digite um número”);