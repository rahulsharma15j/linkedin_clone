import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBp3iccSOSfPrV8LxrQ5E4XjZYaDwG4Axk",
  authDomain: "linkedin-clone-8fbd6.firebaseapp.com",
  projectId: "linkedin-clone-8fbd6",
  storageBucket: "linkedin-clone-8fbd6.appspot.com",
  messagingSenderId: "40168270934",
  appId: "1:40168270934:web:af3d846a0eb1b4f0491ff7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
