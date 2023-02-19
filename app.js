require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')
const mongoose =require('mongoose');

const MongoDB =require('./utils/connectMongoDB');
const studentRoute = require('./routes/student');
const editStudentRoute = require('./routes/editStudent');
const resultRoute = require('./routes/result');
const mockRoute = require('./routes/mock');
const dashboardRoute = require('./routes/dashboard');
const deletemockRoute = require('./routes/deletemock');
const statsRoute = require('./routes/stats');
const deletestudentRoute = require('./routes/deletestudent');

const app = express();
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }));;
app.use(passport.initialize());
app.use(passport.session());


console.log('MongoDB CONNECTING...');
MongoDB();
console.log('MongoDB CONNECTED!');

const userSchema = new mongoose.Schema({
    username:String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User",userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//END POINTS
app.use('/deletemock',deletemockRoute);
app.use('/result',resultRoute);
app.use('/student',studentRoute);
app.use('/mock',mockRoute);
app.use('/dashboard',dashboardRoute);
app.use('/editstudent',editStudentRoute);
app.use('/stats', statsRoute);
app.use('/deletestudent', deletestudentRoute);


app.get("/", function(req, res) {
    res.redirect("login");
});

app.get("/register", function(req, res) {
    res.render('signup')
});

app.get("/login", function(req, res) {
    res.render('login')
});

app.get("/logout", function(req, res) {
   req.logout((err)=>{
    if(!err){
        res.redirect('/');
    }
   });
});

app.post('/register',(req,res)=>{
    User.register({username:req.body.username}, req.body.password, (err,user)=>{
        if(err){
            console.log("error occured whiles registering a user",err);
            res.redirect('/register');
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.redirect('dashboard')
            })
        }
    })
})

app.post('/login',(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err) {
        if(err){
            console.log("error occured whiles loging a user",err);
        }else{
            passport.authenticate('local')(req,res,()=>{
                res.redirect('dashboard')
            })
        }
      });
})



app.listen(process.env.PORT || 3000,()=>{
    console.log("Mock Backend Is Running On Render");
});


