const express = require('express');
const Mock = require('../models/mock');

const router = express.Router();

router.route('/')
.post(async (req,res)=>{
    if(req.isAuthenticated()){
    let {mockName} = req.body;
    Mock.findOne({mockName:mockName},(err,find)=>{
        if(!err && !find){
            Mock.create({
                mockName
            }).then((find)=>
            res.redirect("dashboard")
            ).catch((e)=> console.log("erro in finding mock",e))
        }else{
            res.send("Mr. Eric "+mockName+" already exist as mock name!")
        }
    })
}else{
    res.redirect("/login");
}
});

module.exports = router;