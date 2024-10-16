const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxLength: [50, 'Title cannot be more than 50 characters']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        min: [0, 'Amount cannot be negative'],
        max: [99999999999, 'Amount cannot exceed 99999999999']
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        validate: {
            validator: function(value) {
                // Ensure the date is not in the future
                return value <= new Date();
            },
            message: 'Date cannot be in the future'
        }
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        maxLength: [20, 'Category cannot be more than 20 characters'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxLength: [200, 'Description cannot be more than 200 characters'],
        trim: true
    }
}, { timestamps: true });

// Correct export
module.exports = mongoose.model('Income', IncomeSchema);
