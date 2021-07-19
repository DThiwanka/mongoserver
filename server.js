const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

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

//http://localhost:5000/api/student
app.use("/api/student", require("./routes/Student.route"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is Running...");
});