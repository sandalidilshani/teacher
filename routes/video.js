var express=require('express')
var router=express.Router()

const Data=[
    {
        headerData:['Video in Live Action'],
        details:'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '
    }
]


router.get("/",  (req, res )=> {
    res.json(Data);
    next()
})

module.exports=router;