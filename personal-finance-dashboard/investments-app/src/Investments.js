import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Investments = () => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  
  const investments = useSelector((state) => state.investments);

  const addInvestment = () => {
    dispatch({ type: 'ADD_INVESTMENT', payload: { type, amount: parseFloat(amount) } });
    setType('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Investments</h2>
      <input
        type="text"
        placeholder="Investment Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addInvestment}>Add Investment</button>
      
      <h3>Investment List</h3>
      <ul>
        {investments.map((investment, index) => (
          <li key={index}>
            {investment.type}: ${investment.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Investments;
