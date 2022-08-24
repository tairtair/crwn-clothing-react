import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
// import { useState, useContext } from 'react';
// import { UserContext } from '../../contexts/user.context';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setformFields({ ...formFields, [name]: value });
  };
  const logGoogleUser = async () => await signInWithGooglePopup();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('There is no account with email provided');
          break;
        default:
          console.log(err);
      }
      // if (err.code === 'auth/wrong-password')
      //   alert('Incorrect password for email');
      // if (err.code === 'auth/user-not-found')
      //   alert('There is no account with email provided');
      // console.error(err);
    }
  };
  return (
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
