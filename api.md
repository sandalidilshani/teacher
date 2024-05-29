# API Routes Documentation

### HeaderContainer 
**EndPoint**: '/headercontainer'
**Method**: GET
**Description**: Returns the headerContainer.
**Response**:
json
{
   "navbar":["TEACHER","Home","Products","Pricing","Contact",'Login','Join Us'],
    "title":'Welcome,Best Learning Opportunities',
    "subhead":"Our goal is to make online education work for everyone",
}

### Adorable Pacakage
**EndPoint**: '/adorable_package'
**Method**: GET
**Description**: Returns the adorable_package Page.
**Response**:
json
{
   "Approdable Packages":[
       {
          "packageName":"Certified Teacher",
          "description":"The gradual accumulation of information about "
       },
       {
          "packageName":"Expert instruction",
          "description":"The gradual accumulation of information about "
       }
    ],
    "title":"Approdable Packages",
    "description":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  "
}

### Video Data
**EndPoint**: '/video'
**Method**: GET
**Description**: Returns the video Page.
**Response**:
json
{
   "headerData":"Video in Live Action",
    "details":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
}

### Testimonial
**EndPoint**: '/testimonial'
**Method**: GET
**Description**: Returns the testimonialPage.
**Response**:
json
{
   "team":[
     {
        "name":"Certified Teacher",
        "role":"Designer",
        "description":"Slate helps you see how many more days you need to work to reach your financial goal for the month and year. "
     },
     {
      "name":"Certified Teacher",
      "role":"Designer",
      "description":"Slate helps you see how many more days you need to work to reach your financial goal for the month and year. "
     }
  ],
  "title":"Testimonials,Watch our Courses",
  "description":"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
}


### Team
**EndPoint**: '/team'
**Method**: GET
**Description**: Returns the team page.
**Response**:
json
{
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
}

### Footer
**EndPoint**: '/footer'
**Method**: GET
**Description**: Return the footer page.
**Response**:
json
{
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