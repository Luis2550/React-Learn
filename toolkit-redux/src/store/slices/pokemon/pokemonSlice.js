import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemon: [],
        isLoading: true,
    },
    reducers: {
        startLoading: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons( state, action){
            
            state.isLoading = false;
            state.pokemon = action.payload.pokemons;
            state.page = action.payload.page;

        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, setPokemons } = pokemonSlice.actions;