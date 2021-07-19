const express = require('express');
const router = express.Router();

const {
    addStudent,
    getAllStudents
} = require('../controller/Student.controller');

//http://localhost:5000/api/student
router.post("/add", addStudent);

router.get("/all", getAllStudents);

module.exports = router;