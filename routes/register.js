const express = require('express');
const _ = require('lodash');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.render('signup')
})
.post(async (req,res)=>{
    console.log("entered");
    let {username,password} = req.body;
    console.log(username,password);
    User.findOne({username:username}, (err,user)=>{
        if(err){
            res.send(err.message);
        }else{
            if(user){
                res.status(403).send("User with the email( "+username+" ) alredy exist");
            }else{
                const client = new User({
                    username: _.upperFirst(username),
                    password:password,
                });
                console.log(client,username,password);

                // Create token
                const token = jwt.sign(
                    {client},
                    process.env.TOKEN_KEY,
                );
                client.save((err)=>{
                    if(!err){
                        // res.status(200).send(token);
                        res.redirect("login")
                    }else{
                        res.status(401).send("Unable to regiser user");
                    }
                });
            }
        }
    });
});

module.exports = router;