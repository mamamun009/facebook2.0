import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD9B7mUZRxyNtCEMgCG4Xojlp4Dw16-N1g",
  authDomain: "mocospace-50fc4.firebaseapp.com",
  projectId: "mocospace-50fc4",
  storageBucket: "mocospace-50fc4.appspot.com",
  messagingSenderId: "1025898642561",
  appId: "1:1025898642561:web:b84ba9ce49e52564782180",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
