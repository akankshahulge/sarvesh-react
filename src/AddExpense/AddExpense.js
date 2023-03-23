import React from 'react';
import Navbar from '../Navbar/Navbar';

import ExpenseForm from './ExpenseForm';
import './AddExpense.css';

const AddExpense = () => {

  const saveExpenseDataHandler=(enteredExpenseData)=>{
   const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
   } 
  }

  return (
    <div>
      <Navbar/>
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    </div>
  );
};

export default AddExpense;