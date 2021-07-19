const Student = require('../models/Student.model');

//Add Student Record

const addStudent = (req, res) => {

    // const name = req.body.name;
    // const sliitID = req.body.sliitID;

    const { name, sliitID, age } = req.body;
    const newStudent = new Student({
        name,
        sliitID,
        age,
    });

    newStudent.save().then((Student) => {
        res.json(Student);
    }).catch((err) => {
        res.json(err)
    });

};

//GET ALL Student Records

const getAllStudents = (req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        res.json(err);
    });
};

module.exports = {
    addStudent,
    getAllStudents,
};