import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAiBDIpPdEcB9lvs56HqfUTDoDtwc_DRP0",
  authDomain: "restaurantapp-af78c.firebaseapp.com",
  projectId: "restaurantapp-af78c",
  storageBucket: "restaurantapp-af78c.appspot.com",
  messagingSenderId: "1038526020437",
  appId: "1:1038526020437:web:cfb63ce5c240687973cddc",
  measurementId: "G-LLY95L3XE4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db}