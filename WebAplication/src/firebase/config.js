// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKwQK-rq5Y7naoib7FdIok8WtAYXIYHjo",
    authDomain: "react-curso-bf166.firebaseapp.com",
    projectId: "react-curso-bf166",
    storageBucket: "react-curso-bf166.appspot.com",
    messagingSenderId: "836326013943",
    appId: "1:836326013943:web:2eddd837e80fffb0b9ccf2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Funcionalidades de autenticación en firebase
export const FirebaseAuth = getAuth(FirebaseApp);

// Funcionalidades de la configuración de la base de datos de firebase
export const FirebaseDB = getFirestore(FirebaseApp);
