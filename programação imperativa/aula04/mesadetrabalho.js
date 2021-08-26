/*

let num1 = 5;
let num2 = 10;
let num3 = 40;
let soma1 = num1 + num2;
num3 = "Olá" +23;

alert(15+5);
alert(15-5);
alert(num1 + num2);
alert(soma1+num3);
alert(num3);
alert('Olá! Este é o primeiro número: ' + num1 + '. E o segundo é: ' + num2 + '.')
//console.log(soma1) */

function IMC(nome, idade, peso, altura){
    let plano = null;
    let imc = Math.round(peso/(altura*altura));
    alert(`${nome} tem ${idade} anos e seu íncide de massa corporal é de ${imc}.`);
}

IMC("José da Silva", 27, 83.5, 1.70);
IMC("Carlos de Souza", 28, 80.1, 1.76);
IMC("Aline Ferreira", 33, 63.7, 1.53);
IMC("Ana Paula", 26, 55, 1.62);
