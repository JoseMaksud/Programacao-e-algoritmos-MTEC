//Celsius para Fahrenheit

function conv(t) {
    return t * 1.8 + 32;
} 

var temp = parseFloat(prompt("Digite a temperatura em graus Celsius"));
console.log("A temperatura em Fahremheit é igual a " + conv(temp));