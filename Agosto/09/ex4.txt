var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));
while (inic <= fim){
    if (inic % 9 == 0){
        console.log(inic);
    }
    inic++;
}