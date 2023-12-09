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
  apiKey: "AIzaSyBep3pP3sDJo5B6MixhuOC2V8RLY64qi8c",
  authDomain: "solarvolt-3c79b.firebaseapp.com",
  projectId: "solarvolt-3c79b",
  storageBucket: "solarvolt-3c79b.appspot.com",
  messagingSenderId: "913655491322",
  appId: "1:913655491322:web:e2d988645602664b43b743",
  measurementId: "G-S7H58DMT17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
