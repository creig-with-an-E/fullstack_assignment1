var mongoose = require('mongoose');
var bcryt = require('bcryptjs');

var User= mongoose.Schema;

var newUser = new User({
    username: {type: String},
    password: {type: String},
    firstName:{type :String},
    lastName :{type:String},
});

var userObj = model.exports = mongoose.Schema('Users',newUser);
