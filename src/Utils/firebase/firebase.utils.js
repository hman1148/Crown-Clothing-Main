import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4dNY792oFm-r_upfm-FROdLy0HFg6z3U",
    authDomain: "crwn-clothing-db-4c8fe.firebaseapp.com",
    projectId: "crwn-clothing-db-4c8fe",
    storageBucket: "crwn-clothing-db-4c8fe.appspot.com",
    messagingSenderId: "231488036487",
    appId: "1:231488036487:web:85561a47adf692db25a222"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  