import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"
import toast from "react-hot-toast"


const initialState = []

const inicio = () =>{
    return JSON.parse(localStorage.getItem('todos') )
}

export const useTodos = () => {
  
    const handleNewTodo = ( todo ) => {

        const action = {
            type: 'Add Todo',
            payload: todo,
        }

        dispatchTodo(action)
        toast.success('Tarea Agregada')
    }

    const handleDeleteTodo = (id) => {
        
        const action = {
            type: 'Remove Todo',
            payload: id,
        }

        dispatchTodo(action)
        toast.success('Tarea Eliminada')
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: 'Toggle Todo',
            payload: id,
        }

        dispatchTodo(action)
        toast.success('Tarea Completada')
    }

    const [ todos, dispatchTodo] = useReducer( todoReducer, initialState, inicio)
    
    const lastId = (todos ?? []).at(-1)?.id || 0;

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return {

        todos: todos,
        lastId: lastId,
        AllTodosCounter: todos.length,
        PendingTodosCounter: todos.filter( element => !element.done).length,
        handleNewTodo: handleNewTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleToggleTodo: handleToggleTodo,

    }
}
