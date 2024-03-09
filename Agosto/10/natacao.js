var id = parseInt(prompt("Digite sua idade:"));

if (id >= 5 && id <= 7) {
    alert("Infantil A");
}

else if (id >= 8 && id <= 10) {
    alert("Infantil B");
}

else if (id >= 11 && id <= 13) {
    alert("Juvenil A");
}

else if (id >= 14 && id <= 17) {
    alert("Juvenil B");
}

else if (id >= 18 && id <= 100) {
    alert("Adulto");
}

else {
    alert("Idade inválida");
}