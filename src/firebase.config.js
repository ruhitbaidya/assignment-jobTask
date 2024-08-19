// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACeZySyYXMpM7o26Y_xUTOdg22wUsTqqI",
  authDomain: "task-assignment-ph-hero.firebaseapp.com",
  projectId: "task-assignment-ph-hero",
  storageBucket: "task-assignment-ph-hero.appspot.com",
  messagingSenderId: "78507666096",
  appId: "1:78507666096:web:c621bb10153b97ad5de975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;