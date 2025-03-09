import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    //traigo los datos del hook que cree
    const {counter, handleAdd, handleSubtract, handleReset} = useCounter(5)

    return (
        <>
            <h3>Counter App {counter}</h3>

            <hr />

            <button className="btn btn-primary"  onClick={ ()=> handleAdd(2) }>+2</button>
            <button className="btn btn-primary"  onClick={ handleReset }>Reset</button>
            <button className="btn btn-primary"  onClick={ handleSubtract }>-1</button>
        </>
    )
}
