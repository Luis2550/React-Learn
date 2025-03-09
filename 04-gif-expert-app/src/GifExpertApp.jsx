import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one punch'])

    //agregar categoria con el valor que le mandamos del input
    const onAddCategory = (newValue) => {

      console.log("valor: ",newValue);

      if(categories.includes(newValue)) return;

      setcategories( [ newValue, ...categories])

    }

    const suma = (a, b) =>{
      console.log("suma: ", a+b)
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        
        <AddCategory /*setcategories = { setcategories } */ 
          onNewValue = { valor => onAddCategory(valor)}
          suma = {suma}
        />

        {categories.map(categoria => (
          <GifGrid 
          key={categoria}
          category={categoria} />
        ))}

    </>
  )
}
