const express = require('express');
const Mock = require('../models/mock');
const Student = require('../models/student');
const router = express.Router();

router.route('/').
get((req, res) =>{
if(req.isAuthenticated()){

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
}else{
    res.redirect("/login");
}
     
});


module.exports = router;
