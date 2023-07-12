const express = require("express");
// const webhook = require("./webhook");
const routers = express.Router();
const chatbotController = require("../controllers/chatbotController");

routers.get("/", chatbotController.getHomePage);
routers.get("/webhook", chatbotController.getWebhook);
routers.post("/webhook", chatbotController.postWebhook);

module.exports = routers;
