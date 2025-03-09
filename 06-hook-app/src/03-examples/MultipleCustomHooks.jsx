import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { CardPokemon } from "./CardPokemon";
import { Loading } from "./Loading";

export const MultipleCustomHooks = () => {

    const {counter, handleAdd, handleSubtract} = useCounter(1);
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    

  return (
    <>
        <h1> Informacion de Pokemon</h1>

        <hr />

        {isLoading ? <Loading/> : <CardPokemon id={data?.id} name={data?.name} sprites={[
          data?.sprites.front_default,
          data?.sprites.front_shiny,
          data?.sprites.back_default,
          data?.sprites.back_shiny,

        ]}/>}
        {/* si es que hay name se ejecuta */}
        
        

        <button className="btn btn-primary mt-2" onClick={() => counter > 1? handleSubtract() : null}>
          Anterior
        </button>
        <button className="btn btn-primary mt-2" onClick={() => handleAdd()}>
          Siguiente
        </button>
    </>
  )
}
