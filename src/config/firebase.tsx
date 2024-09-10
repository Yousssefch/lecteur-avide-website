// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "lecteur-avide-site-web.firebaseapp.com",
  projectId: "lecteur-avide-site-web",
  storageBucket: "lecteur-avide-site-web.appspot.com",
  messagingSenderId: "24416361964",
  appId: "1:24416361964:web:8ee21ab1ece6c720d774c9",
  measurementId: "G-CBTQ2K1RC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);