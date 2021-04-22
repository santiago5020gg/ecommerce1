import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyClCP17wv0XSa2eBGALDPKLEqLqD6btQlM",
    authDomain: "crwn-db-1a048.firebaseapp.com",
    projectId: "crwn-db-1a048",
    storageBucket: "crwn-db-1a048.appspot.com",
    messagingSenderId: "977341703755",
    appId: "1:977341703755:web:b8f8559861f4d507a88fce"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;