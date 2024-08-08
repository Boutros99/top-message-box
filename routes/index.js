const express = require('express');
const router = express.Router();

// index controllers 
const indexControllers=require('../controllers/indexControllers.js')


router.get("/", indexControllers.renderIndex);
  

module.exports = router