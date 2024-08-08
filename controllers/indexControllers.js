
// function accessing the data in the forms
const dataFunctions = require('../models/data.js')

// rendering the index page
function renderIndex(req,res) {
    res.render("index", { title: "Mini Messageboard", messages: dataFunctions.getMessageData() });
};


module.exports = {renderIndex};
