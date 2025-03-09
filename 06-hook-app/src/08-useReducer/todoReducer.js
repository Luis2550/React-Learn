
export const todoReducer = ( initialState=[], action ) => {
    switch (action.type ) {
        case 'Add Todo':
            return [ ...initialState, action.payload ]

        case 'Remove Todo':
            return initialState.filter( (elemento) => (elemento.id !== action.payload) )
        
        case 'Toggle Todo':
            
            return initialState.map( (element) => {
                
                if( element.id === action.payload){
                    
                    return {
                        ...element,
                        done: !element.done,
                    }
                }

                return element;
            });


        default:
            return initialState;
    }
}