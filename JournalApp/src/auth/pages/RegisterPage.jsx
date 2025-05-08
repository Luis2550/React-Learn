import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { RegisterIcon } from "../../icons";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunsk";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const formBase = {
  displayName: "",
  email: "",
  password: "",
}


const formValidations = {

  displayName: [ (value) => value.length >= 1, "El nombre es obligatorio" ],
  email: [ (value) => value.includes("@"), "El correo debe tener una @"],
  password: [ (value) => value.length >= 6, "La contraseña debe tener al menos 6 caracteres" ]

}

export const RegisterPage = () => {

  const { formState, onInputChange, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid

   } = useForm( formBase, formValidations )


   const { state, errorMessages} = useSelector( state => state.auth )
   const isChekingAuthentication = useMemo( ()=> state === "checking", [state] )

   const dispatch = useDispatch();
   const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)

    if( !isFormValid) return;
    dispatch( startCreatingUserWithEmailPassword({ email, password, displayName }) )
  
  }


  return (
    <AuthLayout title={"Registrarse"}>

      <form onSubmit={ onSubmit } className="flex flex-col w-full h-full gap-4">
        
        <div className="flex flex-col gap-2">
          <label htmlFor="">Nombre Completo:</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            className={`input-auth ${ displayNameValid && formSubmitted ? "border-red-400" : "" }`}
            name="displayName"
            value={displayName}
            onChange={ onInputChange}
            
          />

          {
            (displayNameValid && formSubmitted) && ( 
              <span>{displayNameValid}</span>
            )
          }

        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="">Correo:</label>
          <input
            type="text"
            placeholder="correo@gmail.com"
            className={`input-auth ${ emailValid && formSubmitted ? "border-red-400" : "" }`}


            name="email"
            value={email}
            onChange={ onInputChange}
          />

          {   
            (emailValid && formSubmitted) && ( 
              <span>{emailValid}</span>
            )
          }

        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="">Contraseña:</label>
          <input type="password" 
          className={`input-auth ${ passwordValid && formSubmitted ? "border-red-400" : "" }`}

          name="password"
          value={password}
          onChange={ onInputChange}
          />

        {
            (passwordValid && formSubmitted) && ( 
              <span>{passwordValid}</span>
            )
          }


        </div>

        <div className={`w-full bg-red-400 flex justify-center items-center py-2 rounded-md ${!!errorMessages ? "" : "hidden"}`}>

          <span>
            {errorMessages}
          </span>

        </div>

          <button className="boton-auth" type="submit" disabled={ isChekingAuthentication }>

          <RegisterIcon width={24} height={24} />
            Crear Cuenta
          </button>


        <div className="flex gap-2 flex-wrap justify-end">
          
          Ya tiene una cuenta?
          <Link to={"/auth/login"} className="underline">
            Ingresar
          </Link>
        </div>

      </form>
    </AuthLayout>
  );
};
