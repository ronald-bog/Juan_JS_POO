
const Persona = require('./persona');

class Empleado extends Persona {

    constructor(nombre, edad, cargo) {
        super(nombre, edad);
        this.cargo = cargo;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es: ${this.edad}`);
    }
}

const empleado1 = new Empleado('Lucia', 50, 'Directora');

console.log(empleado1.nombre);
console.log(empleado1.edad);
console.log(empleado1.cargo);
empleado1.saludar();
