var num = parseInt(prompt("Digite um número:"));
var op = parseInt(prompt("Digite 1 para quadrado e 2 para cubo:"));

function calc (n1,oper) {
    if (oper == 1) {
        console.log("O quadrado de " + n1 + " = " + n1 * n1);
    }
    else if (oper == 2) {
        console.log("O cubo de " + n1 + " = " + n1 * n1 * n1);
    }
    else {
        console.log("Operação inválida");
    }
}

calc(num,op);