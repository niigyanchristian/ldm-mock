const express = require('express');
const _ = require('lodash');
const Mock = require('../models/mock');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.route('/')
.post(async (req,res)=>{
    let {mockName} = req.body;
    console.log("entered");
    Mock.findOne({mockName:mockName},(err,find)=>{
        if(!err && !find){
            Mock.create({
                mockName
            }).then((find)=>
            res.redirect("dashboard")
            ).catch((e)=> console.log(e))
        }else{
            res.send("Mr. Eric "+mockName+" already exist as mock name!")
        }
    })
});

module.exports = router;