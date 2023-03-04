import useInput from '../hooks/useInput';

const validateName = (name) => name !== '' && name !== null;
const validateEmail = (email) => email?.includes('@');

const BasicForm = (props) => {
  const fNameControls = useInput(validateName);
  const lNameControls = useInput(validateName);
  const emailControls = useInput(validateEmail);

  const areInputsValid =
    fNameControls.isValid && lNameControls.isValid && emailControls.isValid;

  const buttonSubmitHandler = (event) => {
    event.preventDefault();

    if (!areInputsValid) {
      console.error('form is invalid');
      return;
    }

    console.log(fNameControls.value);
    console.log(lNameControls.value);
    console.log(emailControls.value);
    fNameControls.reset();
    lNameControls.reset();
    emailControls.reset();
  };

  const firstNameStyle = fNameControls.hasError
    ? 'form-control invalid'
    : 'form-control ';
  const lastNameStyle = lNameControls.hasError
    ? 'form-control invalid'
    : 'form-control ';
  const emailStyle = emailControls.hasError
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <form onSubmit={buttonSubmitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={fNameControls.valueChangedHandler}
            value={fNameControls.value}
            onBlur={fNameControls.inputBlurHandler}
          />
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lNameControls.valueChangedHandler}
            value={lNameControls.value}
            onBlur={lNameControls.inputBlurHandler}
          />
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailControls.valueChangedHandler}
          value={emailControls.value}
          onBlur={emailControls.inputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!areInputsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
