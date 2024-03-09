var a = parseInt(prompt("Digite o 1º valor:"));
var b = parseInt(prompt("Digite o 2º valor:"));
var res;

if (a == b) {
    res = a + b;
    console.log(a + " + " + b + " = " + res);
}

else {
    res = a * b;
    console.log(a + " X " + b + " = " + res);
}