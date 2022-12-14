import React from 'react';

import styles from './UserItem.module.css';

const UserItem = ({ name, age, userKey }) => {
  return (
    <li className={styles.userItemContainer} key={userKey}>
      <span>{name}</span>
      <span>{age}</span>
    </li>
  );
};

export default UserItem;
