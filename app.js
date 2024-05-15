// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./app.routes');
const jsonwebtoken = require('jsonwebtoken');

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

app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
            console.log(decode);
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

/* *
 * Use all routes defined in app.routes.js
 * */
app.use(Routes);

/* *
 * It exports our app
 * */
module.exports = app;
