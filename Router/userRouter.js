//Extarnal Imports
const express = require('express');
const router = express.Router();

//Internal imports
const getUser = require('../Controller/userController');
const decorateHtmlResponse = require("../Middleware/common/decorateHtmlResponse")




router.get('/', decorateHtmlResponse("User"), getUser)







module.exports = router;