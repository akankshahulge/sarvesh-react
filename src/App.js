import React from 'react';
import Navbar from './Navbar/Navbar';
import Expenses from './components/Expenses';
import { useState } from 'react';

const dummy = [
  {
    id: 'e1',
    title: 'Data-1',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'data-4', amount: 799.49, date: new Date(2021, 2, 12) },
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
  
const [expenses,setExpenses]= useState(dummy);



  

  return (
    <div>
      <Navbar/>
      <Expenses items={dummy} />
    </div>
  );

}
export default App;