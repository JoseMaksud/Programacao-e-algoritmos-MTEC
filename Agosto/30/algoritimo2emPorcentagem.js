var atividades = [
    ['Trabalhar', 9],
    ['Comer', 1],
    ['Transporte', 2],
    ['Jogar', 2],
    ['Estudar', 2],
    ['Dormir', 8]
];

console.table(atividades);

atividades.forEach (atividades => {
    let porcento = ((atividades[1] / 24) * 100) .toFixed();
    atividades[2] = porcento + '%';
});

console.table(atividades);

for (let i = 0; i < atividades.length; i++) {
    var fim = atividades[i].length;
    for (let j = 0; j < fim; j++) {
        console.log('['+ i + ',' + j + '] = ' + atividades[i] [j]);
    }
} 