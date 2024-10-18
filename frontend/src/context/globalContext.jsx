import React, { useState } from "react";
import axios from 'axios';  // Ensure this import is correct

const BASE_URL = "http://localhost:5000/api/v1/";

// Create a Global Context
const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // Function to add income
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      setIncomes([...incomes, response.data]); // Update incomes with new income data
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  // You can add more functions like addExpense, getIncomes, etc. here

  return (
    <GlobalContext.Provider value={{ addIncome, incomes, expenses, error }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Export the context for use in other components
export const useGlobalContext = () => React.useContext(GlobalContext);
