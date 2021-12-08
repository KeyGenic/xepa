import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { useNavigate } from 'react-router';


const app = firebase.initializeApp({
  apiKey: "AIzaSyA7v2q8rY9KhAryL2QNsJxLK4RYq9fQm-U",
  authDomain: "xepa-2795c.firebaseapp.com",
  projectId: "xepa-2795c",
  storageBucket: "xepa-2795c.appspot.com",
  messagingSenderId: "279365583802",
  appId: "1:279365583802:web:383718fd02b0845d8b9383",
  measurementId: "G-QBD1Z1L35L"
})

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'}) 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = app.auth()
export default app