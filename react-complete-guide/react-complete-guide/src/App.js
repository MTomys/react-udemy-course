import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car insurance', amount: 250.25, date: new Date(2022, 2, 11) },
    { title: 'Supplements', amount: 351.25, date: new Date(2022, 11, 2) },
    { title: 'Groceries', amount: 716.25, date: new Date(2022, 2, 10) },
    { title: 'School tuition', amount: 150.25, date: new Date(2022, 21, 11) },
  ];

  const expensesWithIds = expenses.map((expense, index) => {
    return { ...expense, id: index };
  });

  console.log(expensesWithIds);

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      {expensesWithIds.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
