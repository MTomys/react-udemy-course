import React from 'react';

import styles from './UserItems.module.css';

import UserItem from './UserItem';

const UserItems = ({ users }) => {
  return (
    <div>
      <ul className={styles.userContainer}>
        {users.map((user) => (
          <UserItem
            name={user.name}
            age={user.age}
            userKey={user.id}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserItems;
