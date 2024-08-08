// function accessing the data in the forms
const dataFunctions = require('../models/data.js')


// function pushing the data in the messages array

function addFormData(req,res,next) {
    let messages=dataFunctions.getMessageData();
    let messageID= messages.length ; // not the minus one because we measure the lenght before adding the new message
    messages.push({ text: req.body.message, user: req.body.author, added: new Date(), id: messageID });

};

// function redirecting to main page

function redirectToMain(req,res,next) {
    res.redirect('/') ;
};

module.exports = {addFormData,redirectToMain};