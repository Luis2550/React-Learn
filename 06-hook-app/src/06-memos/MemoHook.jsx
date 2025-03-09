import { useMemo, useState } from 'react';
import {useCounter} from '../hooks/useCounter'


const repeticiones = (numIte = 1000) => {

  for(let i=0; i< numIte; i++)

    console.log('ahi vamos');

    return `${numIte} iteraciones terminadas`

}

export const MemoHook = () => {

    const { counter, handleAdd } = useCounter(4000);
    const [show, setShow] = useState(true)

    const valueMemo = useMemo(() => repeticiones( counter ), [ counter ])

  return (
    <>

        <h1>Counter <small> {counter} </small> </h1>
        <hr />

        <h4> { valueMemo } </h4>

        <button className='btn btn-primary' onClick={ () => handleAdd() }>
            +1
        </button>

        <button className='btn btn-outline-primary' onClick={ () => setShow(!show) }>
            Show/Hidden {JSON.stringify(show)}
        </button>

    </>
  )
}
