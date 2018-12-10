var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exprhnbs = require('express-handlebars');
var exprValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var cors = require('cors');


//creating mongoose connection
var dbUser = 'admin';
var dbPassword = 'admin123';
mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds143340.mlab.com:43340/videostore`,{useNewUrlParser:true});
let db = mongoose.connect;

//routes 
var routes = require('./routes/index');
var users = require('./routes/users');

//initializing the app
const app = express();


//cors (cross-origin) setup
var corsOptions ={
    origin:'http://localhost:4200',
    optionsSuccessStatus:200
};

app.use(cors(corsOptions));


//setting the view engine
//this will be used for testing before integration with angular
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars',exprhnbs({defaultLayout:'layout'}));    //this is where the pages will be injected
app.set('view engine','handlebars');

//body parser middle-ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//setting the static folder which hold the assets
app.use(express.static(path.join(__dirname,'public')));

//express session
app.use(session({
    secret:'secret',
    saveUninitialized:true,
    resave: true
}));

//initializing passport
app.use(passport.initialize());
app.use(passport.session());

//express validator
app.use(exprValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

//connect flash
app.use(flash());

//assignment of global vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


app.use('/', routes);
app.use('/users', users);

app.use("/", express.static(__dirname + "/videoStoreApp/dist/videoStoreApp"));

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/videoStoreApp/dist/videoStoreApp" });
});

//setting the port and start server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'),()=>{
    console.log(`-------Server started on port ${app.get('port')}`);
});