

export const TodoItem = ({data, onDeleteTodo, onToggleTodo }) => {
  return (

    <li className="list-group-item d-flex justify-content-between align-items-center mt-2">
            
            <span className={` cursor-pointer ${ data.done ? 'text-decoration-line-through' : '' }`} onClick={ () => onToggleTodo(data.id) }> 
              {data.description} 
            </span>

            <button className="btn btn-danger" onClick={ () => onDeleteTodo(data.id) }>Borrar</button>
    </li>

  )
}
