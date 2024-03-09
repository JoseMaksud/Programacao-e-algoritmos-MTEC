var cont = 1;
var maior = 0;

while (cont <= 5) {
    var id = parseInt(prompt("Digite a " + cont + " ª altura:"));
    if (id > maior) {
        maior = id;
    }
    cont++;
}

console.log("Maior altura = " + maior);