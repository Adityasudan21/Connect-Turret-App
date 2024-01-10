import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFJaTxKFWR7C80RZ31XsEqhmuWxoBp0vA",
    authDomain: "connect-turret-c6557.firebaseapp.com",
    projectId: "connect-turret-c6557",
    storageBucket: "connect-turret-c6557.appspot.com",
    messagingSenderId: "46943363569",
    appId: "1:46943363569:web:8bd6d37e97e4de33c96450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };