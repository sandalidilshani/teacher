var express=require('express')
var router=express.Router()

const data=
    {
        headerData:['Practice Advice','Approdable Packages','Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics '],
        pacakge01:['2,769 online course','Watch our Courses','We focus on ergonomics and meeting you where you work. It sonly a keystroke away.','15 Sales','$16.48','$6.48'],
        pacakge02:['2,769 online course','Watch our Courses','We focus on ergonomics and meeting you where you work. It sonly a keystroke away.','15 Sales','$16.48','$6.48']

    }


router.get("/",  (req, res )=> {
    res.json(data);
    next()
})



module.exports=router;