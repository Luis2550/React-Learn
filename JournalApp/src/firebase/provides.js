
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const GoogleProvider = new GoogleAuthProvider();


export const GoogleSigIn = async() => {

    try {


        const result = await signInWithPopup( FirebaseAuth, GoogleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, uid, email, photoURL} = result.user;

        return {
            ok: true,
           displayName,
           uid,
           photoURL,
           email
        }
       


    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok:false,
            errorMessage,
            errorCode
        }
    }

}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const {uid, photoURL} = resp.user;
        console.log(resp)

        await updateProfile( FirebaseAuth.currentUser, { displayName});

        return {
            ok: true,
            uid, email, password, displayName, photoURL
        }
        
    } catch (error) {
        
        console.log(error)
        return {

            ok: false,
            errorMessage: error.message
        }
    }

}


export const LoginWithEmailPassword = async({ email, password }) => {
    try {
        
      const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
      const {uid, displayName, photoURL} = resp.user;

      return {
        ok: true,
        uid,
        displayName,
        email,
        photoURL
      }

    } catch (error) {
      console.log(error);
      return {
        ok: false,
        errorMessage: error.message,
      };
    }
};