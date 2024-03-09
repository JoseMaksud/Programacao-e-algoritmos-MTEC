//Fahrenheit para Celsius

function conv(t) {
    return (t - 32) / 1.8;
} 

var temp = parseFloat(prompt("Digite a temperatura em graus Fahrenheit"));
console.log("A temperatura em Celsius é igual a " + conv(temp));