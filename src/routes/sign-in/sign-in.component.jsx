import './sign-in.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
// import { getRedirectResult } from 'firebase/auth';
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
// import { useEffect } from 'react';
export default function SignIn() {
  // useEffect(() => {
  //   const logGoogleRedirectUser = async () => {
  //     const response = await getRedirectResult(auth);
  //     response && createUserDocumentFromAuth(response.user);
  //   };
  //   logGoogleRedirectUser();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>I'm Sign In Page</h1>;
      <button onClick={logGoogleUser}>Sign in with Google account</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
    </div>
  );
}
