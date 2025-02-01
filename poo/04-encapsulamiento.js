const Persona = require('./01-clases'); // importacion

const personaX = new Persona('Carlos', 25);

console.log(personaX.nombre);
console.log(personaX.edad);
personaX.apellido = 'Sanchez';
console.log(personaX.apellido);
// console.log(personaX.#apellido); ERROR no es accesible

personaX.saludarX('Lopez');