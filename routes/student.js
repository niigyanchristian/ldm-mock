const express = require('express');
const _ = require('lodash');
const User = require('../models/user');
const Mock = require('../models/mock');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const { getAggregate } = require('../functions/aggregate');
const { calcAggregate } = require('../functions/calcAggregate');
const router = express.Router();
// const aggregateFunc = require('../functions/aggregate');

router.route('/').
get((req, res) =>{

    Mock.find((err,find)=>{
console.log(find);
        res.render("addstudent",{mock:find});
    })
     
}).
post(async (req,res)=>{
    let {studentname,English,Maths,Social,Science,RME,ICT,TWI,BDT,French,mockId} = req.body;
    console.log('====================================');
    console.log(studentname,English,Maths,Social,Science,RME,ICT,TWI,BDT,French,mockId);
    console.log('====================================');
   let aggregate= calcAggregate(ICT,RME,TWI,French,BDT,English,Maths,Social,Science)
    const student = new Student({
        name: studentname,
        mockId,
        English,
        Maths,
        Social,
        Science,
        RME,
        ICT,
        TWI,
        French,
        BDT,
        aggregate
    });
    const addStudent=(id)=>{
        Mock.findById(mockId,(err,findMock)=>{
            console.log('====================================xxxxxxx');
            console.log(id.toString());
            console.log('====================================');
            findMock.students.push(id.toString());
            findMock.save();
        })
    }
    
    

    student.save((err)=>{
        if(!err){
            addStudent(student._id);
            // res.status(201).send("Added a student successfully"+student);
            res.redirect('dashboard')
        }
    })

    
});


module.exports = router;