var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var op = prompt("Digite a operação desejada:");

function calc(n1,n2,oper) {
    if (oper == '+') {
        return n1 + n2;
    }
    else if (oper == '-') {
        return n1 - n2;
    }
    else if (oper == '*') {
        return n1 * n2;
    }
    else if (oper == '/') {
        return n1 / n2;
    }
    else {
        return 'Operação inválida!';
    }
}

console.log("O resultado é igual a " + calc(num1,num2,op));