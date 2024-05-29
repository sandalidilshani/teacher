var express = require("express");
var router = express.Router();

const data={
    "navbar":["TEACHER","Home","Products","Pricing","Contact",'Login','Join Us'],
    "title":'Welcome,Best Learning Opportunities',
    "subhead":"Our goal is to make online education work for everyone",

}

router.get("/",  (req, res )=> {
    res.json(data);
    
})


module.exports=router