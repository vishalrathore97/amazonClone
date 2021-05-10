import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-dkuPfHHBAX3fPXztkDfco6laTh1Stz0",
  authDomain: "clone-d49ac.firebaseapp.com",
  projectId: "clone-d49ac",
  storageBucket: "clone-d49ac.appspot.com",
  messagingSenderId: "1095367751997",
  appId: "1:1095367751997:web:db89a1492631c91bcded54",
  measurementId: "G-C536CWJXFD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
