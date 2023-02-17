import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAZWOmFm3u6Jy-Vn8VJzSgHo-TAQXUB5dY",
  authDomain: "connect-xt.firebaseapp.com",
  projectId: "connect-xt",
  storageBucket: "connect-xt.appspot.com",
  messagingSenderId: "814311006603",
  appId: "1:814311006603:web:0f74eafacca689649dcf8e",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
