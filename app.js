const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.listen(PORT,() => {
    console.log("Server Start at port 3001")
});
