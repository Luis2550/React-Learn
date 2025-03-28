import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initiaState = {
    logged: false,
}

export const AuthProvider = ( {children} ) => {
    
    const [authState, dispatch] = useReducer( authReducer, initiaState);

    const Login = ( name = '' ) => {
        
        const action = {

            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
            }
        }

        dispatch( action )

    }

    return (
        <AuthContext value={ {...authState, Login } }> 
            {children}
        </AuthContext>
    )
}
