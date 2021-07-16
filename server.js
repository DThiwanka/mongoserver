const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose
    .connect(
        'mongodb+srv://dula:12345@cluster0.zpphj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("MongoDB Connected");
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is Running...");
});