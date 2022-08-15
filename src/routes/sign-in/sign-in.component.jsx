import './sign-in.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>I'm Sign In Page</h1>;
      <button onClick={logGoogleUser}>Sign in with Google account</button>
    </div>
  );
}
