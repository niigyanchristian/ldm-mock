const express = require('express');
const Mock = require('../models/mock');
const Result = require('../models/results');
const Student = require('../models/student');
const router = express.Router();

router.route('/').
post(function(req, res) {
    if(req.isAuthenticated()){
    const {mockId} = req.body;
    
    Mock.findByIdAndDelete(mockId).
    then(find=>{
        find.students.forEach((element,index) => {
            Student.findByIdAndDelete(element,(err,findStudent)=>{
                Result.findOneAndDelete({name:findStudent.name},(err,find)=>{})
            }) 
        });
        return true;
    }).
    then(data=>{
        data ? res.redirect('dashboard') : null;
    }).
    catch(e=>console.log(e));
}else{
    res.redirect("/login");
}
 });


module.exports = router;