
var express = require("express");
var router = express.Router();
const team = {
    "title": 'Get Quality Education',
    "description": 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
    "team": [
        {
            "name": 'Julian Jameson',
            "profession": 'Profession',
            "imageUrl": '',
            "social": ['facebook', 'instagram', 'twitter']
        },
        {
            "name": 'Julian Jameson',
            "profession": 'Profession',
            "imageUrl": '',
            "social": ['facebook', 'instagram', 'twitter']
        },
        {
            "name": 'Julian Jameson',
            "profession": 'Profession',
            "imageUrl": '',
            "social": ['facebook', 'instagram', 'twitter']
        },
        {
            "name": 'Julian Jameson',
            "profession": 'Profession',
            "imageUrl": '',
            "social": ['facebook', 'instagram', 'twitter']
        }
    ]
};

router.get("/", (req, res) => {
    res.json(team);
});

module.exports = router;