// POLIMORFISMO
// Sobreescritura de metodos "heredados"

class Animal{
    sonidoDelAnimal(){
        return 'Sonido generico'
    }
}

class Perro extends Animal {
    sonidoDelAnimal(){
        return 'ladrido guau guau guau'
    }
}

const animal = new Animal()

console.log(animal.sonidoDelAnimal())

const corina = new Perro()

console.log(corina.sonidoDelAnimal())

// sobrecarga de metodos

/* conducir(a, b){
    // bloque
}

conducir(a, b, c, d){
    // bloque
}

conducir(a, b, c, d, e){
    // bloque
} */