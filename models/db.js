const mongoose = require('mongoose');
require('./adminuser.model');
require('./course.model');
require('./cmodule.model');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});