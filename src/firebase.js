import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA36R5SquNT8TcBjss240huVRgRYnA57rY",
    authDomain: "messenger-react-1940f.firebaseapp.com",
    projectId: "messenger-react-1940f",
    storageBucket: "messenger-react-1940f.appspot.com",
    messagingSenderId: "52397092485",
    appId: "1:52397092485:web:17203089c2fd44b5c103ec",
    measurementId: "G-EWJNZNMQJL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()