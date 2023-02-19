const express = require('express');
const Mock = require('../models/mock');
const Student = require('../models/student');
const router = express.Router();

router.route('/').
post(function(req, res) {
    if(req.isAuthenticated()){
    const {studentId, mockId,studentname} = req.body;
    Mock.findById(mockId,(err,find)=>{
     
     
     const data = find.students.filter(check);
         function check(item){
             return item._id.toString() !== studentId
         }
         Mock.findByIdAndUpdate(mockId,{students:data},(err,find)=>{});
    })
    Student.findByIdAndDelete(studentId,(err,find)=>{
     !err ? res.redirect("/dashboard") : null;
    })
}else{
    res.redirect("/login");
}
 });


module.exports = router;