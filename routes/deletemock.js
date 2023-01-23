const express = require('express');
const _ = require('lodash');
const Mock = require('../models/mock');
const Result = require('../models/results');
const Student = require('../models/student');
const router = express.Router();

router.route('/').
post(function(req, res) {
    const {studentId, mockId,studentname} = req.body;
    console.log('====================================1');
    Mock.findByIdAndDelete(mockId).
    then(find=>{
        find.students.forEach((element,index) => {
            Student.findByIdAndDelete(element,(err,findStudent)=>{
                console.log(findStudent.name);
                Result.findOneAndDelete({name:findStudent.name},(err,find)=>{})
            }) 
        });
        console.log('====================================2');
        return true;
    }).
    then(data=>{
        data ? res.redirect('dashboard') : null;
    }).
    catch(e=>console.log(e))
 });


module.exports = router;