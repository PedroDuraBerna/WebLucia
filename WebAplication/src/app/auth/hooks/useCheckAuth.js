import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal/thunks";

// Hook para comprobar el estado de autenticación del usuario
export const useCheckAuth = () => {
    // Vamos a obtener la información del estatus del usuario del store 
    const { status } = useSelector(state => state.auth);
    // eldispatch es una función de React Redux que despacha la acción que le enviamos
    const dispatch = useDispatch();

    // El useEffect es una función que va a estar pendiente de algo. Tambien se le denomina observable
    useEffect(() => {
        // Función de firebase que esta pendiente de los cambios del estado de la autenticación
        // Tiene como argumento el auth, en nuestro caso:
        onAuthStateChanged(FirebaseAuth, async (user) => {
            // Si no hay usuario despachamos la función de logout
            if (!user) return dispatch(logout());
            // Si existe usuario despachamos el login
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(startLoadingNotes());
        });

    }, []);

    return status;

}
