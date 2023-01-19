import { useEffect, useMemo, useState } from 'react';

// Componente que controla la información, el estado de la información del formulario
// Inicializamos el formulario como un objeto vacío
export const useForm = (initialForm = {}, formValidations = {}) => {

    // En primer lugar obtenemos la función del estado (formState) que contiene la información del formulario
    // Luego obtenemos la función que permite cambiar el estado del formulario
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    // Cada vez que cambie el estado del formulario disparamos la función de la validación del formulario
    useEffect(() => {
        createValidators();
    }, [formState]);

    // Cambia el estado del formulario en el state si el formulario inicial ha cambiado
    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    // Para memorizar si el formulario es válido o no
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    // FUNCIONES QUE CONTROLAN EL ESTADO DEL FORMULARIO

    // La función onInputChange se ocupa de mantener los cambios del input en el estado
    // El target es donde se encuentra la información del formulario. Dentro contiene el name, que es el identificador del input que ha recibido un cambio
    // El value es lo que hay escrito en el input. Por ese motivo se guarda la información en el estado (clave / valor) como (name / value)
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // Esta función resetea el estado del formulario a un objeto vacío
    const onResetForm = () => {
        setFormState(initialForm);
    }

    // VALIDACIONES

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = "Error de validación"] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    };

    // RETURN

    // Devolvemos el spread de lo que contenga el estado (la información que estamos guardando en el useState) además dee las funciones que hemos codificado que modifican ese estado
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}