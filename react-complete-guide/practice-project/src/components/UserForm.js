import React, { useState } from 'react';

import styles from './UserForm.modal.css';

const UserForm = ({ handleUserAddition }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState();

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);

  const [showModalPopup, setShowModalPopup] = useState(false);
  const [modalPopupMessage, setModalPopupMessage] = useState('');

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);

    const isNameValid = username !== '' && username !== undefined;

    setIsUsernameValid(isNameValid);
  };

  const handleAgeInput = (e) => {
    setAge(e.target.value);

    const ageValid = age > 0 && age !== undefined;

    setIsAgeValid(ageValid);
  };

  const checkValidationStatus = () => {
    if (isUsernameValid && isAgeValid) {
      return true;
    }

    !isUsernameValid && setModalPopupMessage('Username invalid');
    !isAgeValid && setModalPopupMessage('Age invalid');

    return false;
  };

  const handleButtonClick = (e) => {
    if (checkValidationStatus() && !showModalPopup) {
    }
  };

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={handleUsernameInput} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" onChange={handleAgeInput} />
      <button onClick={handleButtonClick}>Add user</button>
    </div>
  );
};

export default UserForm;
