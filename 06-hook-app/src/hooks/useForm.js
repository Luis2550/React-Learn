
import {useState} from 'react'

export const useForm = (initial) => {
    
    const [formState, setformState] = useState(initial);
    
    
      const onInputChange = ({target}) =>{
        
        const {name, value} = target;
        setformState( {
          ...formState,
          [name]: value,
        } )
        
      }

      const onResetForm = () =>{
        setformState(initial)
      }

      return {
        //manda los elementos como username email password crea una copia casi por decir y puedo esto desestructurar despues
        ...formState,
        onResetForm,
        onInputChange

      }
}
