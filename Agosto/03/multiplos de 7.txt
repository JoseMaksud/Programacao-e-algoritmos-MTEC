//exibir os multiplos de 7 entre um valor inicial e um valor final

var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));

while (inic <= fim) {
	if (inic % 7 == 0) {
		console.log(inic);
	}
	inic++;
}