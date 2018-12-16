var mongoose = require('mongoose');

var Video = mongoose.model("Video",{
    title: {type: String},
    runtime:{type:String},
    director:{type:String},
    rating:{type:String},
});


module.exports = {Video};
