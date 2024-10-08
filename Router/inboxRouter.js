//Extarnal Imports
const express = require('express');
const router = express.Router();

//Internal imports
const getInbox = require('../Controller/inboxController')
const decorateHtmlResponse = require("../Middleware/common/decorateHtmlResponse")


router.get('/', decorateHtmlResponse("Inbox"), getInbox)




module.exports = router;