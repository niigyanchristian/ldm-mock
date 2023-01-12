const express = require('express');
const _ = require('lodash');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.route('/').
get((req, res) =>{

    res.render("login");
     
}).
post(async (req,res)=>{
    let {username,password} = req.body;
    console.log("in",username)
    console.log('L');

    User.findOne({username:username},(err,found)=>{
        if(err){
            res.status(400).send(err.message);
        }else{
            if(found){
                if(found.password == password){
                    console.log('====================================');
                    console.log(found);
                    console.log('====================================');
                    const token = jwt.sign(
                        {found},
                        process.env.TOKEN_KEY,
                      );
                    res.status(200).json(JSON.stringify(token));  
                }else{
                    res.status(401).send('wrong password');
                }
            }else{
                res.status(401).send("wrong credentials");
            }
        }
    });
});


module.exports = router;