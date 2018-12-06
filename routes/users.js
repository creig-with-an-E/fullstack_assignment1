const express =require('express');
const users = express.Router();
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User_Model');


//login routes
    users.get('/login',(req, res)=>{
        res.render("login")
    });

    users.post('/login',
        passport.authenticate('local',{successRedirect:"/" ,failureRedirect:"/users/login",failureFlash:true}));


        //confirming that user exists and creating sessions
        //local strategy is used to authenticate using username and password
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByName(username,function(err,user){
            if(err){
                throw err;
            }
            if(!user){
                return done(null, false,"UNKNOWN USER");
            }
            User.comparePassword(password,user.password, function (err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null,false,"PASSWORD INCORRECT");
                }
            })
        });
    }
));
        //setting session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id , done){
    User.getUserById(id, function(err, user){
        done(err, user);
    })
});


//registration routes
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

    //logout route
    users.get('/logout',function (req, res) {
        req.logout();
        req.flash('success_msg','you have logged out');
        res.render('login')
    });

module.exports = users;