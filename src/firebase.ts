// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "COPY_PASTE",
  authDomain: "COPY_PASTE",
  projectId: "COPY_PASTE",
  storageBucket: "COPY_PASTE",
  messagingSenderId: "COPY_PASTE",
  appId: "COPY_PASTE",
  measurementId: "COPY_PASTE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const db = getFirestore(app);