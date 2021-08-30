//Micro desafio I
let status = true;

if(status == true){
    console.log("O valor é verdadeiro")
}
else{
    console.log("O valor é falso")
}

//Micro desafio II
let linguagem = "javascript"

if(linguagem == "javascript"){
    console.log(`Estou aprendendo ${linguagem}!`)
}
else{
    console.log("Vou aprender mais tarde");
}

//Microdesafio III
function podeSubir(altura, acompanhante){
    if(altura<1.2){
        console.log("Acesso negado");
    }
    else if ((altura >= 1.2 && altura <= 1.4) && acompanhante == true){
        console.log("Acesso liberado somente com acompanhante");
    }
    else if(altura > 1.4 && altura <=2){
        console.log("Acesso liberado!");
    }
    else{
        console.log("Acesso negado");
    }
}

podeSubir(1, false)
podeSubir(1.3, false)
podeSubir(1.3, true)
podeSubir(1.8, false)
podeSubir(2.1, true)
podeSubir(2, false)