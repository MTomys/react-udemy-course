import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ title, amount, date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
};

export default ExpenseItem;
