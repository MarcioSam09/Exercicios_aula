
let idades = [10, 25, 35, 50, 70, 12, 28, 40, 55, 65, 14, 20, 30, 48, 62];

let faixa1_15 = 0; // 1 a 15 anos
let faixa16_30 = 0; // 16 a 30 anos
let faixa31_45 = 0; // 31 a 45 anos
let faixa46_60 = 0; // 46 a 60 anos
let faixa61_mais = 0; // >= 61 anos

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 1 && idades[i] <= 15) {
        faixa1_15++;
    } else if (idades[i] >= 16 && idades[i] <= 30) {
        faixa16_30++;
    } else if (idades[i] >= 31 && idades[i] <= 45) {
        faixa31_45++;
    } else if (idades[i] >= 46 && idades[i] <= 60) {
        faixa46_60++;
    } else {
        faixa61_mais++;
    }
}

let totalPessoas = idades.length;


let porcentagem1_15 = (faixa1_15 / totalPessoas) * 100;
let porcentagem16_30 = (faixa16_30 / totalPessoas) * 100;
let porcentagem31_45 = (faixa31_45 / totalPessoas) * 100;
let porcentagem46_60 = (faixa46_60 / totalPessoas) * 100;
let porcentagem61_mais = (faixa61_mais / totalPessoas) * 100;


console.log("Quantidade de pessoas em cada faixa etária:");
console.log("1 a 15 anos: " + faixa1_15);
console.log("16 a 30 anos: " + faixa16_30);
console.log("31 a 45 anos: " + faixa31_45);
console.log("46 a 60 anos: " + faixa46_60);
console.log(">= 61 anos: " + faixa61_mais);

console.log("\nPorcentagem de cada faixa etária em relação ao total de pessoas:");
console.log("1 a 15 anos: " + porcentagem1_15.toFixed(2) + "%");
console.log("16 a 30 anos: " + porcentagem16_30.toFixed(2) + "%");
console.log("31 a 45 anos: " + porcentagem31_45.toFixed(2) + "%");
console.log("46 a 60 anos: " + porcentagem46_60.toFixed(2) + "%");
console.log(">= 61 anos: " + porcentagem61_mais.toFixed(2) + "%");
