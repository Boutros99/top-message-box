
// function accessing the data in the forms
const dataFunctions = require('../models/data.js')

// rendering the detail page
function renderDetails(req,res) {
    let messageID=parseInt(req.params.id);
    let messages=dataFunctions.getMessageData();
    const message=messages.find((post) => post.id === messageID);
    
    if (message) {
    res.render("messages-views/messageDetails", {  message });
    } else {
        res.status(404).send('message not found')
    }
};

module.exports = {renderDetails} ;