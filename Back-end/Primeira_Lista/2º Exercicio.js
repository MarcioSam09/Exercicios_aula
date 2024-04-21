//*2 - Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.//*
let nota1=5.4;
let nota2=6.9;

let result=(nota1+nota2)/2

if (result>=7){
    console.log("Parabens, com sua media de:",result,"voce foi aprovado!")
} else{
    console.log("Lamento informar, mas com sua media de:",result, "voce foi reprovado!")
}