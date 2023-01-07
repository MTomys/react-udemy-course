import React from 'react';

import classes from './Input.module.css';

const Input = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} /> {/* equivalent to: id=input.id, etc...*/}
    </div>
  );
};

export default Input;
