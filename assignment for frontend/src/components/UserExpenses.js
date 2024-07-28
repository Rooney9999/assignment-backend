import React, { useState, useEffect } from 'react';
import { getUserExpenses } from '../services/api';

const UserExpenses = ({ userId }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getUserExpenses(userId);
        setExpenses(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExpenses();
  }, [userId]);

  return (
    <div>
      <h2>User Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.expense.description}: ${expense.amountOwed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserExpenses;
