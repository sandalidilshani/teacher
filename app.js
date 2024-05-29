const express = require('express');

const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send("hey , this is your teacher")
})
const headerContainer = require('./routes/headerContainer');
app.use('/headercontainer', headerContainer);

const adorablepckg = require('./routes/packages');
app.use('/adorablepckg', adorablepckg);

const videoData = require('./routes/video');
app.use('/videodata', videoData);

const coursepckg = require('./routes/coursepckg');
app.use('/coursepckg', coursepckg);

const test = require('./routes/Test');
app.use('/test', test);

const team = require('./routes/team');
app.use('/team', team);

const footer = require('./routes/Footer');
app.use('/footer', footer);

app.listen(port, (error) => { 
  if (!error) 
    console.log("Server is Successfully Running, and App is listening on port " + port); 
  else
    console.log("Error occurred, server can't start", error); 
}); 

module.exports=app
