var a = parseInt(prompt("Digite o valor de A:"));
var b = parseInt(prompt("Digite o valor de B:"));
var c = parseInt(prompt("Digite o valor de C:"));
var res = a + b;

if (res > c) {
    console.log(res + " É maior que " + c);
}

if (res < c) {
    console.log(res + " É menor que " + c);
}

else if (res == c) {
    console.log(res + " É igual " + c);
}