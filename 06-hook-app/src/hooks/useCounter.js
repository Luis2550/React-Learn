import { useState } from "react"

export const useCounter = ( valueInitial) => {
  
    const [counter, setcounter] = useState(valueInitial)

    const handleAdd = (value = 1) => {
        setcounter(counter + value )
    }

    const handleSubtract = () => {
        setcounter(counter - 1 )
    }

    const handleReset = () => {
        setcounter( valueInitial)
    }

    return {
        counter,
        handleAdd,
        handleReset,
        handleSubtract,
    }
    

}
