import {useEffect, useState} from "react"
import toast from "react-hot-toast"
import { Modal } from "./Modal"
import { useTasks } from "../../hooks/useTasks"

const tabs = [
  {
    id: "tab1",
    title: "Todas",
  },
  {
    id: "tab2",
    title: "Completadas",
  },
  {
    id: "tab3",
    title: "Pendientes",
  },
]

export const SectionTask = ({initialTask, onDeleteTask, IsOpen, setIsOpen}) => {

    const [activate, setActivate] = useState("tab1")
    const [MenuOpen, setMenuOpen] = useState(null)
    const { lastId,  handleNewTask, handleEditTask} = useTasks()
    
      const [tasks, setTask] = useState([])

      useEffect(() => {
        localStorage.setItem('AllTasks', JSON.stringify(initialTask)) ;
      }, [initialTask]);

      useEffect(() => {
        setTask(initialTask);
      }, [initialTask]);

      useEffect(() => {
        tasks.forEach((task) => {
          if (task.done) {
            toast(`Tarea "${task.title}" marcada como realizada`, {
              icon: '👏',
            });
          }
        });
      }, [tasks]);
    

      const handletasks = (id) => {
        setTask( (prevtasks) => 
          prevtasks.map( (task) => 
            task.id === id ? { ...task, done: !task.done } : task
          )
        )
      }

      const [taskToEdit, setTaskToEdit] = useState([]);

      const handleEditClick = (task) => {
          setTaskToEdit(task);
          setIsOpen(true)  // Cargamos la tarea en el modal para editar
          
      };

  return (
    <>


        <Modal id={lastId} onNewTodo={handleNewTask} onEditTask={handleEditTask} IsOpen={IsOpen} setIsOpen={setIsOpen} taskToEdit={taskToEdit}/>


        <section className="container mt-10">
            
            <div className="flex flex-wrap items-center bg-gray-200/8 p-2 rounded-2xl justify-around">
            {
                tabs.map( (tab)=> (
                <button 
                className={`py-2 px-4 cursor-pointer flex-1 ${ activate === tab.id ? "bg-gray-200 text-black rounded-xl" : ""}`}
                key={tab.id}
                onClick={ () => setActivate(tab.id) }
                >
                    {tab.title}
                </button>
                ))
            }
            </div>

            <div className="p-2 container flex flex-wrap gap-5 justify-center"> 

            {
                tasks.map( (task) => (
                
                <div className={`relative z-30 w-[14rem] text-black p-3 rounded-xl grid gap-2 ${ task.done === true ? 'bg-gray-200/60' : 'bg-gray-200' }`} key={task.id}>
                    
                    <i className="fa-solid fa-ellipsis-vertical absolute p-2 top-2 right-2 cursor-pointer" onClick={()=> setMenuOpen(MenuOpen === task.id ? null : task.id) }></i>

                    {
                      MenuOpen === task.id && (
                        <div className="bg-white shadow-lg shadow-black p-2 border border-gray-300 flex flex-col gap-2 rounded-2xl absolute z-20 top-2 right-8 w-[10rem]">
                          
                          <button className="button-MenuOpen hover:bg-gray-200"
                          onClick={() => handleEditClick(task)}>
                            <i className="fa-solid fa-trash"></i>
                            Editar
                          </button>

 
                          <button className="button-MenuOpen hover:bg-gray-200"
                          onClick={() => onDeleteTask(task.id)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            Eliminar
                          </button>
                        </div>
                      )
                    }


                    <div className="flex items-center">
                      <input
                      type="checkbox"
                      id={`checkbox-${task.id}`}
                      className="w-4"
                      checked={task.done}
                      onChange={() => handletasks(task.id)}
                      />

                      <h2 className={`px-2.2 ${task.done === true ? 'line-through' : ''}`}>{task.title}</h2>

                    </div>

                    <small>{task.date}</small>
                    <p>{task.description}</p>

                    {/* aqui poner una condicion para cambiar el color de la prioridad */}

                    <span className="bg-gray-800 text-white w-fit px-2 py-1 rounded">{task.priority}</span>

                </div>
                ))
            }
            

            </div>

            </section>
    </>
  )
}
