//desestructuracion de datos por que importo un objeto
import {datos} from "./Datos";

//aqui envio un array de objetos tiene que llamarse de la misma manera que como se envia si se puede enviar un objeto
export const Presentacion = ({datosHeroes, datosDireccion}) => {

    const {nombre, edad} = datos;
    //desestructuro el array de objetos
    const [heroe1, heroe2, heroe3, heroe4,] = datosHeroes
    const {calle, numCalle} = datosDireccion;

    return (
    <div>
        <h2>Presentacion</h2>
        <p>Nombre: {nombre}</p>
        <p>Edad: {edad}</p>

        <h3>Heroes</h3>
        <p>{JSON.stringify(datosHeroes)}</p>
        <p>Heroe 1: {JSON.stringify(heroe4)}</p>

        <h3>Direccion</h3>
        <p>Calle: {calle}</p>
        <p>NumCalle: {numCalle}</p>
    </div>
  )
}
