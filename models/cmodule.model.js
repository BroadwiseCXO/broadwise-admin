const mongoose = require('mongoose');

var cmoduleSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: 'courseName can\'t be empty'
    },
    cmoduleName: {
        type: String,
        required: 'cmoduleName can\'t be empty'
    },
    cmoduleDescription: {
        type: String,
        required: 'cmoduleDescription can\'t be empty'
    },
    cmoduleAuthor: {
        type: String,
        required: 'cmoduleAuthor can\'t be empty'
    },
    cmoduleURL: {
        type: String,
        required: 'cmoduleURL can\'t be empty'
    },
    cmodulePassword: {
        type: String,
        required: 'cmodulePassword can\'t be empty'
    },
    isActive: {
        type: String
    }
    
});

mongoose.model('Cmodule', cmoduleSchema);