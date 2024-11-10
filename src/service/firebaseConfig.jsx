// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvvFhbV5s86wWxiMK8nNlP_wKUa66VNqQ",
  authDomain: "travelai-4bcf4.firebaseapp.com",
  projectId: "travelai-4bcf4",
  storageBucket: "travelai-4bcf4.firebasestorage.app",
  messagingSenderId: "343955649257",
  appId: "1:343955649257:web:74110615aa609f62a63678",
  measurementId: "G-CGYNVVQF12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
// const analytics = getAnalytics(app);