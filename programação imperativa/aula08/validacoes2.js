let dia = "Domingo";

let resultado = dia == "Domingo"?"Vou à praia":"Fico em casa";

console.log(resultado);

switch(dia){
    case "Segunda-feira":
        console.log("Vou ficar em casa");
        break;
    case "Quarta-feira":
        console.log("Vou ver futebol");
        break;
    default:
        console.log("Não irei fazer nada!");
}