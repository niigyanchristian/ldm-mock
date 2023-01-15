require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const MongoDB =require('./utils/connectMongoDB');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const studentRoute = require('./routes/student');
const resultRoute = require('./routes/result');
const mockRoute = require('./routes/mock');
const dashboardRoute = require('./routes/dashboard');
const statsRoute = require('./routes/stats');
const deletestudentRoute = require('./routes/deletestudent');

const app = express();
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extended: true}));
console.log('MongoDB CONNECTING...');
MongoDB();
console.log('MongoDB CONNECTED!');






//END POINTS
app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/result',resultRoute);
app.use('/student',studentRoute);
app.use('/mock',mockRoute);
app.use('/dashboard',dashboardRoute);
app.use('/stats', statsRoute);
app.use('/deletestudent', deletestudentRoute);


app.get("/", function(req, res) {

    res.redirect("login");
     
});



app.listen(process.env.PORT || 3000,()=>{
    console.log("Mock Backend Is Running On Port 3000");
});


