
const express= require("express");

const diwaliRouter =express.Router();


function router(nav){

    diwaliRouter.get('/',function(req,res){

        res.render("diwali", {
            nav,
           
           
            
        });
    });


    diwaliRouter.get('/add',function(req,res){

        res.send("successfully added");
    });
    
    return diwaliRouter;
}
    
    





module.exports=router;