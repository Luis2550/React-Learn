import { useState, useEffect } from "react"
import { fetchApi } from "../helper/fetchApi"
import { ImageItem } from "./ImageItem"

export const ImagesGrid = ( {category} ) => {

    const [images, setImages] = useState([])

    useEffect( () => {
            fetchApi(category).then(
                respuesta => setImages( respuesta )
            );
        }   
    ,[])

    
    
  return (

    <>

        <h2 className="text-3xl font-bold"> {category} </h2>
        
        <div className="flex flex-wrap gap-8 justify-center items-center py-10 text-center">
            {/* se puede pasar {id, description, imagen} desestructurando */}
            {images.map( ( element ) =>(
                <ImageItem key={element.id} {...element}/>
            ) )}
        </div>

    </>

  )
}
