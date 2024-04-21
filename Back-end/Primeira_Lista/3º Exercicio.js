//*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)//*

let anoAtual = new Date().getFullYear();

let anoNascimento = 2009; 

let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log("Com a idade de" ,idade,"anos você pode votar este ano!");
} else {
    console.log("Com a idade de" ,idade,"anos você não pode votar este ano, pois não atingiu a idade mínima de 18 anos.");
}
