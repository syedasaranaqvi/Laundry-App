import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2JFy5jDlV0LrPxbB9pp5BUUUgEFg2WRM",
  authDomain: "laundary-app-a6325.firebaseapp.com",
  projectId: "laundary-app-a6325",
  storageBucket: "laundary-app-a6325.appspot.com",
  messagingSenderId: "69590152869",
  appId: "1:69590152869:web:a0ac9248777e4c1e087f4c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore()

export {auth,db}