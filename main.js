class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }


emitirSom() {
    return `${this.nome} está emitindo um som...`;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);  
        this.raca = raca;    
    }

emitirSom() {
        return `${this.nome} está latindo!`;
    }

    mostrarRaca() {
        return `Raça do cachorro: ${this.raca}`;
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);  
        this.cor = cor;       
    }

    emitirSom() {
        return `${this.nome} está miando!`;
    }

    mostrarCor() {
        return `Cor do gato: ${this.cor}`;
    }
}

const cachorro1 = new Cachorro('Rex', 3, 'Labrador');
const gato1 = new Gato('Whiskers', 2, 'Cinza');
const cachorro2 = new Cachorro('Bolt', 1, 'Bulldog');


console.log(cachorro1.emitirSom());  
console.log(cachorro1.mostrarRaca()); 
console.log(gato1.emitirSom());     
console.log(gato1.mostrarCor());    
console.log(cachorro2.emitirSom()); 
