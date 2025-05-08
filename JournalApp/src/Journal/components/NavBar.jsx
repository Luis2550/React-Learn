import { MenuIcon, LogoutIcon } from "../../icons"


export const NavBar = ({ drawerWidth = 240 }) => {
    return (

        <nav className={`fixed h-15 bg-gray-800/98 flex items-center px-5 width-navbar` } 

        style={{ "--drawerWidth": `${drawerWidth}px` }}
        >
            <MenuIcon width={30} height={30} className={"md:hidden"}/>

            <div className="flex w-full items-center justify-between">

                <h2 className="max-md:pl-5 md:text-2xl font-bold">Journal</h2> 

                <LogoutIcon width={40} height={35} className={"cursor-pointer"} />

            </div>

        </nav>
    );
  };
  
