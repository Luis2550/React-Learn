import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { Login } = useContext(AuthContext)
  const navegate = useNavigate();


  const onLogin = () => {

    const url = localStorage.getItem('lastPath') || '/';

    Login('Luis Lopez');
    
    navegate(url, 
      {
        replace: true 
      })
  }

  return (
    <div className=" w-[80%] mx-auto mt-10">

      <h1 className="text-3xl">Login</h1>
      <hr />

      <button className="bg-blue-600 py-1 px-2 mt-10 cursor-pointer" onClick={onLogin}>
        Login
      </button>

    </div>
  )
}
