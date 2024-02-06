// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCxy01OIhOYrC_JS8c8Nrc2Grc-Gx-uX4Y",

  authDomain: "dzahidi.firebaseapp.com",

  projectId: "dzahidi",

  storageBucket: "dzahidi.appspot.com",

  messagingSenderId: "1000528849163",

  appId: "1:1000528849163:web:958122ae2a036a985d5a0e",

  measurementId: "G-S98E8KB5B6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
