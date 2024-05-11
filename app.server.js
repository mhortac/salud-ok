const app = require('./app');
const mongoose = require('mongoose');

// Default Port
const DEFAULT_PORT = 3000;


/**
 * Route: Create a user on data base.
 */
app.listen(DEFAULT_PORT, () => {
    console.log('Service started');

    try {
        mongoose.connect('mongodb://localhost:27017/saludokdb');
    } catch (error) {
        console.error('Cristian Says: Error on db connection');
    }
});