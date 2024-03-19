// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBojIF-UYMAJkcIPJuNzBekI4XdkAhKNWg",
  authDomain: "thestreamyapp.firebaseapp.com",
  databaseURL: "https://thestreamyapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thestreamyapp",
  storageBucket: "thestreamyapp.appspot.com",
  messagingSenderId: "401100292164",
  appId: "1:401100292164:web:7bb5457c497ca2a063fc11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider(); 

export default app;