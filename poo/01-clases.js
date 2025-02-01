class Persona {
    nombre = 'Juliana';
    edad = 50;
/*     static nombre = 'Juliana';
    static edad = 50; */
    #apellido;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
   /*
    saludar() {
        return `Hola, me llamo ${this.nombre}`;
    }*/

    saludarX(z) {
        this.#apellido = z;
        console.log(`Hola, me llamo ${this.#apellido}`);
    }
}

module.exports = Persona; // exportacion


/*const persona1 = new Persona();

persona1.nombre = 'Juan';
//persona1.edad = 42;

const pepito = new Persona();
pepito.nombre = 'PEPITO';
pepito.edad = 15;

console.log(persona1.nombre);
console.log(pepito.nombre);
console.log(persona1.edad);

persona1.saludar();
pepito.saludar()*/

