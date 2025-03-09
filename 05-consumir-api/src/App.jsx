import { useState } from "react"
import { SearchCategory } from "./components/SearchCategory"
import { ImagesGrid } from "./components/ImagesGrid"


export const App = () => {

  const [categories, setcategories] = useState([])

  //añadimos la categoria al arreglo
  const onAddCategory = (valor) => {

    if(categories.includes(valor)) return;
    //actualizamos el estado de nuestro arreglo que tiene las categorias con la categoria que ingresamos el input
    setcategories( [valor, ...categories] )
    
  }

  return (
    <div className="">
        
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto gap-5">

            <h2 className="text-3xl font-bold mt-24">Buscador de imagenes</h2>

            <SearchCategory
             // le mando una funcion entonces el puede ejecutarla en el componente searchCategory con el valor del input que se le mande
             onNewValue = { onAddCategory }
            />   


            {categories.map( (element) => (
              <ImagesGrid key={element} category={element}/>
            ))}
                 

        </div>
        
    </div>
  )
}
