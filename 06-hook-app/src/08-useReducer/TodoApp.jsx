
import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"
import { useTodos } from "../hooks/useTodos"
import { Toaster } from "react-hot-toast";

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, AllTodosCounter, PendingTodosCounter, handleToggleTodo, lastId } = useTodos();


  return (
    <>
        <h1>Todo App ({ AllTodosCounter }) <small>Pendientes ({ PendingTodosCounter })</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                
                <TodoList listTodos = {todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>

            </div>

            <div className="col-5">
                <h2>Agregar Todo</h2>
                <hr />
                
                <TodoForm id={lastId} onNewTodo={handleNewTodo}/>

            </div>

        </div>

        <Toaster
        position="bottom-right"
        reverseOrder={false}
        />
    </>
  )
}
