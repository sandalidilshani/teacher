var express = require("express");
var router = express.Router();


const pageData={
    brandName:'TEACHER',
    navBar:['Home','Products','Pricing','Contact'],
    navBarButtons:['Login','Join Us'],
    welComeHead:'Welcome',
    headline: 'Best Learning Opportunities',
    subheadline: 'Our goal is to make online education work for everyone',
}

router.get("/brandNamer",  (req, res )=> {
    res.json(pageData.brandName);
    next()
})
router.get("/navbar",  (req, res )=> {
    res.json(pageData.navBar);
    
})

router.get ("/containerdata",(req,res)=>{
    const responseData = {

        welComeHead: pageData.welComeHead,
        headline: pageData.headline,
        subheadline: pageData.subheadline
      };
      res.json(responseData);
})

module.exports=router