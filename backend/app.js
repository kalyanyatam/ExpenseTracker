const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDB'); // Import the connectDB function from the db folder
const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Log the MongoDB URI for debugging
console.log('MongoDB URI:', process.env.MONGO_URI);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.send('hiii');
});

// Load routes dynamically
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

// Connect to MongoDB and start the server
const startServer = async () => {
    await connectDB(); // Call the connectDB function to connect to MongoDB
    app.listen(PORT, () => {
        console.log('Listening to the port:', PORT); // Log the port
    });
};

startServer(); // Start the server
