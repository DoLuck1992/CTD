console.log("----------Teste de Operações / Calculadora----------")

function adicionar(num1, num2){
    console.log(num1 + num2);
}

adicionar(1, 1)
adicionar(8, 80)

function subtracao(num1, num2){
    console.log(num1 - num2)
}

subtracao(0, 50)
subtracao(100, 75)

function multiplicacao(num1, num2){
    console.log(num1 * num2)
}

multiplicacao(0, 0)
multiplicacao(5, 5)

function divisao(num1, num2){
    console.log(num1 / num2)
}

divisao(100, 100)
divisao(500 / 0)

function quadradoDoNumero(num1){
    console.log(num1**2);
}

quadradoDoNumero(5)
quadradoDoNumero(10)

function mediaDeTresNumeros(num1, num2, num3){
    let media = (num1 + num2 + num3)/3
    console.log(media)
}

mediaDeTresNumeros(5, 5, 5)
mediaDeTresNumeros(18, 23, 55)
mediaDeTresNumeros(48, 56, 0)