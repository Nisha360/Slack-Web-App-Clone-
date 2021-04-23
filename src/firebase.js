import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
  var firebaseConfig = {
    apiKey: "AIzaSyC72xV4aqtvljYKrc1aNdNpEmvj4fMdeAU",
    authDomain: "react-slack-clone-3287d.firebaseapp.com",
    databaseURL: "https://react-slack-clone-3287d.firebaseio.com",
    projectId: "react-slack-clone-3287d",
    storageBucket: "react-slack-clone-3287d.appspot.com",
    messagingSenderId: "481628459378",
    appId: "1:481628459378:web:a79529d9611c5089e78deb",
    measurementId: "G-2BQQ7F7GGZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
 
