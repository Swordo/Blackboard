const express = require('express')

const router = express.Router();
const teacherModel = require('../../models/teacher');
const studentModel = require('../../models/student');
const classModel = require('../../models/class');


router.route('/student').get(async (req, res, next) => {
    res.send('Students Route Get method is working ')
}).post(async (req, res, next) => {

    var dataStudent = new studentModel();
    dataStudent.name = req.body.name;
    dataStudent.email = req.body.email;
    dataStudent.save((err, data) => {
        if (err) {
            throw err;
        } else {
            res.json(data);
        }
    })


})
module.exports = router;