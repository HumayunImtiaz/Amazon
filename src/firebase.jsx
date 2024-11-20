import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAiTm8lw650GThS_E085sGRQAJXmNr4qpA",
  authDomain: "marketplace-99ad6.firebaseapp.com",
  projectId: "marketplace-99ad6",
  storageBucket: "marketplace-99ad6.appspot.com",
  messagingSenderId: "117010597531",
  appId: "1:117010597531:web:831fce63aaae5d2bc7283e",
  measurementId: "G-3BRJLPZ2RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export{app,auth};