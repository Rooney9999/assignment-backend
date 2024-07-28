import React, { useState } from 'react';
import { addExpense } from '../services/api';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState([{ user: '', amountOwed: '', percentageOwed: '' }]);

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, { user: '', amountOwed: '', percentageOwed: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExpense({ description, totalAmount, date, participants });
      alert('Expense added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding expense');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <label>Total Amount:</label>
      <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      {participants.map((participant, index) => (
        <div key={index}>
          <h3>Participant {index + 1}</h3>
          <label>User ID:</label>
          <input
            type="text"
            value={participant.user}
            onChange={(e) => handleParticipantChange(index, 'user', e.target.value)}
            required
          />
          <label>Amount Owed:</label>
          <input
            type="number"
            value={participant.amountOwed}
            onChange={(e) => handleParticipantChange(index, 'amountOwed', e.target.value)}
          />
          <label>Percentage Owed:</label>
          <input
            type="number"
            value={participant.percentageOwed}
            onChange={(e) => handleParticipantChange(index, 'percentageOwed', e.target.value)}
          />
        </div>
      ))}

      <button type="button" onClick={handleAddParticipant}>Add Participant</button>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
