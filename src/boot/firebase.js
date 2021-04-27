
import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdbLYBt1hKjlSxMXrxREk4Kj6J0TyrRRM",
  authDomain: "twitter-clone-51de5.firebaseapp.com",
  projectId: "twitter-clone-51de5",
  storageBucket: "twitter-clone-51de5.appspot.com",
  messagingSenderId: "741934030375",
  appId: "1:741934030375:web:2bc852d4cb3bb4c15c3802",
  measurementId: "G-2S13DF1R60"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()

export default db;