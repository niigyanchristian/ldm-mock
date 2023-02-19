const express = require('express');
const Mock = require('../models/mock');
const Student = require('../models/student');
const { calcAggregate } = require('../functions/calcAggregate');
const { getRemark } = require('../functions/remark');
const router = express.Router();

router.route('/').
post(async (req,res)=>{
    if(req.isAuthenticated()){
    let {studentname,English,Maths,Social,Science,RME,ICT,TWI,BDT,French,mockId} = req.body;
   let aggregate= calcAggregate(ICT,RME,TWI,French,BDT,English,Maths,Social,Science);
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
        aggregate,
        remarks: getRemark(aggregate)
        });
    const addStudent=(id)=>{
        Mock.findById(mockId,(err,findMock)=>{
            findMock.students.push(id.toString());
            findMock.save();
        })
    }
    
    

    student.save((err)=>{
        if(!err){
            addStudent(student._id);
            res.redirect('dashboard')
        }
    })
}else{
    res.redirect("/login");
}
    
});


module.exports = router;