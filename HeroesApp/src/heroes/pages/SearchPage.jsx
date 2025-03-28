import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { GetHeroesByName } from "../helpers/GetHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = GetHeroesByName( q );  

  const {searchText, onInputChange, onResetForm  } = useForm({
    searchText: q
  });


  const onSearchSubmit = (event) => {
    event.preventDefault()

    // if( searchText.trim().length <= 1 ) return;
    // console.log({searchText})

    navigate( `?q=${searchText.toLowerCase().trim() }` )

  }
  

  return (
    <div className="max-w-[90%] mx-auto">

      <h1 className="text-3xl font-bold mt-10">Search</h1>
      <hr />

      
      <div className="flex py-5 gap-10">

        <div>

          <h4 className="mt-6 text-xl font-bold">Searching</h4>

          <form onSubmit={ onSearchSubmit } className="py-5 flex gap-4">
            <input type="text" name="searchText" 
            placeholder="Search a hero"
            className="border-1 py-1 px-2 rounded-xl"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
            />

            <button className="bg-blue-500/40 py-1 px-2 rounded-xl cursor-pointer">
              Search
            </button>
          </form>

        </div>

        <div className="w-[60%]">
          <h4 className="text-xl font-bold">Results</h4>
          <hr />

          {

            (q === '') ? <div className="bg-blue-300 py-2 px-3 mt-2 rounded-xl text-blue-900">
            Search a hero
            </div> : heroes.length === 0 && <div className="bg-red-300 text-red-900 py-2 px-3 mt-2 rounded-xl mb-5">
            <p>No hero with <span className="font-bold">{ q }</span></p>
          </div>

          }
          

          <div className=" flex flex-col gap-5 justify-center items-center mt-4">

            {
              heroes.map( (heroe) => (

                <HeroCard key={heroe.id} { ...heroe }/>
              ))
            }

          </div>

        </div>
 
      </div>
      
    </div>
  )
}
