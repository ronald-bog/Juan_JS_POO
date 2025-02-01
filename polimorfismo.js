class Animal {
    hacerSonido() {
        return 'Sonido Generico';
    }
}

class Perro extends Animal {
    hacerSonido() {
        return 'Ladrar Guau';
    }
}

class Gato extends Animal {
    hacerSonido() {
        return 'Maullar miau';
    }
}

const animal = new Animal();
const perro = new Perro();
const gato = new Gato();

console.log(animal.hacerSonido());
console.log(perro.hacerSonido());
console.log(gato.hacerSonido());