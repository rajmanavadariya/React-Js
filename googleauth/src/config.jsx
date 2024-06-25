// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBOn5a1FTXz5dSRTQPbbU_ckgo7FRDkNvg",
  authDomain: "firstproject-fc863.firebaseapp.com",
  projectId: "firstproject-fc863",
  storageBucket: "firstproject-fc863.appspot.com",
  messagingSenderId: "437602545498",
  appId: "1:437602545498:web:d1ea6b66e4a242b3044d63",
  measurementId: "G-4FP53XC962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider}