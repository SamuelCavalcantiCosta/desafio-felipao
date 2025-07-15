class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
const heroi1 = new Heroi("gandalg", 100, "mago");
heroi1.atacar();