

export const tasksReducer = ( initialState = [], action ) => {
    if (!Array.isArray(initialState)) {
        initialState = [];
    }

    switch( action.type ){

        case 'Add Task':
            return [ ...initialState, action.payload ];

        case 'Delete Task':
            
            return initialState.filter( (array) => (array.id !== action.payload))
        
        case 'Edit Task':

            return initialState.map( (task) => (
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            ))
        
        default:
            return initialState;
    }

}
