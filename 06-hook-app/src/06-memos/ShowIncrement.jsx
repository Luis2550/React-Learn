import React from "react";

export const ShowIncrement = React.memo(( {increment} ) => {

    console.log('me volvi a ejecutar')
    const dato = 6
  return (
    <>
        <button className="btn btn-primary" onClick={ () => increment( dato ) }>
            {dato}
        </button>
    </>
  )
})
