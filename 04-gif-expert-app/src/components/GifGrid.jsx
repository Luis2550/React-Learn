import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs( category );

  return (
    <div>
        <h3>{category}</h3>
        
        {
          isLoading ? (<h2>cargando</h2>) : null
        }

        <div className="card-grid">
          
          { 
            images.map( (image) => 
              <GifItem key={image.id} 
            //si hay bastantes propiedades se puede hacer lo siguiente para mandar todo
            //title={title} imagen={urlImagen}
            { ...image }
            />
            
            ) 
          }

        </div>
        
    </div>
  )
}
