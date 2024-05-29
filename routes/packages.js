var express=require('express')
var router=express.Router()

const AdorablepckgData=[
    {
        headerData:['Approdable Packages','Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ','Learn More'],
        package01:{
            title:'Certified Teacher',
            content:'The gradual accumulation of information about ',

        },
        package02:{
            title:'Expert instruction',
            content:'The gradual accumulation of information about '
        }
    }
]


router.get("/pckgData",  (req, res )=> {
    res.json(AdorablepckgData);
    next()
})

module.exports=router;