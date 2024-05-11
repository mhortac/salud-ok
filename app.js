// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./app.routes');

/* *
 * Create an Express application
 * */
const app = express();

/* *
 * Returns middleware that only parses json and only looks at requests
 * where the Content-Type header matches the type option.
 * */
app.use(bodyParser.json());

/* *
 * It serves frontend view.
 * */
app.use(express.static(__dirname + '/views'));

/* *
 * Use all routes defined in app.routes.js
 * */
app.use(Routes);

/* *
 * It exports our app
 * */
module.exports = app;
