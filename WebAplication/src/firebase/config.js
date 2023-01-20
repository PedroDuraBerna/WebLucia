// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRmezG4NGzL8FcGQF60-c4vWE8I-uEus4",
    authDomain: "digitalspace-5d8da.firebaseapp.com",
    projectId: "digitalspace-5d8da",
    storageBucket: "digitalspace-5d8da.appspot.com",
    messagingSenderId: "939302786949",
    appId: "1:939302786949:web:93a98bb843608c121e96ec",
    measurementId: "G-S2NHH074QX"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Función para analitycs de firebase, no está configurado, ver tema npm
export const analytics = getAnalytics(FirebaseApp);

// Funcionalidades de autenticación en firebase
export const FirebaseAuth = getAuth(FirebaseApp);

// Funcionalidades de la configuración de la base de datos de firebase
export const FirebaseDB = getFirestore(FirebaseApp);
