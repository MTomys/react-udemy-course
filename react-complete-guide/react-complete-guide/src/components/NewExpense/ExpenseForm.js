import React, { useState } from 'react';

import './NewExpense.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangedHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };

  const amountChangedHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
  };

  const dateChangedHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
