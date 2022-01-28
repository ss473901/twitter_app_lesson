import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-Df8UKQ4ZI1Q6H9FrAyJw6HzJyCGTneo",
  authDomain: "twitter-app-15021.firebaseapp.com",
  projectId: "twitter-app-15021",
  storageBucket: "twitter-app-15021.appspot.com",
  messagingSenderId: "445004565595",
  appId: "1:445004565595:web:969ece18f0d5576fce437e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
