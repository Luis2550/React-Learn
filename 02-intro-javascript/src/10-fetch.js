
// oht0y5rsITjfYWa3z4cOpqlbqQFMNJg8

const api = 'oht0y5rsITjfYWa3z4cOpqlbqQFMNJg8'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api}`;

const peticion = fetch(url)

// devuelve una promesa por ende tiene el resolve y reject
// peticion.then((respuesta)=>{

//     respuesta.json().then((data)=>{
//         console.log(data)
//     })
    
// })
// .catch((error)=>{
//     console.log(error);
// })

const imagen = document.querySelector('.randomGiphy')

//anidar promesas
peticion.then((respuesta)=> respuesta.json() )
        //CMO HAY DOS DATA SE USA LA DESESTRUCTURACION
        .then(({data})=> 
        {
            const img = document.createElement('img')
            img.src = data.images.original.url;
            imagen.appendChild(img)
        }
        )
        .catch(console.warn)