//Item 1.1 - Função de converter polegadas em centímetros

function convertPolCm() {
    let pol = prompt("Por favor, digite a quantidade de polegadas a serem convertidas:");
    let resultado = pol * 2.54
    alert(`${pol} polegadas correspondem a ${resultado} centímetros`);
}

convertPolCm();

//Item 1.2 - receber string e converter em URL
function site(){
    let principal = prompt("Entre com o domínio de seu site");
    let completa = `http://www.${principal}.com.br`
    let final = new URL("/", completa)
    alert(`Seu site é ${final}`);
}

site();

//Item 1.3 - Colocar uma exclamação no final
function exclamacao(){
    let frase = prompt("Digite uma frase qualquer:");
    alert(`${frase}!`);
}

exclamacao();

//Item 1.4 - Idade dos cachorros
function idadeDogs(){
    let idade = prompt("Digite a idade do seu catiorro:");
    let idadeHumana = idade * 7;
    alert(`A idade do seu cão correspone a ${idadeHumana} anos para uma pessoa.`);
}

idadeDogs();

//Item 1.5 - calcular valor da hora de trabalho
function horaTrabalho(){
    let salario = prompt("Digite o seu salário:");
    alert("O valor da sua horá é de " + (salario / 160) + " reais.");
}

horaTrabalho();

//Item 1.6 - Calcular IMC
function IMC(){
    let alturaCm = prompt("Digite a sua altura (em centímetros):");
    let peso = prompt("Digite o seu peso:");
    let altura = alturaCm / 100;    
    let imcResult = Math.round(peso/(altura*altura));
    alert(`Seu IMC é de ${imcResult}`);
}

IMC();

//Item 1.7 - converter minúsculas em maiúsculas
function maiusculas(){
    let frase = prompt("Digite algo em minúsculas:");
    alert(`${frase}`.toUpperCase());
}

maiusculas();

//Item 1.8 - typeof
function tipo(x){
    alert(typeof x);
}

tipo(56);
tipo("Batata");
tipo(false);

//Item 1.9 - calcular circunferência
function circunferencia(){
    let raio = prompt("Informe o raio do círculo:");
    let circ = Math.round(2 * Math.PI * raio);
    alert(`O comprimento da circunferência é de ${circ}`);
}

circunferencia();

alert(Math.random());
