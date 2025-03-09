//import { heroes } from './data/heroes';

// si es una exportacion por defecto no hace falta los corchetes y tambien puede ser cualquier nombre
import heroes, {owners} from './data/heroes';


//console.log(owners)

export const getHeroe = (id) => {
    return heroes.find((valor) => valor.id === id)
}

const getHeroeByOwner = (owner) =>{
    return heroes.filter( (valor) => valor.owner === owner )
}

//console.log( getHeroeByOwner('DC') )
