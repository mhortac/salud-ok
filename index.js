// Module dependencies.
const express = require('express');
const mongoose = require('mongoose');

const UserController = require('./controllers/user');
const bodyParser = require('body-parser');

const app = express();
//const frontend = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));

/**
 * Route: Home endpoint
 */
app.get('/api/', (req, res) => {
    res.send('SALUD OK API REST');
});

/**
 * Route: Create a user on data base.
 */
app.post('/api/user/create', UserController.create);

/**
 * Route: Do Login
 */
app.post('/api/user/login', UserController.login);

/**
 * Route: Create a user on data base.
 */
app.listen(3000, () => {
    console.log('Service started');

    try {
        mongoose.connect('mongodb://localhost:27017/saludokdb');
    } catch (error) {
        console.error('Cristian Says: Error on db connection');
    }
});

