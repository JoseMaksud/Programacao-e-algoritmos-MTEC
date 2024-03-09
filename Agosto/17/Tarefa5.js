var soma = 0;

for (var i = 1; i <= 500; i++) {
    if (i % 3 == 0 && i % 2 == 1){
        soma = soma + i;
    }
}
console.log("Soma = "+ soma);