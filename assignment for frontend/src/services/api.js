const API_URL = 'http://localhost:5000/api';

export const createUser = async (userData) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getUserDetails = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const addExpense = async (expenseData) => {
  const response = await fetch(`${API_URL}/expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expenseData),
  });
  return response.json();
};

export const getUserExpenses = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/expenses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const getOverallExpenses = async () => {
    const response = await fetch(`${API_URL}/expenses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    return data;
  };
  

export const downloadBalanceSheet = async () => {
  const response = await fetch(`${API_URL}/expenses/balance-sheet`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.blob(); // Assuming the balance sheet is a file to be downloaded
};
