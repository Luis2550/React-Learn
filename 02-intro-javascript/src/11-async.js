const getImagen = async () => {
  try {

    const api = "oht0y5rsITjfYWa3z4cOpqlbqQFMNJg8";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api}`
    );

    const { data } = await respuesta.json();
    const { url } = data.images.original;
    console.log(url);
    const elemento = document.createElement("img");
    elemento.src = url;
    document.body.append(elemento);
  } catch (error) {
    console.log(error)
  }

  
};

getImagen();
