

//import data from message
const dataFunctions = require('./models/data.js');


// And import the Path CommonJS module from Node near the top:
const path = require("node:path");



//loading new routes
const newMessage = require('./routes/new');
const index = require('./routes/index');
const messageDetails = require('./routes/messageDetails');


// app
const express = require("express");
const app = express();


// This enables EJS as the view engine, and that our app should look for templates in the /views subdirectory

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// this enables the use of static files, especially css
app.use(express.static(path.join(__dirname, 'public')));

// this enables to parse form data into req.body and use it in middleware functions
app.use(express.urlencoded({ extended: true }));



// run the app

app.use('/new',newMessage)
app.use('/',index);
app.use('/details',messageDetails)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));


