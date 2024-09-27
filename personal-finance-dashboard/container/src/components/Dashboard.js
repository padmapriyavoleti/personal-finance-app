
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const income = useSelector(state => state.income);
  const expenses = useSelector(state => state.expenses);
  const investments = useSelector(state => state.investments);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalInvestments = investments.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Total Investments: ${totalInvestments}</p>
    </div>
  );
};

export default Dashboard;
