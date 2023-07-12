const express = require("express");
const chatbotController = require("../controllers/chatbotController");
const webhook = express.Router();

webhook.get("/", chatbotController.getWebhook);
webhook.post("/", chatbotController.postWebhook);

module.exports = webhook;
