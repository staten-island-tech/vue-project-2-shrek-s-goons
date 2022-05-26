import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUmPFllUExMmXmXlIgOhPNU094Q1CgtoY",
  authDomain: "shrek-web.firebaseapp.com",
  projectId: "shrek-web",
  storageBucket: "shrek-web.appspot.com",
  messagingSenderId: "693306035658",
  appId: "1:693306035658:web:b18666e0d2513535bf1333",
  measurementId: "G-ZV63T01LXC",
};

// init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();

export { auth };

//init firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
