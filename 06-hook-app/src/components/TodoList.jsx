import { TodoItem } from "./TodoItem"

export const TodoList = ( {listTodos, onDeleteTodo, onToggleTodo} ) => {
  return (

    <ul className="list-group">
                
        {
            listTodos.map( (element) => (
                <TodoItem key={element.id} data = {element} onDeleteTodo={ onDeleteTodo } onToggleTodo={onToggleTodo} />
            ) )
        }
            
    </ul>
  )
}
