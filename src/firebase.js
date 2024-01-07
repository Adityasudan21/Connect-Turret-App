import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCQO8Y-xA_Sc-s3-7TWBfGu8uVh_R-WkXw",
    authDomain: "connect-turret.firebaseapp.com",
    projectId: "connect-turret",
    storageBucket: "connect-turret.appspot.com",
    messagingSenderId: "9455900246",
    appId: "1:9455900246:web:dc834dc46d845bd1bc4df7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };