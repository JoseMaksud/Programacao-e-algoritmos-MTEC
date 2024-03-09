var id; 
var cont = 1; 
var menor = 300; 

while (cont < 6){
    id = parseInt(prompt("Digite a " + cont+ " ª idade:" ));
    if (id < menor){
        menor = id;
    }
    cont++; 
}
console.log("Menor idade = " + menor);