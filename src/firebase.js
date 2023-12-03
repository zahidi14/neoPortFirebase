// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBc9Ao6BbbrL4OQKO9JePFsPoynjFw2D-o",

  authDomain: "dzahidiport.firebaseapp.com",

  projectId: "dzahidiport",

  storageBucket: "dzahidiport.appspot.com",

  messagingSenderId: "887785488385",

  appId: "1:887785488385:web:8086713d70b8b58b3e8000",

  measurementId: "G-X67PLHBZSY",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
