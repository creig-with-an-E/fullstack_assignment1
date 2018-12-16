var mongoose = require('mongoose');

var Customer = mongoose.model('Customer',{
    //schema and model initialization at once
    // _id:{type: String},
    firstName: {type: String},
    lastName:{type:String},
    address:{type:String},
    city:{type:String},
});

module.exports = {Customer};
