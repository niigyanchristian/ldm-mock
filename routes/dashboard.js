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
    Student.find((err,findStudent)=>{
        if(find.length>0){
            let mockId = find[find.length-1]._id.toString();
            res.render("dashboard",{mock:find,students:findStudent,mockId});
        }else{
            res.render("addmock")
        }
    })
    })
     
}).
delete((req,res)=>{
    console.log("delete");
});


module.exports = router;