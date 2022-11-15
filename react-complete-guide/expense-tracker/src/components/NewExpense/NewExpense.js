import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense, preferredId }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: preferredId,
    };

    console.log(expenseData);

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense__controls">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
