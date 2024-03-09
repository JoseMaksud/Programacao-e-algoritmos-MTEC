var a = parseFloat(prompt("Digite o 1º valor"));
var b = parseFloat(prompt("Digite o 2º valor"));
var c = parseFloat(prompt("Digite o 3º valor"));

if (a < b && a < c) {
    if(b < c) {
        console.log(a + "-" + b + "-" + c);
    }
    else {
        console.log(a + "-" + c + "-" + b);
    }
}

if (b < a && b < c) {
    if (a < c) {
        console.log(b + "-" + a + "-" + c);
    }
    else{
        console.log(b + "-" + c + "-" + a);
    }
}

else if (c < a && c < b) {
    if (a < b) {
        console.log(c + "-" + a + "-" + b);
    }
    else  {
        console.log(c + "-" + b + "-" + a);
    }
}