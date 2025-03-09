import { useReducer } from "react"
import { tasksReducer } from "../src/components/tasksReducer"
import toast from "react-hot-toast"


const initialState = []

const start = () => {
  return JSON.parse(localStorage.getItem('AllTasks')) || [];
}

export const useTasks = () => {

    const handleNewTask = (task) => {
        const action = {
            type: 'Add Task',
            payload: task,
        }

        dispatchTask(action)
        toast.success('Tarea creada')
    }

    const handleDeleteTask = (id) => {
        const action = {
            type: 'Delete Task',
            payload: id,
        }

        dispatchTask(action)
        toast.success('Tarea Eliminada')
    }

    const handleEditTask = (task) => {
        
      const action = {
            type: 'Edit Task',
            payload: task,
        }

        dispatchTask(action)
        toast.success('Tarea Actualizada')
    }

    

    const [tasks, dispatchTask] = useReducer(tasksReducer, initialState, start)
    const lastId = (Array.isArray(tasks) && tasks.length > 0) ? tasks.at(-1)?.id : 0;

  return ( {

    tasks: tasks,
    lastId: lastId,
    handleNewTask, handleNewTask,
    handleEditTask, handleEditTask,
    handleDeleteTask, handleDeleteTask
  }

  )
}
