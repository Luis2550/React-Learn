
export const ImageItem = ( {description, id, imagen} ) => {

  return (
    <div key={id} className="max-w-72 max-h-72 flex flex-col justify-center items-center">
        <img src={imagen} alt="" className="w-64 h-64"/>
        <p>{description}</p>
    </div>
    
  )
}



