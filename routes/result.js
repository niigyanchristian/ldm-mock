const express = require('express');
const _ = require('lodash');
const Mock = require('../models/mock');
const jwt = require('jsonwebtoken');
const Student=require('../models/student')
const Result=require('../models/results')
const { getRemark } = require('../functions/remark');
const router = express.Router();

router.route('/:id')
.get(async (req,res)=>{
     const id = req.params.id;
     console.log("id",id);
    const addresult=()=>{
        Mock.findById(id,async (err,find)=>{
            // console.log('====================================');
        //     const data=[]
           await find.students.forEach(async element => {
                Student.findById(element._id,(err,findStudent)=>{
                //    / console.log(findStudent.aggregate);
                    Result.findOne({name:findStudent.name},(err,find)=>{
                        if(!find){
                            Result.create({
                                name:findStudent.name,
                                mockid:id,
                                English: findStudent.English,
                                Maths: findStudent.Maths,
                                Social: findStudent.Social,
                                Science: findStudent.Science,
                                RME: findStudent.RME,
                                ICT: findStudent.ICT,
                                TWI: findStudent.TWI,
                                French: findStudent.French,
                                BDT: findStudent.BDT,
                                aggregate: findStudent.aggregate,
                                remarks: getRemark(findStudent.aggregate)
                            }).then((item)=>{console.log("added",item)
                        }).catch((e)=> {throw e})
                        }
                    })
                    
                })
                console.log(2);
            });
        })
        
        }
        const getResult=(go)=>{
            Result.find({mockid:id},(err,find)=>{
                let s=find;
            s.sort((a,b)=>{
                return a.name.localeCompare(b.name);
            })
            s.sort((a,b)=>{
                return a.aggregate - b.aggregate;
            })
            updatePosition(s,go);
            })
        }
        const updatePosition=async (data,go)=>{
           await data.forEach((element,index) => {
                
                Result.findByIdAndUpdate(element._id,{position:index+1},(err,find)=>{
                    
                })
            });
            Result.find({mockid:id},(err,find)=>{
                if(go ===1 || go===2){
                    getResult(go+1)
                }else{
                    
                    Mock.findById(id,(err,findMockName)=>{
                        
                        res.render("results",{data:find,mockName:findMockName.mockName})
                    })
                }

            })
        }
    await addresult();
    getResult(1);
        
});

module.exports = router;