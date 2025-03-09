import { InputSearch } from "./components/InputSearch"
import { SectionTask } from "./components/SectionTask"
import { useTasks } from "../hooks/useTasks"
import { useState } from "react"

export const App = () => {

  const {tasks, handleDeleteTask} = useTasks()
  const [IsOpen, setIsOpen] = useState(false)


  return (
    <div className="w-full min-h-screen bg-[#202020] text-white font-noto-sans py-10">

      {/* Informacion */}
      <section className="container flex justify-between items-center flex-wrap max-sm:justify-center max-sm:text-center">

        <div>
          <h2 className="text-3xl font-bold font-sigmar tracking-wider">Gestor de Tareas</h2>
          <p className="text-xl">Organiza y gestiona tus tareas de forma eficiente</p>
        </div>

        <button className="bg-gray-800 py-2 px-5 rounded-xl flex gap-2 items-center cursor-pointer hover:bg-gray-600 max-sm:mt-4" 
        onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-circle-plus"></i>
          Nueva Tarea
        </button> 

      </section>

      {/* Input Search */}

      <InputSearch />

      {/* Section Task */}

      <SectionTask initialTask={tasks} onDeleteTask = {handleDeleteTask} IsOpen={IsOpen} setIsOpen={setIsOpen}/>



    </div>
  )
}
