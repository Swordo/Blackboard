const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var studentSchema = new Schema({
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


module.exports = mongoose.model('studentModel', studentSchema, 'studentInformation');