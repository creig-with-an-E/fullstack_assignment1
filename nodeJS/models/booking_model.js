var mongoose = require('mongoose');
var Booking = mongoose.model('Booking',{
    video_id:{type:String},
    user_id:{type:String},
    date:{type:String}
});


module.exports = {Booking};