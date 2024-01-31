// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pVqra8QrBLG3EHmhaOBiRxNykhi3rMo",
  authDomain: "netflix-gpt-d9242.firebaseapp.com",
  projectId: "netflix-gpt-d9242",
  storageBucket: "netflix-gpt-d9242.appspot.com",
  messagingSenderId: "789105009514",
  appId: "1:789105009514:web:6e648e73e6df9242d37b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();