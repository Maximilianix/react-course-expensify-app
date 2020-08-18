import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDJ16hOBUBDCRgsW9Y978BfW3ZiCPJffGk",
    authDomain: "expensify-cb6ef.firebaseapp.com",
    databaseURL: "https://expensify-cb6ef.firebaseio.com",
    projectId: "expensify-cb6ef",
    storageBucket: "expensify-cb6ef.appspot.com",
    messagingSenderId: "498215442873",
    appId: "1:498215442873:web:f94f3539ff883fdeec7e68",
    measurementId: "G-71WK4W4TZ2"
};

firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database();

export { firebase, database as default };



