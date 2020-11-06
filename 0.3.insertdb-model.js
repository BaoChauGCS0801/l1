
/// npm install mongodb mongoose --save

var mongoose = require('mongoose');
var User = require('./models/user');

const dbname = 'Shoplego';
const uri = 'mongodb://localhost:27017/' + dbname;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, dbconnection) {
        if (err) throw handleError(err);
        ///
        console.log('Successfully connected');

        ///
        const newuser = new User( {
            _id : new mongoose.Types.ObjectId, 
            username: "234", 
            password : "567"
        });
        newuser.save( function(err) {
            if (err) throw err;
            ///
            console.log('User model - Successfully insert');
        } );  
});