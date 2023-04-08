import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import AddExpense from './AddExpense/AddExpense';
import Expenses from './components/Expenses';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Data-1',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Data-4',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Data-2',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Data-3',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* <AddExpense onAddExpense={addExpenseHandler} /> */}
        {expenses && expenses.length > 0 ? (
          <Expenses items={expenses} />
        ) : (
          <p>No expenses found.</p>
        )}
      </main>
    </div>
  );
};

export default App;
