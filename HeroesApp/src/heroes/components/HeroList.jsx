import { useMemo } from "react";
import { GetHeroesByPublisher } from "../helpers/GetHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => GetHeroesByPublisher(publisher), [publisher] );

  return (
    <>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">

            {

                heroes.map( (heroe) => (
                    <HeroCard  key={heroe.id} {...heroe} />
                ))

            }


        </div>


    </>
  )
}
