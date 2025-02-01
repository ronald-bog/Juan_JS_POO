const Persona = require('./01-clases')

class Empleado extends Persona {

    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
}

const empleadoA = new Empleado('Ana', 18, 'Asistente')

console.log(empleadoA.nombre)
console.log(empleadoA.edad)
console.log(empleadoA.puesto)
empleadoA.saludar()
//console.log(empleadoA.saludar())