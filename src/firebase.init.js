// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulEXus55MlNR3blWY183V2ieEUoW5SuE",
  authDomain: "update-complete-ema-john.firebaseapp.com",
  projectId: "update-complete-ema-john",
  storageBucket: "update-complete-ema-john.appspot.com",
  messagingSenderId: "115142974446",
  appId: "1:115142974446:web:914bc8f67417454aa74cff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;