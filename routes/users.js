const express =require('express');
const users = express.Router();

users.get('/login',(req, res)=>{
    res.write('<h1>This is the login page</h1>');
    res.end();
});

module.exports = users;