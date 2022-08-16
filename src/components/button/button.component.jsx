import './button.styles.scss';
const Button = ({ btnTitle, classType = '', ...otherProps }) => {
  const BUTTON_CLASS_TYPE = {
    inverted: 'inverted',
    google: 'google-sign-in',
  };
  return (
    <button
      className={`button-container ${BUTTON_CLASS_TYPE[classType]}`}
      {...otherProps}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
