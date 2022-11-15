import { useState } from 'react';

import React from 'react';

const NewCourseGoal = ({ onAddNewGoal }) => {
  const [newGoaltitle, setNewGoalTitle] = useState('');

  const inputChangeHandler = (e) => {
    setNewGoalTitle(e.target.value);
  };

  const addNewCourseHandler = () => {
    onAddNewGoal(newGoaltitle);
    setNewGoalTitle('');
  };

  return (
    <div>
      <label htmlFor="newGoal">Course goal</label>
      <input
        id="newGoal"
        type="text"
        onChange={inputChangeHandler}
        value={newGoaltitle}
      ></input>
      <button onClick={addNewCourseHandler}></button>
    </div>
  );
};

export default NewCourseGoal;
