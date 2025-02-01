class Persona {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    saludar() {
        console.log('Hola');
    }
    saludarA() {
        console.log('Hola');
    }

    #saludar2() {
        console.log('Soy un metodo privado');
    }

    execSaludar() {
        this.#saludar2();
    }
}

const per1 = new Persona('Carolina', 'Rojas');

console.log(per1.getNombre());

per1.setNombre('Sofia');

console.log(per1.getNombre());

per1.saludar();

per1.metodoPublico();
