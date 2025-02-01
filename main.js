class Persona {
    /*     nombre;
        apellido;
     */

    /*     saludar(nombre) {
            this.#nombre = nombre;
            console.log(`Hola, me llamo ${this.#nombre}`);
        } */
       
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const persona1 = new Persona();

const persona2 = new Persona('Peter', 'Lopez');

/* persona2.nombre = 'Juan';
persona2.apellido = 'Rico' */

const persona3 = new Persona('Sofia', 'Rojas');

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona3.nombre);
console.log(persona3.apellido);

/* persona1.saludar('Peter');
persona1.name = "Carlos";
persona1.nuevaPropiedad = 'Soy un atributo nuevo'
console.log(persona1.name);

const instanciaNueva = new Persona();
instanciaNueva.propNueva = 5000;
console.log(instanciaNueva.propNueva); */


/*
persona1.nombre = "Juan";
persona1.edad = 30;
persona1.apellido = "Lopez";

console.log(persona1.nombre);
console.log(persona1.apellido);
persona1.saludar();

const persona2 = new Persona();
persona2.nombre = "Carlos";
persona2.apellido = "Gomez";

console.log(persona2.nombre);
console.log(persona2.apellido);
persona2.saludar();

const persona3 = new Persona();
persona3.nombre = "Ana";
persona3.apellido = "Restrepo";

console.log(persona3.nombre);
console.log(persona3.apellido);
persona3.saludar();
*/
