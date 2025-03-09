
const initialState = [{
    id: 1,
    todo: "Hacer deberes",
    done: false
}]

// si no se le envia nada la definimos al inicio
const todoReducer = ( state = initialState, action={} ) => {

    if(action.type === '[Todo] add todo'){
        state = [ ...state, action.payload ]
    }

    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: "Encontrar las esferas del dragon",
    done: false,
}

const addTodoAction = {
    type: "[Todo] add todo",
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction )
console.log(todos)