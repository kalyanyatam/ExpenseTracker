const Expense = require("../models/ExpenseModel");  // Use Expense instead of ExpenseSchema

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    try {
        // Validation to ensure all fields are filled
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validation to check if amount is a positive number
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }

        // Create a new expense entry
        const expense = new Expense({
            title,
            amount,
            category,
            description,
            date
        });

        // Save the expense to the database
        await expense.save();

        // Return success response
        res.status(201).json({ message: 'Expense added successfully', expense });
    } catch (error) {
        // Log and return server error
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        // Fetch expenses from the database, sorted by createdAt in descending order (newest first)
        const expenses = await Expense.find().sort({ createdAt: -1 });

        // Respond with the list of expenses
        res.status(200).json(expenses);
    } catch (error) {
        // Log the error for debugging
        console.error('Error fetching expenses:', error);

        // Respond with a 500 status and an error message
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the expense by ID
        const deletedExpense = await Expense.findByIdAndDelete(id);

        // Check if the expense was found and deleted
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        // Return success response
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        // Log and return server error
        console.error('Error deleting expense:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
