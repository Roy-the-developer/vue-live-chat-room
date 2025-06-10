import firebase from "firebase/app"
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXd0NdmZWRjMe4ZeEtGAbupR0R1RL-H40",
  authDomain: "vue-blog-system-76597.firebaseapp.com",
  projectId: "vue-blog-system-76597",
  storageBucket: "vue-blog-system-76597.firebasestorage.app",
  messagingSenderId: "930813149738",
  appId: "1:930813149738:web:9258125a6a088ae6657953",
  measurementId: "G-93NTM06ECM"
};
//in firebaseConfig
firebase.initializeApp(firebaseConfig)

//setup database
let db = firebase.firestore()

//timestamp
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp}