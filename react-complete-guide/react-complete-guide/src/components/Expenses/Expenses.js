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

  return (
    <>
      <ExpensesFilter onFilterSelection={expenseFilterSelectionHandler} />
      <Card className="expenses">
        {selectedFilterYear ? (
          <>
            {expenses
              .filter(
                (expense) =>
                  expense.date.getFullYear() === parseInt(selectedFilterYear)
              )
              .map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))}
          </>
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
