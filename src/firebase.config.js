
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAsgTfAOJK4LMwI-2r-KEOMEACmhTusZ7k",
    authDomain: "recipe-realm-90f57.firebaseapp.com",
    projectId: "recipe-realm-90f57",
    storageBucket: "recipe-realm-90f57.appspot.com",
    messagingSenderId: "547342789221",
    appId: "1:547342789221:web:a6dd42caaaf4ba7c3fb48c",
    measurementId: "G-51GNR3L6JD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
