function soma() {
    for (var i = 0; i < vet1.length; i++) {
        if (vet1[i] < 0) {
        s = s + vet1[i];
        }
    } 
    return s;
}

var vet1 = [-10,20,-30,40,50,-60,70,80,-90,100];
var s = 0;
console.log("A soma dos negativos da Array = ", soma());