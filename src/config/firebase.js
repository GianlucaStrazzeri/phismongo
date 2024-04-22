import { initializeApp } from "firebase/app";// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc8ftYn_9A4fFIETKDZBhwSZw6n99jUIk",
  authDomain: "phis-cc1f4.firebaseapp.com",
  projectId: "phis-cc1f4",
  storageBucket: "phis-cc1f4.appspot.com",
  messagingSenderId: "291143370707",
  appId: "1:291143370707:web:31c25bf8e904c287be9126"
};


const app = initializeApp(firebaseConfig);// Initialize Firebase

module.exports = app
