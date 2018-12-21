const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var classSchema = new Schema({
    class_name: {
        type: String
    },
    class_id: {
        type: Number
    },
    apllied_students: [{
        type: Schema.Types.ObjectId,
        ref: 'studentModel'
    }],
    professor: {
        type: Schema.Types.ObjectId,
        ref: 'teacherModel'
    }
});


module.exports = mongoose.model('classModel', classSchema, 'classes');