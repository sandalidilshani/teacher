var express=require('express')
var router=express.Router()

const Data=
    {
        headerData:['Practice Advice','Approdable Packages','Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics '],
        pacakge01:['2,769 online course','Watch our Courses','We focus on ergonomics and meeting you where you work. It sonly a keystroke away.','15 Sales','$16.48','$6.48'],
        pacakge02:['2,769 online course','Watch our Courses','We focus on ergonomics and meeting you where you work. It sonly a keystroke away.','15 Sales','$16.48','$6.48']

    }


router.get("/",  (req, res )=> {
    res.json(Data);
    next()
})

router.get("/header",  (req, res )=> {
    res.json(Data.headerData);
    next()
})
router.get("/pckg01",  (req, res )=> {
    res.json(Data.pacakge01);
    next()
})
router.get("/pckg02",  (req, res )=> {
    res.json(Data.pacakge012);
    next()
})

module.exports=router;