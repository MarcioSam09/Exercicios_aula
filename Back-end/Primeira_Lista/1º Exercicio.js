//*1 – Ler um valor e escrever se é positivo, negativo ou zero//*

let numeros = [2, -5, 0, 10, -8];

numeros.forEach(numero => {
    if (numero > 0) {
        console.log("O número " + numero + " é positivo.");
    } else if (numero < 0) {
        console.log("O número " + numero + " é negativo.");
    } else {
        console.log("O número " + numero + " é zero.");
    }
});