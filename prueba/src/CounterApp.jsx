import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({valor}) => {


const [contador, setContador] = useState(valor)

const handleAdd = (e)=>{
    console.log(e.target)
    setContador(contador + 1)
}

const handleSubtract = ()=>{
    setContador( (c) => {return c = c - 1})
}

const handleReset = (e) =>{
    setContador(valor)
    console.log(e.timeStamp)
}

  return (
    <div>
        <h3>{contador}</h3>

        <div className="botones">

            <button onClick={ (e) => handleAdd(e) }>
                +1
            </button>

            <button onClick={ handleSubtract }>-1</button>

            <button onClick={ (e) => (handleReset(e)) }>Reset</button>

        </div>
    </div>
  )
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}