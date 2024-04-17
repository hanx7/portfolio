const express = require('express');
const router = express.Router();
const MessageController = require("../controller/MessageController")



router.post("/sendMessages", MessageController.sendMessage);

module.exports = router;