import * as firebase from 'firebase'
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA952CPYdEn8RD3oBt-Z9rqWyXkch1AHvw",
    authDomain: "crowd-checker-33624.firebaseapp.com",
    databaseURL: "https://crowd-checker-33624.firebaseio.com",
    projectId: "crowd-checker-33624",
    storageBucket: "crowd-checker-33624.appspot.com",
    messagingSenderId: "119320500901",
    appId: "1:119320500901:web:0fad4ba5d024b2c9948b4c",
    measurementId: "G-3XT93RXQDV"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };