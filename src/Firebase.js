// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx_SBG5p3NmdYFYfVMNawkIuWBa7rJq_I",
  authDomain: "streamy-7b043.firebaseapp.com",
  projectId: "streamy-7b043",
  storageBucket: "streamy-7b043.appspot.com",
  messagingSenderId: "657554938016",
  appId: "1:657554938016:web:da79fb0e7a8178f01251c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)