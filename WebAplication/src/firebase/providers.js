import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

// LOGIN CON GOOGLE

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const { email, displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            // User info
            email,
            displayName,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

// REGISTRO CON EMAIL Y PASSWORD

export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
    try {
        // Firebase function
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // Actualizar displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return {
            ok: true,
            // User info
            email,
            displayName,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
};

// LOGIN CON EMAIL Y PASSWORD

export const loginWithEmailAndPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            // User info
            email,
            displayName,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

// LOGOUT DE FIREBASE

export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut();

}
