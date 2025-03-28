import { Link } from "react-router-dom"


export const HeroCard = ({id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters}) => {


    const heroImgUrl = `/assets/heroes/${id}.jpg`
  
    return (

    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex max-md:flex-wrap animate__animated animate__fadeIn">

        <img src={heroImgUrl} alt="" className="object-cover w-50 h-60"/>        

        <div className="p-4 space-y-3">
            <h2>{superhero}</h2>

            <p>Alter ego: {alter_ego}</p>

            <p>First Appearance: {first_appearance}</p>

            {
                alter_ego !== characters && (
                    <p>Characters: {characters}</p>
                )
            }

            <span className="bg-blue-600 px-2 py-1 rounded-xl inline-block">{publisher}</span>

            <Link to={`/hero/${id}`} className="block text-purple-500">
                Mas informacion...
            </Link>
            
        </div>
    </div>

  )
}
