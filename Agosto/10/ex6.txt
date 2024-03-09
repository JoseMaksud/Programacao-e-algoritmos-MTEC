var inic = parseInt(prompt("Digite um valor inicial:"));
var fim = parseInt(prompt("Digite um valor final:"));
var cont;
var res;

while (inic <= fim) {
    cont = 0;
    while(cont < 11){
        res = inic * cont;
        console.log(inic + " X " + cont + " = " + res);
        cont++;
    }
    inic++;
    console.log("________________________________")
}