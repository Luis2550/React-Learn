import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {


    const {user, Logout} = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogout = () => {

        Logout()
        navigate( "/login", {replace: true})

    }

  return (
    <nav className="w-full bg-gray-800">
     
     <ul className="flex gap-4 max-w-[90%] py-2 mx-auto text-lg items-center justify-between">
        
        <div className="flex gap-4">
            <NavLink to="/">
                Asociaciones
            </NavLink>

            <NavLink to="/marvel" className={ ({isActive}) => ( isActive ? 'text-white border-b' : 'text-gray-300/80' ) }>
                Marvel
            </NavLink>

            <NavLink to="/dc" className={ ({isActive}) => ( isActive ? 'text-white border-b' : 'text-gray-300/80' ) }>
                DC
            </NavLink>

            <NavLink to="/search" className={ ({isActive}) => ( isActive ? 'text-white border-b' : 'text-gray-300/80' ) }>

                Search

            </NavLink>
        </div>

        <div className="flex gap-3 items-center">
            <h2> {user?.name} </h2>
            <button className="py-1 px-2 rounded-xl bg-purple-800 cursor-pointer"  onClick={ onLogout } >
                Logout
            </button>
        </div>
        
     </ul>

     

    </nav>
  )
}
