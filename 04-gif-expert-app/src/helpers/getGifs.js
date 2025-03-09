export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qh8f23PnNji3YYtDkyuTH4w7uLTY5GNu&q=${ category }&limit=3`

    const peticion = await fetch(url);
    const {data} = await peticion.json();

    const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                urlImagen: img.images.downsized_medium.url,
            }
        }
    )
    return gifs
}