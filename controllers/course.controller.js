const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Course = mongoose.model('Course');

module.exports.course = (req, res, next) => {
    var course = new Course();
    
    course.courseCategory = req.body.fullName;
    course.courseName = req.body.fullName;
    course.courseDescription = req.body.fullName;
    course.courseImage = req.body.fullName;
    course.isActive = "Y";

    console.log("this is the course");
    console.log(course);
    
    course.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            console.log("ERROR IS:");
            console.log(err);
            if (err.code == 11000)
                res.status(422).send(['Duplicate found.']);
            else
                return next(err);
        }

    });
}

// module.exports.fetchProfileByFullName = (req, res, next) =>{
    
//     Profile.find({ fullName: req.body.fullName },
//         (err, profile) => {
//             if (!profile)
//                 return res.status(404).json({ status: false, message: 'Record not found.' });
//             else
//                 return res.status(200).json({ status: true, profile : _.pick(profile,['fullName','email','city','mobile','linkedinUrl']) });
//         }
//     );
// }

    // module.exports.fetchProfileByEmail = (req, res, next) =>{
       
    //     Profile.find({ email: req.body.email },
    //         (err, profile) => {
    //             if (!profile)
    //                 return res.status(404).json({ status: false, message: 'Record not found.' });
    //             else
    //                 return res.status(200).json({ status: true, profile : _.pick(profile,['fullName','email','city','mobile','linkedinUrl']) });
    //         }
    //     );
    //     } 