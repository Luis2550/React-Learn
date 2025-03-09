import { useState } from "react";

export const AddCategory = ( {onNewValue, suma}) => {

    const [inputValue, setinputValue] = useState('')

    // const onInputChange = (e) =>{
    //     console.log(e.target.value);
    //     setinputValue(e.target.value);
    // }

    const onInputChange = ( {target} )=> {
        setinputValue( input => target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const valor = inputValue.trim();
        if(valor.length <= 1) return;
        
        onNewValue(valor);
        suma(3, 8);
        setinputValue('');

    }

    return (

        <form onSubmit={ e => onSubmit(e) }>
            <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value={inputValue}
            onChange={ e => onInputChange(e) }
            />
        </form>
        )
}
