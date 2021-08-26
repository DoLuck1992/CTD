//Função declarada
function darOi(){
    console.log("Olá, tudo bem?")
}

darOi();

//Função expressa
let somar = function(){
    console.log(1 + 1);
}

somar();

//Função expressa com parâmetros
let somar1 = function(numA, numB){
    return numA + numB;
}

somar1(1, 2);

let resultado0 = somar1(10, 20);
console.log(resultado0);
console.log(somar1(5, 10));

//Escopo
let resultado1 = 0;
console.log("Resultado fora da função = ", resultado1);
function multiplicar(numA, numB){
    let resultado1 = numA * numB;
    console.log("Resultado dentro da função = ", resultado1);
}

multiplicar(2, 2);

function teste2(x, y){
    return x * 2
    console.log(x)
    return x / 2
}

teste2(10)
