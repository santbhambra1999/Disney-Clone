import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZzPm0VXWBiWZ00M_fqqdRsEGzrIGQ04g",
  authDomain: "disney-clone-final-v2.firebaseapp.com",
  projectId: "disney-clone-final-v2",
  storageBucket: "disney-clone-final-v2.appspot.com",
  messagingSenderId: "71008344467",
  appId: "1:71008344467:web:06dc85612b2540456eb066"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };