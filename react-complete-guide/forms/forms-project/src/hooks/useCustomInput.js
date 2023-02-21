import React, { useState } from 'react';

const useCustomInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [valueTouched, setValueTouched] = useState(false);

  const isValueValid = validateValue(value);
  const isInputInvalid = !isValueValid && valueTouched;

  const valueChangedHandler = (e) => {
    setValue(e.target.value);
  };

  const valueBlurredHandler = () => {
    setValueTouched(true);
  };

  const reset = () => {
    setValue('');
    setValueTouched(false);
  };

  return {
    value,
    isValueValid,
    isInputInvalid,
    valueChangedHandler,
    valueBlurredHandler,
    reset,
  };
};

export default useCustomInput;
