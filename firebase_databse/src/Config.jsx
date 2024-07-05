import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOn5a1FTXz5dSRTQPbbU_ckgo7FRDkNvg",
  authDomain: "firstproject-fc863.firebaseapp.com",
  databaseURL: "https://firstproject-fc863-default-rtdb.firebaseio.com",
  projectId: "firstproject-fc863",
  storageBucket: "firstproject-fc863.appspot.com",
  messagingSenderId: "437602545498",
  appId: "1:437602545498:web:d1ea6b66e4a242b3044d63",
  measurementId: "G-4FP53XC962"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}