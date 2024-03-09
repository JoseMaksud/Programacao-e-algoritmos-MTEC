var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));
var mult = parseInt(prompt("Digite o múltiplo"));
while (inic <= fim){
    if (inic % mult == 0){
        console.log(inic);
    }
    inic++;
}