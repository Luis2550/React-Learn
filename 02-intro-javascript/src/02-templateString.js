
const nombre = 'luis';
const apellido = 'apellido';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto)

function getSaludo(nombre){
    return 'Hola como estas '+ nombre ;
}

console.log(`este es un saludo: ${ getSaludo(nombre) }`)
//console.log(getSaludo())