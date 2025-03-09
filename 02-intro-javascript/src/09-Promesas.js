
import {getHeroe} from './08-exportaciones-importaciones'

// const promesa =  new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         // en este caso el resolve es el then de la promesa si le pongo la funcion se ejecuta lo que mando del then 

//         const heroe = getHeroe(2);
       
//         resolve(heroe);

//         reject('no se pudo encontrar el heroe');
        
//     }, 2000)
// });

// //then quiere decir que la promesa se hizo con exito
// promesa.then( (parametro) =>{
//     console.log(parametro)
    
// })
// .catch( (error) => {
//     console.warn( error)
// })

const obtenrHeroeAsync = (id) =>{
    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            
            const heroe = getHeroe(id);
            
            if(heroe){
                resolve(heroe);
            }else{
                reject('Este es un error')
            }

        }, 2000)
    })
}

obtenrHeroeAsync(3).then((parametro)=>{
    console.log(parametro)
})
.catch((error)=> console.log(error))