
//Extarnal Imports
const express = require('express');


//Internal imports
const getLogin = require("../Controller/loginController")
const decorateHtmlResponse = require("../Middleware/common/decorateHtmlResponse")
const router = express.Router();

router.get('/',decorateHtmlResponse("Login"), getLogin)






module.exports = router;
