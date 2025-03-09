// para exportar se puede poner export al inicio

//export const heroes = [
//export default [

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// export const owners = ['DC', 'MARVEL', 'SUPERMAN']
// export default heroes;

// lo de arriba y lo siguiente es lo mismo
const owners = ['DC', 'MARVEL', 'SUPERMAN']

export{
    heroes as default,
    owners
}
