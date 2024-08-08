const express = require('express');
const router = express.Router();



// messageDetailscontrollers 
const detailsControllers=require('../controllers/messageDetailsControllers.js')


router.get("/:id", detailsControllers.renderDetails);
  

module.exports = router

