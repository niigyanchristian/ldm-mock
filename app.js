require('dotenv').config();
const express = require("express");
// const bodyParser = require('express').json;
const bodyParser = require("body-parser");
const ejs = require('ejs');
const _ = require('lodash')
const MongoDB =require('./utils/connectMongoDB');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const studentRoute = require('./routes/student');
const resultRoute = require('./routes/result');
const mockRoute = require('./routes/mock');
const dashboardRoute = require('./routes/dashboard');
const statsRoute = require('./routes/stats');
const Student=require('./models/student')
const Mock=require('./models/mock')
const Result=require('./models/results')
// const aggregateFunc = require('./functions/aggregate');
const { getRemark } = require('./functions/remark');
const app = express();
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
console.log('====================================');
MongoDB();
console.log('====================================');






//END POINTS
app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/result',resultRoute);
app.use('/student',studentRoute);
app.use('/mock',mockRoute);
app.use('/dashboard',dashboardRoute);
app.use('/stats', statsRoute);


app.get("/", function(req, res) {

    res.redirect("login");
     
});


app.post("/deletestudent", function(req, res) {
   const {studentId, mockId,studentname} = req.body;
   console.log(studentId, mockId);
   Mock.findById(mockId,(err,find)=>{
    const f=[1,3];
    // f.filter
    
    const data = find.students.filter(check);
        function check(item){
            console.log(item._id.toString() !== studentId);
            return item._id.toString() !== studentId
        }
        console.log('====================================gggg');
        console.log(data);
        console.log('====================================');
        Mock.findByIdAndUpdate(mockId,{students:data},(err,find)=>{
            console.log(err,find);
        })
        Result.findOneAndDelete({name:studentname},(err,find)=>{
            
        })
   })
   Student.findByIdAndDelete(studentId,(err,find)=>{
    if(!err){
        res.redirect("/dashboard");
        
    }
   })
     
});







// getResult()
// addresult()


// const myArray = [1, 2,2, 3, 4, 5];

// const index = myArray.indexOf(2);

// const x = myArray.splice(myArray.indexOf(_.min(myArray)), 1);
// const y = myArray.splice(myArray.indexOf(_.min(myArray)), 1);

// console.log(`myArray values: ${myArray}`);
// console.log(`variable x value: ${x}`,x[0]);
// console.log(`variable y value: ${y}`);
// console.log(myArray);


app.listen(process.env.PORT || 3000,()=>{
    console.log("Mock Backend Is Running On Port 3000");
});


