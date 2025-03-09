const personajes = ['goku', 'vegeta', 'trunks'];

const [ , ,p3 ] = personajes;

console.log(p3);

const retornoArreglo = () => {
    return ['ABC', 34]
}

const [letras, numeros] = retornoArreglo()

console.log( retornoArreglo() )
console.log( letras, numeros )

const useState = (valor) => {
    return [valor, ()=>{console.log('hola mundo')}]
}

const [nombre, setNombre] = useState('Gohan')

console.log(nombre)
setNombre()