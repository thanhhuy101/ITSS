const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Item = require("./models/item.model.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
