import React, { useState } from 'react';
import ModalAlert from './ui/ModalAlert';

import styles from './UserForm.module.css';

const UserForm = ({ onAddNewUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState();

  const [showModalPopup, setShowModalPopup] = useState(false);
  const [modalPopupMessage, setModalPopupMessage] = useState('');

  const popupClosedHandler = () => setShowModalPopup(false);

  const handleButtonClick = (e) => {
    if (username !== '' && age > 0 && !setShowModalPopup) {
      onAddNewUser({ name: username, age: age, id: Math.random() });
      setUsername('');
      setAge('');
      return;
    }

    username === '' && setModalPopupMessage('Invalid username');
    age <= 0 && setModalPopupMessage('Invalid age');
    setShowModalPopup(true);
  };

  return (
    <div>
      <label className={styles.inputLabel} htmlFor="username">
        Username
      </label>
      <input
        className={styles.inputField}
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={styles.inputLabel} htmlFor="age">
        Age (Years)
      </label>
      <input
        className={styles.inputField}
        id="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add user</button>
      {showModalPopup && (
        <ModalAlert
          alertMessage={modalPopupMessage}
          onClose={popupClosedHandler}
        />
      )}
    </div>
  );
};

export default UserForm;
