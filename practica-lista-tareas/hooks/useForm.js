import { useState } from "react"

export const useForm = (initial) => {

    const [formState, setFormState] = useState(initial);

    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState( {
            ...formState, 
            [name]: value, 
        })
    }

    const onResetForm = () => {
        setFormState( initial )
    }

  return {
    ...formState,
    onInputChange: onInputChange,
    onResetForm
  }
}
