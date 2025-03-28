import { Navigate, useNavigate, useParams } from "react-router-dom"
import { GetHeroById } from "../helpers/GetHeroById";
import { useMemo } from "react";

export const HeroPage = () => {


  const { HeroId } = useParams();

  const hero = useMemo( () => GetHeroById(HeroId), [HeroId]);

  // if(!hero){
  //   return <>404 - Not Found</>
  // }

  const navigate = useNavigate()

  const onNavigateBack = () => {
    
    hero.publisher === "DC Comics" ? navigate("/dc") : navigate("/marvel");

  }

  if(!hero){
    return <Navigate to={"/marvel"} />
  }

  return (

    <div className="m-4 bg-gray-900 max-w-[600px] grid-cols-1 grid md:grid-cols-2 justify-center items-center py-5 px-8 rounded-xl">

      <img src={`/assets/heroes/${hero.id}.jpg`} alt="" className="max-w-52 h-82 object-cover mx-auto animate__animated animate__fadeInLeft"/>

      <div className="flex flex-col relative h-full">

        <h2 className="text-2xl font-bold"> { hero.superhero } </h2>

        <ul className="py-3 space-y-3">
          <li><span className="font-bold">Alter ego:</span> {hero.alter_ego} </li>
          <li><span className="font-bold">First appearance</span> {hero.first_appearance} </li>
          <li><span className="font-bold">Characters</span> {hero.characters} </li>
          <li className="border-1 p-1 text-center"><span className="font-bold">Publisher</span> {hero.publisher} </li>

        </ul>

        <button className="text-start bg-blue-500 w-fit py-1 px-2 rounded-xl cursor-pointer" onClick={ onNavigateBack }>
          Regresar
        </button>

      </div>

    </div>

  )
}
