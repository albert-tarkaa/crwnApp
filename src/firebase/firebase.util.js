import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBtRSxFUayI8lr1z0gSAawd3yynZGC6mNQ',

  authDomain: 'crwn-dfdbc.firebaseapp.com',

  projectId: 'crwn-dfdbc',

  storageBucket: 'crwn-dfdbc.appspot.com',

  messagingSenderId: '409296476107',

  appId: '1:409296476107:web:25c902e12487643754c84e',
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
