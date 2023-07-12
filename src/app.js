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
app.use(routers);

const Port = process.env.PORT || 3000;
app.get("*", (req, res) => {
  res.send({ message: "Hello, world!" });
});

app.listen(Port, (req, res) => {
  console.log("listening on http://localhost:" + Port);
});
