import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOD4bCA_cd_hd-bRjEkejovxXOZ8uO_C4",
  authDomain: "clone-f1bbe.firebaseapp.com",
  databaseURL: "https://clone-f1bbe.firebaseio.com",
  projectId: "clone-f1bbe",
  storageBucket: "clone-f1bbe.appspot.com",
  messagingSenderId: "426960887895",
  appId: "1:426960887895:web:bb1a4bd1b4430adc818312",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
