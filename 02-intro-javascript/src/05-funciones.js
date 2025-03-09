

//no es recomendable hacer asi las funciones ya que se puede alterar su valor pese a que muestre que es una funcion es decir si pongo saudar = 20 se cambiara a 20 pero sira que es una funcion
// function saludar(nombre){
//     return `hola ${nombre}`;
// }

const saludar = function(nombre){
    return `hola ${nombre}`
}

//funcion de flecha

const saludar2 = (nombre)=>{
    return `hola ${nombre} funcion flecha`
}

// si solo tiene un return se puede hacer de la siguiente manera

const saludar3 = (nombre)=> `Hola de nuevo ${nombre}`

console.log( saludar('Luis') )
console.log( saludar2('Juan') )
console.log( saludar3('Liz') )

// si voy a regresar o retornar un objeto y quiero hacerlo sin el return tengo que ponerlo entre parentesis

const getUser = () => ({
    nombre: 'kaiser',
    username: 'kaiser0512',
});

console.log( getUser() )

const getUserActivo = (nombre) => ({

    uid: 'ABCD344',
    username: nombre,

})

const usuarioActivo = getUserActivo('Kiko');
console.log(usuarioActivo)