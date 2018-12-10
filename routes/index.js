var express = require('express');
var router = express.Router();


//function conforms if req.isAuthenticated is true, this is passportjs letting you check every request to see if user authenticated
// function userAuthenticated(req, res, next){
//    if(req.isAuthenticated()){
//        return next();
//    }else{
//        req.flash("error_msg","Please login");
//        res.redirect('/users/login')
//    }
// }

module.exports = router;