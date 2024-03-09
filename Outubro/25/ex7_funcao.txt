function soma() {
    for (var i = 0; i < vet1.length; i++) {
        if (vet1[i] % 2 == 1) {
        s = s + vet1[i];
        }
    } 
    return s;
}

var vet1 = [1,2,3,4,5,6,7,8,9,10];
var s = 0;
console.log("A soma dos impares da Array = ", soma());