const express = require('express');
const Mock = require('../models/mock');
const Student = require('../models/student');
const router = express.Router();

router.route('/:mockId').
get((req, res) =>{
    if(req.isAuthenticated()){
  let mockID=  req.params.mockId;

    let Maths=0;
    let Science=0;
    let English=0;
    let Social=0;
    let RME=0;
    let ICT=0;
    let TWI=0;
    let French=0;
    let BDT=0;
    Mock.find((err,find)=>{
    Student.find((err,findStudent)=>{
        if(find.length>0){
            findStudent.forEach(element => {
               if(element.mockId === mockID){
                   Maths=Maths+element.Maths;
                   Science=Science+element.Science;
                   English=English+element.English;
                   Social=Social+element.Social;
                   RME=RME+element.RME;
                   ICT=ICT+element.ICT;
                   TWI=TWI+element.TWI;
                   French=French+element.French;
                   BDT=BDT+element.BDT;
               }
            });
            Mock.findById(mockID,(err,mockName)=>{
                res.render("stats",{
                    mock:find,students:findStudent,Maths,Science,English,Social,RME,ICT,TWI,French,BDT,mockName:mockName.mockName
                });
            })
        }else{
            res.render("addmock")
        }
    })
    })
}else{
    res.redirect("/login");
} 
});


module.exports = router;