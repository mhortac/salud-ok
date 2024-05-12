// Module dependencies.
const express = require('express');
const Routes = express.Router();
const UserController = require('./controllers/user.controller');
const BookingController = require('./controllers/booking.controller');

// Default api
Routes.get('/api/', (req, res) => res.send('SALUD OK API REST'));

/**
 * Routes: Auth
 */
Routes.post('/api/auth/login', UserController.login);
Routes.post('/api/auth/logout', () => {});

/**
 * Routes: Users
 */
Routes.post('/api/user/create', UserController.create);
Routes.get('/api/user/:id', () => {});
Routes.put('/api/user/update/:id', () => {});
Routes.delete('/api/user/delete/:id', () => {});

/**
 * Routes: Bookings
 */
Routes.post('/api/booking/create', BookingController.create);
Routes.get('/api/booking/:id', () => {});
Routes.get('/api/booking/list/:id', BookingController.list);
Routes.put('/api/booking/update/:id', () => {});
Routes.delete('/api/booking/delete/:id', () => {});

/* *
 * It exports our Routes
 * */
module.exports = Routes;
