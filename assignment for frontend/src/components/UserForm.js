import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ email, name, mobileNumber });
      alert('User created successfully!');
    } catch (err) {
      console.error(err);
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Mobile Number:</label>
      <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
