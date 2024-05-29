var express = require("express");
var router = express.Router();

const pageData = {
    brandName: 'TEACHER',
    navBar: ['Home', 'Products', 'Pricing', 'Contact'],
    navBarButtons: ['Login', 'Join Us'],
    welComeHead: 'Welcome',
    headline: 'Best Learning Opportunities',
    subheadline: 'Our goal is to make online education work for everyone',
    newsletter: {
        title: 'Watch our Courses',
        description: 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
        placeholder: 'Your Email',
        buttonText: 'Subscribe'
    },
    footer: {
        companyInfo: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
        legal: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
        features: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
        resources: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
        contact: {
            phone: '(480) 555-0103',
            address: '4517 Washington Ave. Manchester, Kentucky 39495',
            email: 'debra.holt@example.com'
        },
        copyright: 'Made With Love By Figmaland All Right Reserved'
    }
};

router.get("/brandNamer", (req, res) => {
    res.json(pageData.brandName);
});

router.get("/navbar", (req, res) => {
    res.json(pageData.navBar);
});

router.get("/navbarbuttons", (req, res) => {
    res.json(pageData.navBarButtons);
});

router.get("/containerdata", (req, res) => {
    const responseData = {
        welComeHead: pageData.welComeHead,
        headline: pageData.headline,
        subheadline: pageData.subheadline
    };
    res.json(responseData);
});

router.get("/newsletter", (req, res) => {
    res.json(pageData.newsletter);
});

router.get("/footer", (req, res) => {
    res.json(pageData.footer);
});

module.exports = router;