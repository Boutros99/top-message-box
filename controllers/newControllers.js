// function accessing the data in the forms
const dataFunctions = require('../models/data.js')


// function pushing the data in the messages array

function addFormData(req,res,next) {
    messages=dataFunctions.getMessageData();
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });

};

// function redirecting to main page

function redirectToMain(req,res,next) {
    res.redirect('/') ;
};

module.exports = {addFormData,redirectToMain};