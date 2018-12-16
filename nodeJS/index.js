const express = require('express');
const body_parser =require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
const router = require('./controllers/User');
const videoRouter = require('./controllers/video_controller');

var app = express();
app.use(body_parser.json());
app.use(cors({origin:"http://localhost:4200"}));
app.listen(3000,()=>console.log("server started at port : 3000"));

//application routes
app.use('/api/user',router);
app.use('/api/video',videoRouter);
