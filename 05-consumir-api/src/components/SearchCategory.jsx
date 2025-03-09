import { useState } from "react"

export const SearchCategory = ( {onNewValue}) => {

    const [inputValue, setinputValue] = useState('');

    const onChangeInput = (e) => {

        setinputValue( e.target.value )
        
    }

    const sendForm = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        onNewValue(inputValue); // Aquí se llama la función que viene de App.jsx
    }

  return (
    <form className="w-[60%]" onSubmit={e => sendForm(e)}>
        <input type="text" className="w-full rounded-full text-dark-mode p-3 text-xl flex-1"
        placeholder="Buscar imagen"
        value={inputValue}
        onChange={ (e) => onChangeInput(e) }
        />
    </form>
  )
}
