import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const { page, pokemon, isLoading } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen w-full text-white">
      <div className="max-w-[80%] mx-auto py-10 flex flex-col items-center justify-center">

        <h1 className="text-3xl font-bold">Pokemon App</h1>

        <span>Loading: { isLoading? 'true': "false" }</span>

        <div className="flex gap-3 flex-wrap mt-5"> 

        {
            isLoading ? "cargando" : (pokemon.map((pokemon) => (
                <div key={pokemon.name}>
                <h2>{pokemon.name}</h2>
                </div>
            )))
        }   
        
        </div>

        <button className="bg-purple-900 px-2 py-1 rounded-md cursor-pointer fixed bottom-5 right-5" 
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
        >

            NexPage

        </button>


      </div>
    </div>
  );
};
