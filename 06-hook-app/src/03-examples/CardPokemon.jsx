
export const CardPokemon = ( {id, name, sprites=[]} ) => {
  return (
    <section>

        <h2 className="text-capitalize"> #{id} - {name}</h2>

        {/*  */}
        <div>

          {
            sprites.map( (imagen) => (
              <img key={imagen} src={imagen} alt="" />
            ))
          }

        </div>

    </section>
  )
}
