import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIeB3F2z6Can5GeasZZtpgDz_rwUhzFYU",
  authDomain: "reactjs--login-7af89.firebaseapp.com",
  projectId: "reactjs--login-7af89",
  storageBucket: "reactjs--login-7af89.firebasestorage.app",
  messagingSenderId: "1023916452594",
  appId: "1:1023916452594:web:119a7f595ffc701e62be6b",
  measurementId: "G-VCV2G1ND31",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth and GoogleAuthProvider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Set persistence to local
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, googleProvider };
