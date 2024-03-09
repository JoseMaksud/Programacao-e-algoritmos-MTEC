var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));
var res;
var cont;

if (inic > fim) {
	console.log("O valor inicial deve ser menor que o final");
}

else{
	while (inic <= fim) {
		cont = 0;
		while (cont < 11) {
			res = inicio * cont;
			console.log(inic + " X "+ cont + " = "+ res);
			cont++;
		}
		inic++;
		console.log("=================");
	}
}