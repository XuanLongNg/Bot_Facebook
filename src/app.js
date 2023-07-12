const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes");
const configViewEngine = require("./config/viewEngine");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

configViewEngine(app);
// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routing
app.use("/", routers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
