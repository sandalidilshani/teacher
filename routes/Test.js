const express = require('express');
const router = express.Router();

const data ={
  "Team":[
     {
        "Name":"Certified Teacher",
        "Role":"Designer",
        "description":"Slate helps you see how many more days you need to work to reach your financial goal for the month and year. "
     },
     {
      "Name":"Certified Teacher",
      "Role":"Designer",
      "description":"Slate helps you see how many more days you need to work to reach your financial goal for the month and year. "
     }
  ],
  "title":"Testimonials,Watch our Courses",
  "description":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
}

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;