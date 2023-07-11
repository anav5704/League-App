import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD8e9XA2pf7LLNGpX8SFzpBNpeGEiYwEQc",
  authDomain: "league-of-losers-58d94.firebaseapp.com",
  projectId: "league-of-losers-58d94",
  storageBucket: "league-of-losers-58d94.appspot.com",
  messagingSenderId: "579525624137",
  appId: "1:579525624137:web:53a7c4f4a6681ed2c5da98",
  measurementId: "G-TQHDVQ3EK3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);