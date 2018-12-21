const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var teacherSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    class: [{
        type: Schema.Types.ObjectId,
        ref: 'classModel'
    }]
});


module.exports = mongoose.model('teacherModel', teacherSchema, 'TeacherInformation');