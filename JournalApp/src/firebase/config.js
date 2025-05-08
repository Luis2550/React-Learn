import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBbWHG99oXU-TrESyl1XGp7__xZkFmRTAw",
  authDomain: "react-cursos-38e2c.firebaseapp.com",
  projectId: "react-cursos-38e2c",
  storageBucket: "react-cursos-38e2c.firebasestorage.app",
  messagingSenderId: "980638302031",
  appId: "1:980638302031:web:1b9e0d153ad4898c36cf3a"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );