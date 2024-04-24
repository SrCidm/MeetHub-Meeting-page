// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meethub-22.firebaseapp.com",
  projectId: "meethub-22",
  storageBucket: "meethub-22.appspot.com",
  messagingSenderId: "955101683744",
  appId: "1:955101683744:web:76f477a63a0069b2809c45",
  measurementId: "G-RGESLCCDKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);