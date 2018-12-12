var mongoose = require('mongoose');
var VideoSchema= mongoose.Schema;

const videoObject = new VideoSchema({
    title :{type:String},
    RunningTime:{type:String},
    genre:{type:String},
    rating:{type:String},
    Director:{type:String},
    isAvailable:{type:String}

});

var video = module.exports =mongoose.model('VideoFiles',videoObject);

module.exports.addVideo=function(newVideo, callback){
            newVideo.save(callback)
};
module.exports.getVideoByName= function(title, callback){
    var query ={ title :title};
    User.findOne(query,callback);
};

module.exports.getVideoById= function(id, callback){
    User.findById(id,callback);
};