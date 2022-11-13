import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      title: 'Car insurance',
      amount: 250.25,
      date: new Date(2021, 2, 11),
      id: 1,
    },
    {
      title: 'Supplements',
      amount: 351.25,
      date: new Date(2022, 11, 2),
      id: 2,
    },
    { title: 'Groceries', amount: 716.25, date: new Date(2020, 2, 10), id: 3 },
    {
      title: 'School tuition',
      amount: 150.25,
      date: new Date(2020, 21, 11),
      id: 4,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <p>This is also visible</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
