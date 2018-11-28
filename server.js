//server
const express = require('express');
const server = express();
server.listen(8000,()=>{console.log('server running')});

//connect to mongo
const dbUser ='admin';
const dbPassword ='admin123';
const mongoose = require('mongoose');
mongoose.connect('mongodb://'+dbUser+':'+ dbPassword + '@ds143340.mlab.com:43340/videostore');
db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.clear();
    console.log('db connected')
});