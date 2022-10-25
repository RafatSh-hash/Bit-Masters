// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8AcjwDag-kcJVpfkhKB6y7KCj-rvf18U",
  authDomain: "bit-masters.firebaseapp.com",
  projectId: "bit-masters",
  storageBucket: "bit-masters.appspot.com",
  messagingSenderId: "270024776893",
  appId: "1:270024776893:web:8f028602f89272de8aabd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;