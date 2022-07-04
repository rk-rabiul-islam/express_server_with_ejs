const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const MogooDBConnter = require('./config/db');

// mogooDB server connection
MogooDBConnter();
// bdy data
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// environment variables
const PORT = process.env.SERVER_PORT || 5000;

// static folders
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// ejs setup
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');
app.use(ejsLayouts);

// Routes
app.use('/student', require('./routes/studentRoute'));


// server listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.bgGreen.black));
