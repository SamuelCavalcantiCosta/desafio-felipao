function calcularRanqueamento(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let nivel;

    //logica para definir o nivel
    if (saldo < 10) {
        nivel = "ferro";
    } else if (saldo <= 20) {    
        nivel = "bronze";
    }  else if (saldo <= 50) { 
        nivel = "prata";
    } else if (saldo <= 80) {
        nivel = "ouro";
    } else if (saldo <= 90) {
        nivel = "diamante";
    } else if (saldo <= 100) {
        nivel = "lendario";
    }           else {
        nivel = "imortal";
    }
    return `o heroi tem saldo de ${saldo} e esta no nivel ${nivel}`;
}

//teste 
console.log(calcularRanqueamento (75, 20));
