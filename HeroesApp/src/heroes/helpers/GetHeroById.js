import { heroes } from "../data/heroes"


export const GetHeroById = ( id ) => {
  
    return heroes.find( (heroe ) => heroe.id === id )

}
