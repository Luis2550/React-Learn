import { useFormTodo } from "../hooks/useFormTodo"


export const TodoForm = ({id, onNewTodo}) => {

    const { description, onInputChange, onResetForm } = useFormTodo({
        description: '',
    })
    

    const onFormSubmit = (event) => {
       event.preventDefault()

       if( description.length <= 1 ){
        return
       }

        const newTodo = {
            id: id + 1,
            description: description,
            done: false,
        }

        onNewTodo(newTodo)
        onResetForm()

    }

  return (
    <form >

        <input type="text" placeholder="Que hay que hacer?" className="form-control" 
        name="description" 
        onChange={onInputChange}
        value={ description }/>
        
        <button type="submit" className="btn btn-outline-primary mt-2" onClick={onFormSubmit}>
            Agregar
        </button>
   
        
    </form>
  )
}
