import { useMemo } from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, LoginIcon } from "../../icons";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

import { chekingAuthentication, startGoogleSingIn } from "../../store/auth/thunsk";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )
  const dispatch = useDispatch();


  const isAuthenticating = useMemo( () => status === "checking", [status] )

  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  })

  const onSubmit = (e) => {

    e.preventDefault();

    dispatch( chekingAuthentication() );

  }

  const onGoogleSignIn = (e) => {
    e.preventDefault();

    dispatch( startGoogleSingIn() );
    
  }

  return (
    <AuthLayout title={"Iniciar Sesión"}>

      <form action="" className="flex flex-col w-full h-full gap-4" onSubmit={onSubmit}>
        
        <div className="flex flex-col gap-2">
          
          <label htmlFor="">Correo:</label>
          <input
            type="text"
            placeholder="correo@gmail.com"
            className="input-auth"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="">Contraseña:</label>
          <input type="password" className="input-auth" 
          name="password"
          value={password}
          onChange={onInputChange}/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-3">
          
          <button disabled={isAuthenticating} className={`boton-auth ${ isAuthenticating? "bg-gray-400/80": "" }`} type="submit">
            <LoginIcon width={24} height={24} />
            Login
          </button>

          <button disabled={ isAuthenticating} className={`boton-auth ${ isAuthenticating? "bg-gray-400/80": "" }`} onClick={onGoogleSignIn} >
            <GoogleIcon width={24} height={24} />
            Google
          </button>
        </div>

        <Link to={"/auth/register"} className="text-end">
          Crear cuenta
        </Link>
      </form>
    </AuthLayout>
  );
};
