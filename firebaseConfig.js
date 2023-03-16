// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmRU58cxmshkCinqdmIXDcJ_DbaOMcqHM",
  authDomain: "chatapp-c8993.firebaseapp.com",
  projectId: "chatapp-c8993",
  storageBucket: "chatapp-c8993.appspot.com",
  messagingSenderId: "639262296545",
  appId: "1:639262296545:web:a2819d0d8d1837cc7faaa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export{auth,db}