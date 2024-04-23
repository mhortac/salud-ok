// Module dependencies.
const express = require("express");
const mongoose = require("mongoose");

const UserController = require("./controllers/user");

const app = express();

//app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
/**
 * Route: Home endpoint
 */
app.get("/", (req, res) => {
    res.send("SALUD OK API REST");
})


/**
 * Route: Create a user on data base.
 */
app.post("/user/create", UserController.create)


/**
 * Route: Create a user on data base.
 */
app.listen(3000,  () => {
    console.log("Service started");

    try {
        mongoose.connect("mongodb://localhost:27017/saludokdb");
    } catch (error) {
        console.error("Cristian Says: Error on db connection");
    }
})


   