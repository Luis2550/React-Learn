import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  //desestructuro lo que mando en el return del ...formState
  const {/*formState*/ username, email, password, onInputChange, onResetForm} = useForm({
    //estos valores son el initial que le paso
    username: '',
    email: '',
    password: ''

  })

  

  //desetructuro los datos del formstate ya que son un objeto
  // const {username, email, password } = formState;

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


        <input type="email"
        className="form-control mt-2"
        placeholder="luis@gmail.com"
        name="email"
        value={email}
        onChange={ (e) => onInputChange(e) }
        />

        <input type="password"
          className="form-control mt-2"
          placeholder="Password"
          name="password"
          value={password}
          onChange={ (e) => onInputChange(e) }
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
