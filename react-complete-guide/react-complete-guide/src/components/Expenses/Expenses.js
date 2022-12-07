import './Expenses.css';

import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState('');

  const expenseFilterSelectionHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);

    console.log(expenses[0].date.getFullYear());
    console.log(selectedFilterYear);
  };

  const filteredExpenses = selectedFilterYear
    ? expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(selectedFilterYear)
      )
    : expenses;

  return (
    <>
      <ExpensesFilter onFilterSelection={expenseFilterSelectionHandler} />
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
