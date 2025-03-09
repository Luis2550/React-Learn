import { useEffect, useState } from "react"
import { Message } from "../Message";

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'luis2505',
    email: 'luis@gmail.com',
  });

  const {username, email} = formState;

  const onInputChange = ({target}) =>{
    
    const {name, value} = target;
    
    setformState( {
      ...formState,
      [name]: value,
    } )
    
  }

  useEffect(() => {
    //console.log("UseEffect se llamo");
  }, [])

  useEffect(() => {
    //console.log("FormState ejecutado");
  }, [formState])

  useEffect(() => {
    //console.log("Username cambia");
  }, [username])
  

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ (e) => onInputChange(e) }
        />

         { username == 'luis2505p' && <Message /> }

        <input type="email"
        className="form-control mt-2"
        placeholder="luis@gmail.com"
        name="email"
        value={email}
        onChange={ (e) => onInputChange(e) }
        />

    </>
  )
}
