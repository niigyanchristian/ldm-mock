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

router.route('/:mockId').
get((req, res) =>{
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
// console.log(find);
    Student.find((err,findStudent)=>{
        if(find.length>0){
            findStudent.forEach(element => {
            //    console.log(element);
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
            console.log('====================================');
            console.log(mockID);
            console.log('====================================');
            res.render("stats",{
                mock:find,students:findStudent,Maths,Science,English,Social,RME,ICT,TWI,French,BDT,
            });
        }else{
            res.render("addmock")
        }
    })
    })
     
});


module.exports = router;