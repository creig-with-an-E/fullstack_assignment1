const express =require('express');
const users = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local');


const User = require('../models/User_Model');

users.get('/login',(req, res)=>{
    res.render("login")
});

users.post('/login',
    passport.authenticate('local',
                                {   successRedirect: "/",
                                    failureRedirect:"/users/login",
                                    failureFlash:true
                                }));

users.get('/register',function(req,res){
    res.render('register');
});

users.post('/register',(req, res, next)=>{
    var uname = req.body.uname;
    var name = req.body.fname;
    var email = req.body.email;
    var lastname = req.body.lname;
    var password = req.body.password;
    var password2 = req.body.passwordConfirm;

    req.checkBody('fname','Name is required').notEmpty();
    req.checkBody('email','Email is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('register',{errors:errors});

    }else {
        var newUser = new User({
            username:uname,
            firstname: name,
            lastname: lastname,
            email: email,
            password: password
        });
        User.createUser(newUser, function (err, user) {
            if (err) throw err;
            console.log(user);
        });
        req.flash('success_msg', 'You are registered and can now login');
        res.redirect('/users/login');
    }

});
module.exports = users;