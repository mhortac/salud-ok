const express = require("express");
const app = express();

// Default Endpoint
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Service started");
})