import { useState } from 'react';

import UserForm from './components/UserForm';
import UserItems from './components/UserItems';

function App() {
  const [users, setUsers] = useState([
    { name: 'User 1', age: 21, id: 1 },
    { name: 'User 2', age: 33, id: 2 },
    { name: 'User 3', age: 51, id: 3 },
    { name: 'User 4', age: 19, id: 4 },
    { name: 'User 5', age: 19, id: 5 },
  ]);

  const handleUserAddition = (newUser) => {
    setUsers((users) => [newUser, ...users]);
  };

  return (
    <div className="App">
      <main>
        <UserForm onAddNewUser={handleUserAddition} />
        <UserItems users={users} />
      </main>
    </div>
  );
}

export default App;
