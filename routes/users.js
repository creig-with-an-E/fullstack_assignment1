const express =require('express');
const users = express.Router();

users.get('/login',(req, res)=>{
    res.render('login')
});

users.post('/register',(req, res, next)=>{
    console.log(req.body.username);
    res.write(`<h1> ${req.body.username}</h1>`);
    res.end();
});
module.exports = users;