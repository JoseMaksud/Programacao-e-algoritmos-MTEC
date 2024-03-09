var a = 5;
var b = 10;

if (a == 5) {
    let a = 4; // tem a função local enquanto o var tem a função global
    var b = 1;

    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);