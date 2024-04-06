const express = require("express");
const userController = require("./controllers/user");


const app = express();

// Default Endpoint
app.get("/", (req, res) => {
    res.send("Hello World");
})


// Default Endpoint
app.post("/user/create", userController.create)


app.listen(3000, () => {
    console.log("Service started");
})