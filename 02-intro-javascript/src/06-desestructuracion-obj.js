
// desestructuracion 
// Asignacion desestructurante

const persona = {
    nombre: 'luis',
    edad: 23,
    clave: 'luis123' 
}

console.log( persona.nombre );



const { nombre } = persona;
console.log( nombre );
//si se tiene otra variable que se llame nombre se puede renombrar  de la siguiente manera

const { nombre:nombre2 } = persona;
console.log( nombre2 );

// const retornaPersona = (usuario) =>{

//     const {nombre, edad, clave} = usuario;


//     console.log('******************')
//     console.log(nombre)
//     console.log(edad)
//     console.log(clave)

// }

const retornaPersona = ({nombre, edad, clave, rango='capitan'}) =>{

    // console.log('******************')
    // console.log(nombre)
    // console.log(edad)
    // console.log(clave)
    // console.log(rango)   

    return {
        nombreClave: clave,
        anios: edad,
        grados: {
            min: 34,
            max: 23,
        }
    }
}

// si hay un objeto dentro de otro objeto y se quiere desestructurar se usa lo siguiente
const {nombreClave, anios, grados:{min, max}} = retornaPersona(persona)


console.log(nombreClave, anios, min, max);