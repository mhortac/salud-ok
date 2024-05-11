// Module dependencies.
const express = require('express');
const Routes = express.Router();

// Default api
Routes.get('/api/', (req, res) => res.send('SALUD OK API REST'));



/**
 * Routes: Auth
 */
app.post('/api/auth/login', () => {});
app.post('/api/auth/logout', () => {});

/**
 * Routes: Users
 */
app.post('/api/user/create', () => {});
app.get('/api/user/:id', () => {});
app.put('/api/user/update/:id', () => {});
app.delete('/api/user/delete/:id', () => {});


/* *
 * It exports our Routes
 * */
module.exports = Routes;