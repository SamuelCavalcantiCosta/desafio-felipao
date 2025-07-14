//variaveis
let nomeHeroi = "Super Samuel";
let xpHeroi = 7500; //altere o valor para testar diferentes niveis!

//estrutura de decisão
let nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi < 2000) {
    nivel = "bronze";
} else if (xpHeroi < 5000) {
    nivel = "prata";
} else if (xpHeroi < 7000) {
    nivel = "ouro";
} else if (xpHeroi < 8000) {
    nivel = "platina";
} else if (xpHeroi < 9000) {
    nivel = "ascendente";
} else if (xpHeroi < 10000) {
    nivel = "imortal";
} else {
    nivel = "radiante";
}

//saida 
console.log(`O heroi de nome ${nomeHeroi} esta no nivel de ${nivel}`);


