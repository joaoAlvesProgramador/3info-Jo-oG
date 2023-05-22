import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAbWF2ajaIIF3VXyPCXeerL0SRxvhwjLpE",
  authDomain: "info-joaog.firebaseapp.com",
  projectId: "info-joaog",
  storageBucket: "info-joaog.appspot.com",
  messagingSenderId: "718252441401",
  appId: "1:718252441401:web:cb3d295ad668b1bd04f2e8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)