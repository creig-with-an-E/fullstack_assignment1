var express = require('express');
var router = express.Router();
var video = require('../models/videoModel');

//function conforms if req.isAuthenticated is true, this is passportjs letting you check every request to see if user authenticated
// function userAuthenticated(req, res, next){
//    if(req.isAuthenticated()){
//        return next();
//    }else{
//        req.flash("error_msg","Please login");
//        res.redirect('/users/login')
//    }
// }

router.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});

router.get('/addVideo',(req,res)=>{
    console.log(req.body.title);
    res.redirect('/');
});
module.exports = router;