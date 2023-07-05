import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: "shopee-91a5b.firebaseapp.com",
  projectId: "shopee-91a5b",
  storageBucket: "shopee-91a5b.appspot.com",
  messagingSenderId: "925387989229",
  appId: "1:925387989229:web:732c2091ed45fbf6b16ce4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
