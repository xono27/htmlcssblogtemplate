const express = require("express");
const app = express();

const path = require("path");

app.listen(3001,() => {
    console.log("Server Start at port 3001")
});

app.use(express.static(path.join(__dirname,"public")));