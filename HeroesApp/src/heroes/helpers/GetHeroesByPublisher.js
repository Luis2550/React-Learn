
import { heroes } from "../data/heroes"

export const GetHeroesByPublisher = (publisher) => {

    const validePublisher = ["DC Comics", "Marvel Comics"];

    if( !validePublisher.includes( publisher ) ){
        throw new Error `${publisher} is not valided`
    }

    return heroes.filter( (heroe) => ( heroe.publisher === publisher ))

}
