//algoritmo que calcula o fatorial de um numero 

var num = 5;
var fat = 1; 


while (num > 0) {
	fat = fat * num; 
	num--;
}

alert(fat);