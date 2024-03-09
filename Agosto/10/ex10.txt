var media;
var maior = 0;
var menor = 300;
var soma = 0;
var cont = 1;
var id;

while (cont < 6) {
    id = parseInt(prompt("Digite a " + cont + " ª idade"));
    soma = soma + id;
    if (id > maior) {
        maior = id; 
    }
    if (id < menor){
        menor = id;
    }
    cont++;
}
media = soma / 5; 
console.log("Média idade: " + media);
console.log("Maior idade: "+ maior);
console.log("Menor idade: "+ menor);