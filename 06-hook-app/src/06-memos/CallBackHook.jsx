import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10)


  const incrementFather = useCallback(
    (valor) => {
      setCounter( (c) => c + valor )
    },
    [],
  )
  

  // const incrementFather = () => {
    
  //   setCounter( counter + 1 )
  // }

  return (
    <>

      <h2>Use Callback Hook {counter} </h2>
      <hr />

      <ShowIncrement  increment={ incrementFather }/>

    </>
  )
}
