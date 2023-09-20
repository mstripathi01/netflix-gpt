// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc07Gzn2R5PnwvCgNh0zkZAr5iONoshF0",
  authDomain: "netflixgpt-72d40.firebaseapp.com",
  projectId: "netflixgpt-72d40",
  storageBucket: "netflixgpt-72d40.appspot.com",
  messagingSenderId: "105611569359",
  appId: "1:105611569359:web:93eff6d0fa99ce35082fba",
  measurementId: "G-S353X7XMKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
