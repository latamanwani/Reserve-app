// this file is for the servrCreation
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express"); // thrid party modules
const dotenv = require("dotenv").config();
const cors = require("cors");
const mogon = require("morgan");
// biding the express to app
const app = express();

// data base connection cofig
const Database = require("./DatabaseConnection/config");
Database();
// routes
const router = require("./routes/trips");
// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(mogon("tiny")); // this will the details of api and the others
app.use(router);
// apis

app.get("/", (req, res) => {
  res.send("Hello world");
});
let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});