//*Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar. Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.//*

let n1=Math.floor(Math.random()*100)

let result=n1%2

if (result===0){
    console.log("O numero",n1,"e par")
}else{
    console.log("o numero",n1,"e impar")
}