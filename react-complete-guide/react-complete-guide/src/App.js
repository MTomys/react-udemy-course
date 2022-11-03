import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      title: 'Car insurance',
      amount: 250.25,
      date: new Date(2022, 2, 11),
      id: 1,
    },
    {
      title: 'Supplements',
      amount: 351.25,
      date: new Date(2022, 11, 2),
      id: 2,
    },
    { title: 'Groceries', amount: 716.25, date: new Date(2022, 2, 10), id: 3 },
    {
      title: 'School tuition',
      amount: 150.25,
      date: new Date(2022, 21, 11),
      id: 4,
    },
  ];

  console.log(expenses);

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
