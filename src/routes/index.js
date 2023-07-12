const express = require("express");
const webhook = require("./webhook");
const routers = express.Router();

routers.use("/webhook", webhook);

module.exports = routers;
