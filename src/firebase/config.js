import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC60Y9N6zpi2Fe6GULOggjdc9w5vP4YS90",
  authDomain: "chat-app-dbda1.firebaseapp.com",
  projectId: "chat-app-dbda1",
  storageBucket: "chat-app-dbda1.appspot.com",
  messagingSenderId: "407395925843",
  appId: "1:407395925843:web:34cc325192967eb6a3eba6",
  measurementId: "G-6Z1NZH06TM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fbProvider = new firebase.auth.FacebookAuthProvider()


const auth = firebase.auth();
const db = firebase.firestore();

export {auth,db,fbProvider,firebase}
