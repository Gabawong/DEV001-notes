// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC35i8iZoqYXSMaZsnIgWvsqyUnHwlxpts",
  authDomain: "lab-notes-ea2a9.firebaseapp.com",
  projectId: "lab-notes-ea2a9",
  storageBucket: "lab-notes-ea2a9.appspot.com",
  messagingSenderId: "652856611298",
  appId: "1:652856611298:web:b5f1a9d7167382690169bb",
  measurementId: "G-6PD9BZEBLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 
export const firestore = getFirestore(app);