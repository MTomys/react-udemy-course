import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date, id }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{amount}</div>
      <button>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
