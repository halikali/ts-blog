// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6VPEXucccNqW1dUNJSxyfDTT9wrlWFm8",
  authDomain: "ts-blog-365e5.firebaseapp.com",
  projectId: "ts-blog-365e5",
  storageBucket: "ts-blog-365e5.appspot.com",
  messagingSenderId: "16990341843",
  appId: "1:16990341843:web:c9fc3aeedbd73e06042226",
  measurementId: "G-09WHRWZXEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
