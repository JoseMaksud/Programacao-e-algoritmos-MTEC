//exibir os multiplos entre um valor inicial e um valor final

var mult = parseInt(prompt("Digite o multiplo desejado"))
var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));

while (inic <= fim) {
	if (inic % valor == 0) {
		console.log(inic + " é multiplo de "+ mult);
	}
	inic++;
}