import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [FormValidation, setFormValidation] = useState({});

    useEffect(() => {
  
        createValidators();

    }, [formState])
    

    function onInputChange({ target }) {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(FormValidation)) {
            
            if( FormValidation[formValue] !== null ) return false;
        }

        return true;

    }, [FormValidation])

    const onResetForm = () => {
        setFormState( initialForm );
    }


    const createValidators = ( ) => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            
            const [ fn, errorMessage] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn( formState[formField]) ? null : errorMessage;

        }

        setFormValidation( formCheckedValues );

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...FormValidation,
        isFormValid,
    }
}