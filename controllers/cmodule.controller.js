const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Cmodule = mongoose.model('Cmodule');

module.exports.cmodule = (req, res, next) => {
    var cmodule = new Cmodule();
    
    cmodule.courseName = req.body.courseName;
    cmodule.cmoduleName = req.body.cmoduleName;
    cmodule.cmoduleDescription = req.body.cmoduleDescription;
    cmodule.cmoduleAuthor = req.body.cmoduleAuthor;
    cmodule.cmoduleURL = "<iframe src=\"+req.body.cmoduleURL\""+" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    cmodule.cmodulePassword = req.body.cmodulePassword;
    cmodule.isActive = "Y";
    
    cmodule.save((err, doc) => {
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