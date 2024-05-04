import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5anjkSHdtHiciCqnnxMpSeOxqAqkIbRQ",
    authDomain: "challenge-2417b.firebaseapp.com",
    projectId: "challenge-2417b",
    storageBucket: "challenge-2417b.appspot.com",
    messagingSenderId: "420811570828",
    appId: "1:420811570828:web:670f74d1ee69f294c185a9",
    measurementId: "G-2HXVFCLH2J"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };