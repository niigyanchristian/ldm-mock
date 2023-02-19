const express = require('express');
const Mock = require('../models/mock');
const Student = require('../models/student');
const { calcAggregate } = require('../functions/calcAggregate');
const { getRemark } = require('../functions/remark');

const router = express.Router();

router.route('/:id')
.get(async (req,res)=>{
    if(req.isAuthenticated()){
        const studentId=req.params.id;
    
    Mock.find((err,findMock)=>{
    Student.findById(studentId,(err,findStudent)=>{
      
      res.render('editstudent',{mock:findMock,student:findStudent})
    })
    })
}else{
    res.redirect("/login");
}
});
router.route('/').
post((req,res)=>{
    if(req.isAuthenticated()){
    let {studentname,English,Maths,Social,Science,RME,ICT,TWI,BDT,French,studentId} = req.body;
    let aggregate= calcAggregate(ICT,RME,TWI,French,BDT,English,Maths,Social,Science)
    Student.findByIdAndUpdate(studentId,{name:studentname,English,Maths,Social,Science,RME,ICT,TWI,BDT,French,aggregate,remarks: getRemark(aggregate)},(err)=>{
        err ? console.log("err in updating student",err) : res.redirect('dashboard');
    })
}else{
    res.redirect("/login");
}
});

module.exports = router;