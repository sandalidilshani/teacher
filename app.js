const express = require('express');

const app = express();
const port = 3020;



const headerContainer = require('./routes/headerContainer');
app.use('/headercontainer', headerContainer);

const adorable_package = require('./routes/adorable_package');
app.use('/adorable_package', adorable_package);

const videoData = require('./routes/video');
app.use('/video', videoData);

const coursepckg = require('./routes/course_package');
app.use('/coursepckg', coursepckg);

const testimonial = require('./routes/testimonial');
app.use('/testimonial', testimonial);

const team = require('./routes/team');
app.use('/team', team);

const footer = require('./routes/footer');
app.use('/footer', footer);

app.listen(port, (error) => { 
  if (!error) 
    console.log("Server is Successfully Running, and App is listening on port " + port); 
  else
    console.log("Error occurred, server can't start", error); 
}); 

module.exports=app
