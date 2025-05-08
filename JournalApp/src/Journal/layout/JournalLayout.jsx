import { NavBar } from "../components/NavBar"
import { SideBar } from "../components/SideBar";

export const JournalLayout = ( {children} ) => {

  const drawerWidth = 240;

  return (

    <div className="flex flex-col">

      <NavBar drawerWidth={drawerWidth} />
      
      <div className="flex">
        <SideBar drawerWidth={drawerWidth} />

        <main className="flex-1 p-5 mt-10">
          {children}
        </main>

      </div>
      
    </div>
  )
}