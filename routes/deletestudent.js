const express = require('express');
const _ = require('lodash');
const Mock = require('../models/mock');
const Result = require('../models/results');
const Student = require('../models/student');
const router = express.Router();

router.route('/').
post(function(req, res) {
    const {studentId, mockId,studentname} = req.body;
    Mock.findById(mockId,(err,find)=>{
     
     
     const data = find.students.filter(check);
         function check(item){
             return item._id.toString() !== studentId
         }
         Mock.findByIdAndUpdate(mockId,{students:data},(err,find)=>{});
         Result.findOneAndDelete({name:studentname},(err,find)=>{
             
         })
    })
    Student.findByIdAndDelete(studentId,(err,find)=>{
     !err ? res.redirect("/dashboard") : null;
    })
      
 });


module.exports = router;