import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUV6qxPV_k70X7C9QCHoXNhqppz4oDEaQ",
  authDomain: "opencart-22a4a.firebaseapp.com",
  projectId: "opencart-22a4a",
  storageBucket: "opencart-22a4a.appspot.com",
  messagingSenderId: "803226612272",
  appId: "1:803226612272:web:1fb6bc96826f30bd5fb3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider};