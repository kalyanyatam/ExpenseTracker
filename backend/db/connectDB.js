// backend/db/connectDB.js

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI; // Get the MongoDB URI from environment variables
        mongoose.set('strictQuery', false); // Set mongoose options
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected!!'); // Log successful connection
    } catch (err) {
        console.error('MongoDB connection error:', err); // Log connection error
        process.exit(1); // Exit the process on connection failure
    }
};

module.exports = connectDB; // Export the connectDB function
