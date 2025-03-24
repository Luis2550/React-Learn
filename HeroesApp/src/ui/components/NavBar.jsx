import { NavLink } from "react-router-dom"

export const NavBar = () => {
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
        </div>

        <NavLink to="/login" className= { ({isActive}) =>  ` border px-2 ${isActive ? 'text-white' : 'text-gray-300/80'}`  }>
            Logout
        </NavLink>
        
     </ul>

    </nav>
  )
}
