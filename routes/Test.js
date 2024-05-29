const express = require('express');
const router = express.Router();

const AdorablePckgData = [
  {
    headerData: [
      'Approdable Packages',
      'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ',
      'Learn More'
    ],
    package01: {
      title: 'Certified Teacher',
      content: 'The gradual accumulation of information about '
    },
    package02: {
      title: 'Expert instruction',
      content: 'The gradual accumulation of information about '
    }
  }
];

router.get("/", (req, res) => {
  res.json(AdorablePckgData);
});

module.exports = router;