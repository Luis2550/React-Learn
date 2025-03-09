import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

 export const useFetchGifs = (category) => {
   
    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
      const getImages = async() => {
    
        const images = await getGifs(category);
        setImages(images)
        setIsLoading(false);
    
      }
    
        useEffect( () =>{
    
          // se puede hacer de esta manera
          // getGifs(category).then( datos => setImages( datos ))
          getImages();
        }, [] )
    
        return {
            images: images,
            isLoading: isLoading,
        }
 }
 