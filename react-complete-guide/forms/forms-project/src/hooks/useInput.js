import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [wasTouched, setWasTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && wasTouched;

  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setWasTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setWasTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
