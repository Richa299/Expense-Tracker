// import {getAuth} from 'firebase/auth'
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC2Tsb8ETdXmVYOw9U2xsBWTNDiB6pFN14",
  authDomain: "expense-26304.firebaseapp.com",
  projectId: "expense-26304",
  storageBucket: "expense-26304.appspot.com",
  messagingSenderId: "127409249173",
  appId: "1:127409249173:web:c32e4f732698debe5eb49c",
  measurementId: "G-RN4FM01BL4"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db = firebaseApp.firestore();
  export {auth, db}