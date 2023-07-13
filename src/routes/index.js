const express = require("express");
const webhook = require("./webhook");
const routers = express.Router();
const chatbotController = require("../controllers/chatbotController");

routers.get("/", chatbotController.getHomePage);
routers.use("/webhook", webhook);

module.exports = routers;
