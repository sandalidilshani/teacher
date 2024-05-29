var express=require('express')
var router=express.Router()

const data ={
    "Approdable Packages":[
       {
          "packageName":"Certified Teacher",
          "description":"The gradual accumulation of information about "
       },
       {
          "packageName":"Expert instruction",
          "description":"The gradual accumulation of information about "
       }
    ],
    "title":"Approdable Packages",
    "description":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  "
 }


router.get("/",  (req, res )=> {
    res.json(data);
    
})

module.exports=router;