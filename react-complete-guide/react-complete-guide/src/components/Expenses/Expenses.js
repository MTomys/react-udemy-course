import './Expenses.css';

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState('');

  const expenseFilterSelectionHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);

    console.log(expenses[0].date.getFullYear());
    console.log(selectedFilterYear);
  };

  const getFilteredExpenses = () =>
    expenses.filter(
      (expense) => expense.date.getFullYear() === parseInt(selectedFilterYear)
    );

  let expensesContent = <p>No expenses found</p>;

  if (getFilteredExpenses().length > 0) {
    expensesContent = getFilteredExpenses().map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <ExpensesFilter onFilterSelection={expenseFilterSelectionHandler} />
      <Card className="expenses">
        {selectedFilterYear ? (
          <>{expensesContent}</>
        ) : (
          <>
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
          </>
        )}
      </Card>
    </>
  );
};

export default Expenses;
