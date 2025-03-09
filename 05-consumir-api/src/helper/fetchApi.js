
export const fetchApi = async( category ) => {
    
    const api_key = import.meta.env.VITE_CLIENT_ID;
    const url = import.meta.env.VITE_URL_API;

    const peticion = await fetch(`${url}client_id=${api_key}&query=${category}`);
    const {results} = await peticion.json();
    
    const imagenes = results.map( (elemento) => (
        {
            id: elemento.id,
            description: elemento.alt_description,
            imagen: elemento.urls.regular,
        }
    ) );

    return imagenes;

}
