import { NavLink } from "react-router-dom"


export const Navbar = () => {
  return (

    <div className="flex gap-3 bg-gray-500 w-max px-5 py-3 rounded-xl mb-5">
          
        <NavLink to="/" className={ ({isActive}) => ( isActive ? `underline`: '' )}  >Home</NavLink>
        <NavLink to="/login" className={({isActive}) => ( isActive ? `underline`: '' )}>Login</NavLink>
        <NavLink to="/about" className={({isActive}) => ( isActive ? `underline`: '' )}  >About</NavLink>

    </div>
  )
}
