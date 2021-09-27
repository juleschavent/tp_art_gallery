import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD93ASsMXBsX27YFXGNJJNlihGtt6SVRYI",
    authDomain: "gallery-cdd24.firebaseapp.com",
    projectId: "gallery-cdd24",
    storageBucket: "gallery-cdd24.appspot.com",
    messagingSenderId: "297107405753",
    appId: "1:297107405753:web:0020b4d3577732d0145468"
});

export const auth = app.auth();

export default app;