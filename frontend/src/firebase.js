// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAn14PEph0XoPui4idbfFLMBm9tOmTEBo4",
  authDomain: "stackoverflow-9495e.firebaseapp.com",
  projectId: "stackoverflow-9495e",
  storageBucket: "stackoverflow-9495e.appspot.com",
  messagingSenderId: "1031469362119",
  appId: "1:1031469362119:web:d3cc62c176a5e7ea5087e2",
  measurementId: "G-18F4JRMK8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();