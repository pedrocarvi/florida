import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADG_edGp3Hsl7JLFTxUwPN1Th0pM7HGpo",
    authDomain: "florida-e-commerce.firebaseapp.com",
    projectId: "florida-e-commerce",
    storageBucket: "florida-e-commerce.appspot.com",
    messagingSenderId: "1060770086346",
    appId: "1:1060770086346:web:aad396b6b0d86e4e8ae333"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore() {
      return firebase.firestore(app)
  }

 