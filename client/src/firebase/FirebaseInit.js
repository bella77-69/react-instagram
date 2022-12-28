import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyAUsn2swQq61vMpkigrAHzF64V7lMRRKPI",
    authDomain: "react-instagram-f368d.firebaseapp.com",
    projectId: "react-instagram-f368d",
    storageBucket: "react-instagram-f368d.appspot.com",
    messagingSenderId: "25818122984",
    appId: "1:25818122984:web:e7f2031fa8e8bb5f23975d",
    measurementId: "G-0RKXB916GK"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };