// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADZl5GRJloX_2H4u0DSfpBqWyF5CkB57w",
  authDomain: "login-firebase-c975e.firebaseapp.com",
  projectId: "login-firebase-c975e",
  storageBucket: "login-firebase-c975e.appspot.com",
  messagingSenderId: "937466134641",
  appId: "1:937466134641:web:a24dd358f8b07a739b1bd0",
  measurementId: "G-1RER5PYY8W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


