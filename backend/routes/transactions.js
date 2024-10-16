// Import the required controllers
const { addExpense, getExpenses, deleteExpense } = require('../controllers/Expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

// Create a new router instance
const router = require('express').Router();

// Define the routes
router
  .post('/add-income', addIncome)              // Route to add income
  .get('/get-incomes', getIncomes)             // Route to get all incomes
  .delete('/delete-income/:id', deleteIncome)  // Route to delete an income by id
  .post('/add-expenses', addExpense)            // Route to add expense
  .get('/get-expenses', getExpenses)           // Route to get all expenses
  .delete('/delete-expenses/:id', deleteExpense);  // Route to delete an expense by id

// Export the router
module.exports = router;
