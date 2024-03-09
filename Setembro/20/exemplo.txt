var atividades = [
    ['Dormir', 8],
    ['Trabalhar', 8],
    ['Alimentação', 1],
    ['Lazer', 2],
    ['Transporte', 1],
    ['Atividade Física', 1],
];

console.table(atividades);

atividades.push(['Estudar',3]);

console.table(atividades);

atividades.forEach(activity => {
    var porcent = ((activity[1] / 24) * 100).toFixed();
    activity[2] = porcent + '%';
});

console.table(atividades);

for (let i = 0; i < atividades.length; i++) {
    var col = atividades[i].length;
    for (j = 0; j < col; j++) {
        console.log('[' + i + '.' + j + ']' + atividades[i][j]);
    }
}