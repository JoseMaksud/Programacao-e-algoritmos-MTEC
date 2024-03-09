function soma() {
    for (var i = 0; i < vet1.length; i++) {
        s = s + vet1[i];
    } 
    return s;
}

var vet1 = [10,20,30,40,50,60,70,80,90,100];
var s = 0;
console.log("A soma dos elementos da Array = ", soma());