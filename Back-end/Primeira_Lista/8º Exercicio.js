//Ler 3 valores e escrevê-los em ordem crescente//*
//NÃO FUNCIONOU!

let valor1=2;
let valor2=3;
let valor3=1

if (valor1 <= valor2 && valor1 <= valor3) {
    console.log("Valores em ordem crescente:", valor1, valor2,valor3);
} else if(valor2 <= valor1 && valor2 <= valor3) {
    console.log("Valores em ordem crescente:", valor2, valor1,valor3);
}else{
    console.log("Valores em ordem crescente:", valor3, valor2,valor1);
}