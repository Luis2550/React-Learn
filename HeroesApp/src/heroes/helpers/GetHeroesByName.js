import { heroes } from "../data/heroes";

export const GetHeroesByName = ( name = "" ) => {
  
    name = name.toLocaleLowerCase().trim();

    if( name.length === 0 ) return [];

    return heroes.filter( (heroe) => heroe.superhero.toLocaleLowerCase().includes( name )  )


}
