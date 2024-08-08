const express = require('express');
const router = express.Router();
const newControllers=require('../controllers/newControllers.js')




router.get('/', (req, res) => {
    res.render("form");
});

router.post('/', (req, res, next) => {
    newControllers.addFormData(req,res,next);
    newControllers.redirectToMain(req,res,next);
});

module.exports = router