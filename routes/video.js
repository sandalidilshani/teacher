var express=require('express')
var router=express.Router()

const data={
    "headerData":"Video in Live Action",
    "details":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
}
    



router.get("/",  (req, res )=> {
    res.json(data);
    
})

module.exports=router;