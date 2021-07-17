const mongoose = require('mongoose');

//import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    sliitID: String,
    age: Number,

});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;