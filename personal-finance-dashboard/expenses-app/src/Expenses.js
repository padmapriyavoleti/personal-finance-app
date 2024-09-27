import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Expenses = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  
  const expenses = useSelector((state) => state.expenses); // Get expenses from the Redux store

  const addExpense = () => {
    dispatch({ type: 'ADD_EXPENSE', payload: { category, amount: parseFloat(amount) } });
    setCategory('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add Expense</button>

      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
