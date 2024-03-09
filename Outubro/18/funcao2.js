var num = parseInt(prompt("Digite um número:"));
var cont = 0; 
var res;
var fat = 1;

function tabuada(){
    while (cont < 11){
        res = num * cont;
        console.log(num+"X"+cont+"="+res);
        cont++;
    }
}

function fatorial(){
    while (num > 1){
        fat = fat * num;
        num--;
    }
}

console.log("Tabuada de" + num);
tabuada();
console.log("Fatorial ="+ fatorial());