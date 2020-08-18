import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:498215442873:web:f94f3539ff883fdeec7e68",
    measurementId: "G-71WK4W4TZ2"
};

firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database();

export { firebase, database as default };



