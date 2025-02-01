let nombre;
let edad;

//nombre = 'Sofia'
//nombre = 'Juan'
console.log(nombre);

class Persona {
    static nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola me llamo ${this.nombre}`;
    }
}



module.exports = Persona;