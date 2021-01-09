import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxcBB6DwwHPyCmkNnnPi86joe4kK1K0Z8",
  authDomain: "linkedin-b32ac.firebaseapp.com",
  projectId: "linkedin-b32ac",
  storageBucket: "linkedin-b32ac.appspot.com",
  messagingSenderId: "863631740200",
  appId: "1:863631740200:web:9fe3108df94ab77699541d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
