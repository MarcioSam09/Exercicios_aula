// Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE//

let golsTimeA = 2;
let golsTimeB = 3;


if (golsTimeA > golsTimeB) {
    console.log("O Time A que fez",golsTimeA,"gols é o vencedor!");
} else if (golsTimeB > golsTimeA) {
    console.log("O Time B  que fez",golsTimeB,"gols é o vencedor!");
} else {
    console.log("EMPATE!");
}
