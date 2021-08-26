
/*//Declarando a função
function cumprimentar(){
    //Todo seu código fica aqui!
    alert('Olá');
}

//Invocação
cumprimentar(); //Método
*/
var nomedousuario = prompt('Qual o seu nome, abestado?');
//Função com parâmetro
//Essa função faz... utiliza o parâmetro para enviar a saudação.
function saudar(mensagem){
    alert(mensagem + ' ' + nomedousuario);
}


//Métodos
saudar('Olá');
saudar('Oi');
saudar('Seja bem-vindo(a)');