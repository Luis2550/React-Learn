import PropTypes from 'prop-types'

const mensaje = 'Juan';
const arreglo = [1,2,3,4,5,6,7,8,9];
const objeto = {
  mensaje: 'Soy spiderman',
  titulo: 'Hola soy Luis',
};

const suma = (a,b)=> a + b


export const FirstApp = ( { title, subtitle}) => {
  
  if(!title){
    throw new Error('Titulo no existe');
  }
  return (
    //esto es parecido al fragmento que es para que no esten dentro de un nodo padre si no que sean solo los elementos que se indican
    <>
        {/* <code> {JSON.stringify(objeto)} </code> */}
        <h1>La suma es: {suma(3,3)}</h1>
        <h2> { title }</h2>
        <p> { subtitle } </p>
    </>
  )
}

// sirve para validar el tipo de datos que se envia a los props
// si queremos que sea obligatorio se pone isRequired
FirstApp.propTypes = {
 title: PropTypes.string.isRequired,
 subtitle: PropTypes.number
}

// si le mandara desde el componente padre el valor ese seria el valor por defecto y lo que defino aqui abajo ya no tendria efecto
FirstApp.defaultProps = {
  subtitle: 'No hay subtitulo'
}