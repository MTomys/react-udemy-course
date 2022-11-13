import { useEffect, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const STARTING_EXPENSES = [
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

  const [expenses, setExpenses] = useState(STARTING_EXPENSES);

  const [preferredId, setPreferredId] = useState();

  const addExpenseHandler = (expense) => {
    setExpenses((expenses) => [expense, ...expenses]);
  };

  useEffect(() => {
    const idsArray = expenses.map((expense) => expense.id);

    console.log(idsArray);

    console.log(Math.max(...idsArray));

    setPreferredId(Math.max(...idsArray) + 1);

    console.log('useeffect called, preferred id: ' + preferredId);
  }, [
    expenses,
    preferredId /* not sure why i need this preferredId here for the vscode to stop screaming */,
  ]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} preferredId={preferredId} />
      <p>This is also visible</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
