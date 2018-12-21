const express = require('express')

const router = express.Router();
const teacherModel = require('../../models/teacher');
const studentModel = require('../../models/student');
const classModel = require('../../models/class');


router.route('/student').get(async (req, res, next) => {
    res.send('Students Route Get method is working ')
}).post(async (req, res, next) => {
    res.send('Students Route post method is working')
})
module.exports = router;