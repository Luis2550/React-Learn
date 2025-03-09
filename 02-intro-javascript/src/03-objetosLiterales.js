
const direccion = {
    ciudad: 'Riobamba',
    calle: 'Pinar 1',

}

const persona = {
    nombre: 'Luis',
    apellido: 'Lopez',
    edad: 45,
    direccion
};

//tambien sepuede hacer asi
// const persona = {
//     nombre: 'Luis',
//     apellido: 'Lopez',
//     edad: 45,
//     direccion = {
//          ciudad: 'Riobamba',
//          calle: 'Pinar 1',
//     }
// };

console.log(persona)

//si se crea otro objeto y este contiene un objeto en este caso va hacer el mismo nombre se puede hacer lo siguiente

//console.log({persona2:persona})

console.table(persona)

// clonar un objeto

const nuevaPersona = {...persona}
nuevaPersona.nombre = 'Juan'

console.log(nuevaPersona)
