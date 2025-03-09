
// se pone con new array cuando queremos que el array tenga un limite fijo
// const arreglo = new Array(100);

const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

const arreglo2 = [ ...arreglo, 5 ]

//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const arreglo3 = arreglo2.map( function(i){

    return i = i * 2;

} )

console.log('arreglo 1: ', arreglo);
console.log('arreglo 2: ', arreglo2);
console.log('arreglo 3: ', arreglo3);
