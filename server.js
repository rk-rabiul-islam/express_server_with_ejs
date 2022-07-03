const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');



// environment variables
const PORT = process.env.SERVER_PORT || 5000;

// static folders
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// ejs setup
app.set('view engine', 'ejs');

// Routes
app.use('/student', require('./routes/studentRoute'));


// server listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.bgGreen.black));
