import { useState } from "react";
import PropTypes from "prop-types"

export const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState( value )

    //se recibe el valor pero no se hace nada con ese valor
    const handleAdd = () => {
        //setCounter(counter + 1);
        setCounter( (c) => c = c + 1 );
    }
    
    const handleSubtract = ()=> {
        setCounter(counter - 1 )
    }

    const handleReset = () =>{
        setCounter(value);
    }

  return (
    <div className="counter">
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        
        <div className="botones">
            <button onClick={ (e) => handleAdd()}>
                +1
            </button>

            <button onClick={ handleSubtract }>
                -1
            </button>

            <button onClick={ handleReset }>
                Reset
            </button>
        </div>
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

