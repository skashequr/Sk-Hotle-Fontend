// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCedtX9-Fw_uAfbW2f9gbUoty-IZIUPaZ4",
  authDomain: "hottle-service.firebaseapp.com",
  projectId: "hottle-service",
  storageBucket: "hottle-service.appspot.com",
  messagingSenderId: "195199622438",
  appId: "1:195199622438:web:2cc434b0a4957315c575e7",
  measurementId: "G-85LPWDKQGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
