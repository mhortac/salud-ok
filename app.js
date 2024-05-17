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

/* *
 * Interceptor.
 * */
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization) {
        // Verificar la llave de autenticación
        jsonwebtoken.verify(req.headers.authorization, 'RESTFULAPIs', function (err, decode) {
            if (!!err) {
                console.log('La llave es invalida');
                req.user = undefined;
            }
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
