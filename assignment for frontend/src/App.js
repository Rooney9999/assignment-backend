import React from 'react';
import UserForm from './components/UserForm';
import ExpenseForm from './components/ExpenseForm';
import UserExpenses from './components/UserExpenses';
import OverallExpenses from './components/OverallExpenses';

const App = () => {
  const [userId, setUserId] = React.useState('');

  return (
    <div>
      <h1>Daily Expenses Sharing Application</h1>
      <UserForm />
      <ExpenseForm />
      {/* <input
        type="text"
        placeholder="Enter User ID to view expenses"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      /> */}
      {userId && <UserExpenses userId={userId} />}
      <OverallExpenses />
    </div>
  );
};

export default App;