//Ler 3 valores e escrever a soma dos 2 maiores//
//NÃO FUNCIONOU!


let valor1 = 10;
let valor2 = 7;
let valor3 = 15;

let maior1, maior2;

if (valor1 >= valor2 && valor1 >= valor3) {
    maior1 = valor1;
    maior2 = valor2 >= valor3 ? valor2 : valor3;
} else if (valor2 >= valor1 && valor2 >= valor3) {
    maior1 = valor2;
    maior2 = valor1 >= valor3 ? valor1 : valor3;
} else {
    maior1 = valor3;
    maior2 = valor1 >= valor2 ? valor1 : valor2;
}

let soma = maior1 + maior2;

console.log("A soma dos dois maiores valores é:", soma);
