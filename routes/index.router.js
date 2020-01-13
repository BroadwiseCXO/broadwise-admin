const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const ctrlAdminuser = require('../controllers/adminuser.controller');
const jwtHelper = require('../config/jwtHelper');


//
const Course = mongoose.model('Course');
const ctrlCourse = require('../controllers/course.controller');

const Cmodule = mongoose.model('Cmodule');
const ctrlCmodule = require('../controllers/cmodule.controller');


router.post('/register', ctrlAdminuser.register);
router.post('/authenticate', ctrlAdminuser.authenticate);
router.get('/adminuserProfile',jwtHelper.verifyJwtToken, ctrlAdminuser.userProfile);

//
router.post('/course',ctrlCourse.course);
//router.get('/fetchCourseByFullName/', ctrlCourse.fetchCourseByFullName);

router.post('/cmodule',ctrlCmodule.cmodule);
//router.get('/fetchCmoduleByFullName/', ctrlCmodule.fetchCmoduleByFullName);


// router.get('/fetchProfileByFullName/:fullName', function(req, res, next){
  
//   Profile.find({fullName:req.params.fullName}, function(err, data){
//     if(err){
//         console.log(err);
//         return
//     }

//     if(data.length == 0) {
//         console.log("No record found")
//         return
//     }
//  res.send(data);

// })
// });

module.exports = router;