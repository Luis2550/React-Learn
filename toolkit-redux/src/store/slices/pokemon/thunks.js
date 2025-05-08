import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice"


export const getPokemons = (page = 0) => {

    return async( dispatch, getState ) => {

        dispatch(startLoading());

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const {results} = await resp.json();

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        const { results } = data;

        dispatch( setPokemons( {
            pokemons: results,
            page: page + 1
        } ) )

    }

}