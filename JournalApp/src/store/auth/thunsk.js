import { GoogleSigIn, registerUserWithEmailPassword } from "../../firebase/provides"
import { checkingCredentials, login, logout } from "./authSlice"


export const chekingAuthentication = () => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() )

    }

}


export const startGoogleSingIn = () => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() )
        const result = await GoogleSigIn()

        if( !result.ok ) return dispatch(logout(result.errorMessage))

        dispatch( login( result ))
        
    }

}

export const startCreatingUserWithEmailPassword = ( { email, password, displayName}) => {

    return async(dispatch)=> {

        dispatch( checkingCredentials());

        const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if( !ok) return dispatch( logout({errorMessage}) )

        dispatch( login( {uid, displayName, email, photoURL}) )

    }

}