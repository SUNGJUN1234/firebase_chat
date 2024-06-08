// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCch9BS6lmpubmqqmhEBR63eK3hVMOv7X0",
  authDomain: "firestore-chat-878ce.firebaseapp.com",
  projectId: "firestore-chat-878ce",
  storageBucket: "firestore-chat-878ce.appspot.com",
  messagingSenderId: "246240100374",
  appId: "1:246240100374:web:c98a7ec92483024b4cf537",
  measurementId: "G-86JTQPMK9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();