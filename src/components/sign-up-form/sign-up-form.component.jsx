import { useState } from 'react';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = e => {
    const { value, name } = e.target;
    setformFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <div>
      <h1>Create new account using your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
