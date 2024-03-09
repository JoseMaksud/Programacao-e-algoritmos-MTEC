var num1 = parseFloat(prompt("Digite o primeiro valor:"));
var num2 = parseFloat(prompt("Digite o segundo valor:"));

function soma(a,b) {
    return a + b;
}

function linha() {
    return "______________";
}

function subt(a,b) {
    return a-b;
}

function mult(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}


console.log("Soma de " + num1 + " e " + num2 + " = ", soma(num1,num2));
console.log(linha());
console.log("Subtração de " + num1 + " e " + num2 + " = ", subt(num1,num2));
console.log(linha());
console.log("Multiplicação de " + num1 + " e " + num2 + " = ", mult(num1,num2));
console.log(linha());
console.log("Divisão de " + num1 + " e " + num2 + " = ", div(num1,num2));