import React, { useState } from 'react';

import './NewExpense.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [displayForm, setDisplayForm] = useState(false);

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const formVisibilityHandler = () => {
    setDisplayForm((displayForm) => !displayForm);
  };

  return (
    <>
      {displayForm ? (
        <>
          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangedHandler}
                />
              </div>

              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={enteredAmount}
                  onChange={amountChangedHandler}
                />
              </div>

              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2023-12-31"
                  value={enteredDate}
                  onChange={dateChangedHandler}
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </form>
          <button onClick={formVisibilityHandler}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <button onClick={formVisibilityHandler}>Add new expense</button>
          </div>
        </>
      )}
    </>
  );
};

export default ExpenseForm;
