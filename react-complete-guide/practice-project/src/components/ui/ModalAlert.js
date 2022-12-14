import React from 'react';

import styles from './ModalAlert.module.css';

const ModalAlert = ({ alertMessage, onClose }) => {
  return (
    <div className={styles.modalAlert}>
      <div>{alertMessage}</div>
      <button onClick={() => onClose()}>X</button>
    </div>
  );
};

export default ModalAlert;
