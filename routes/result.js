const express = require('express');
const Mock = require('../models/mock');
const Student=require('../models/student');
const router = express.Router();

router.route('/:id')
.get(async (req,res)=>{
    if(req.isAuthenticated()){
    
    
     const id = req.params.id;
        const getResult=(go)=>{
            Student.find({mockId:id},(err,find)=>{
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
            function ordinal_suffix_of(i) {
                var j = i % 10,
                    k = i % 100;
                if (j == 1 && k != 11) {
                    return i + "st";
                }
                if (j == 2 && k != 12) {
                    return i + "nd";
                }
                if (j == 3 && k != 13) {
                    return i + "rd";
                }
                return i + "th";
            }
                
                Student.findByIdAndUpdate(element._id,{position:ordinal_suffix_of(index+1)},(err,find)=>{})
            });
            Student.find({mockId:id},(err,find)=>{
                if(go ===1 || go===2){
                    getResult(go+1)
                }else{
                    
                    Mock.findById(id,(err,findMockName)=>{
                       let sortedData = find.sort((a,b)=>{
                            return a.aggregate - b.aggregate;
                        });
                        res.render("results",{data:sortedData,mockName:findMockName.mockName});
                    })
                }

            })
        }
    getResult(1);
}else{
    res.redirect("/login");
} 
});

module.exports = router;