import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyB5tTQcIR0isJaXk-glyY4VP8VOqTFcJ10",
        authDomain: "project-ffa50.firebaseapp.com",
        projectId: "project-ffa50",
        storageBucket: "project-ffa50.appspot.com",
        messagingSenderId: "75648864654",
        appId: "1:75648864654:web:078727bf1a6f6fe0c2d4df"
      
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };