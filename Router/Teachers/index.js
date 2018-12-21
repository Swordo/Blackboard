const express = require('express')

const router = express.Router();
const teacherModel = require('../../models/teacher');
const studentModel = require('../../models/student');
const classModel = require('../../models/class');



router.route('/teacher').get(async (req, res, next) => {
    res.send('Teacher Route Get method is working ')
}).post(async (req, res, next) => {
    res.send('Teacher Route post method is working')
})
module.exports = router;