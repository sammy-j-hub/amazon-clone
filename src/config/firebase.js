// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCcFH2R-DQ3VqUEGCJvCXH5sTvDqdnOzjc",
    authDomain: "clone-3eeeb.firebaseapp.com",
    databaseURL: "https://clone-3eeeb.firebaseio.com",
    projectId: "clone-3eeeb",
    storageBucket: "clone-3eeeb.appspot.com",
    messagingSenderId: "161389043757",
    appId: "1:161389043757:web:5c6eb3dffa304d4689d8a4",
    measurementId: "G-YGLCQ0JE9M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};