import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  SignInWithPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTt-9q4Vr-lMF-r-ANS3b8sBNfPe7LZy8',
  authDomain: 'crwn-clothing-5f359.firebaseapp.com',
  projectId: 'crwn-clothing-5f359',
  storageBucket: 'crwn-clothing-5f359.appspot.com',
  messagingSenderId: '370856187076',
  appId: '1:370856187076:web:0efbcca682167ca2282591',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
