import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Income = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  // Get income from Redux store
  const incomeList = useSelector((state) => state.income);

  const addIncome = () => {
    dispatch({ type: 'ADD_INCOME', payload: { source, amount: parseFloat(amount) } });
    setSource('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Income</h2>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addIncome}>Add Income</button>

      <h3>Income List:</h3>
      <ul>
        {incomeList.map((income, index) => (
          <li key={index}>
            {income.source}: ${income.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Income;
