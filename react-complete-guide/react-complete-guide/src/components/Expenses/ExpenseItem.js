import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date, id }) => {
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = () => {
    setItemTitle('click clicked!');
    console.log(itemTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{itemTitle}</h2>
      <div className="expense-item__price">{amount}</div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
