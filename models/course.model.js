const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    courseCategory: {
        type: String,
        required: 'courseCategory can\'t be empty'
    },
    courseName: {
        type: String,
        required: 'courseName can\'t be empty'
    },
    courseDescription: {
        type: String,
        required: 'courseDescription can\'t be empty'
    },
    courseImage: {
        type: String
    },
    isActive: {
        type: String
    }
    
});

mongoose.model('Course', courseSchema);