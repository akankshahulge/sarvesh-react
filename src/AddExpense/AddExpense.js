import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ExpenseForm from './ExpenseForm';
import './AddExpense.css';

const AddExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      <Navbar />
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};

export default AddExpense;
