import React, { useState, useEffect } from 'react';
import { getOverallExpenses } from '../services/api';

const OverallExpenses = () => {
  const [expenses, setExpenses] = useState([]); 
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getOverallExpenses();
        setExpenses(data);
      } catch (err) {
        console.error('Failed to fetch overall expenses:', err);
        // setError('Error fetching overall expenses');
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="overall-expenses">
      <h2>Overall Expenses</h2>
      {/* {error && <p>{error}</p>} */}
      {expenses && expenses.length > 0 ? (
        <ul className="expenses-list">
          {expenses.map((expense) => (
            <li key={expense._id}>
              ${expense.totalAmount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses to show.</p>
      )}
    </div>
  );
};

export default OverallExpenses;
