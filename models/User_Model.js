var mongoose = require('mongoose');
var UserSchema= mongoose.Schema;

var bcrypt = require('bcryptjs');



var newUser = new UserSchema({
    username :{type: String , index:true},
    firstname: {type: String},
    lastname: {type: String},
    password:{type :String},
    email :{type:String},
});

var User = module.exports = mongoose.model('Users',newUser);
module.exports.createUser=function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback)
        });
    });
};