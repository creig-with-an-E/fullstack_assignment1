var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/CRUDdb",{useNewUrlParser:true},err=>{
    mongoose.connect("mongodb://admin:admin123@ds143340.mlab.com:43340/videostore",{useNewUrlParser:true},err=>{
    if(err){
        console.log("an error occured "+ JSON.stringify(err,undefined,2));
    }
    else{
        console.log("Connection successful")
    }
});



module.exports =mongoose;