const Persona = require('./01-clases'); // importacion

const persona1 = new Persona('Carlos', 30);
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();

const persona2 = new Persona('Paula', 40);
console.log(persona2.nombre);
console.log(persona2.edad);
persona2.saludar();


/* instancias sin constructor

const persona1 = new Persona();
persona1.nombre = 'Carlos';
persona1.edad = 30;

console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();

const persona2 = new Persona();
persona2.nombre = 'Paula';
persona2.edad = 40;

console.log(persona2.nombre);
console.log(persona2.edad);
persona2.saludar(); */