import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext( UserContext);


  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button className="py-2 px-3 bg-blue-500 text-white rounded-lg" onClick={ () => setUser(
          {nombre: 'Juan', edad: 25}
        )}>

        Establecer Usuario

      </button>

    </>
  )
}
