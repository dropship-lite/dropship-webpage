import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyAvt1MkWOoR95iIQOoS-E8VnWJ4gmXx0",
    authDomain: "dropship-lite.firebaseapp.com",
    databaseURL: "https://dropship-lite.firebaseio.com",
    projectId: "dropship-lite",
    storageBucket: "dropship-lite.appspot.com",
    messagingSenderId: "1069693290696",
    appId: "1:1069693290696:web:7f938d31b4d96a16157dfd",
    measurementId: "G-KS0M6S0R18"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;