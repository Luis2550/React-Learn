import { ListIcon } from "../../icons";

export const SideBar = ({ drawerWidth }) => {
    return (
      <aside
        className="md:flex md:flex-col border-r-1 hidden"
        style={{width: `${drawerWidth}px` }}
      >
        <h2 className="w-full text-2xl font-bold text-center h-15 flex items-center justify-center border-b-1">Luis Lopez</h2>

        <ul className="flex flex-col mt-5 gap-3">

            {
                ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( (month) => (

                    <li key={month} className="flex items-center cursor-pointer hover:bg-gray-800/80 rounded-md gap-2 px-3">

                        <ListIcon width={60} height={60}  />
    
                        <div className="flex flex-col gap-2">
                        <h2 className="text-md font-bold">{month}</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</p>
                        </div>
                    </li>
    
                ))
            }

        </ul>

      </aside>
    );
  };
  