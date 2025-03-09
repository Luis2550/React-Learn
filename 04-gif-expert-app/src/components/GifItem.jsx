export const GifItem = ({title, urlImagen}) => {
  return (
    <div className="card">
        <img src={urlImagen} alt={title} />
        <p>{title}</p>
    </div>
  )
}
