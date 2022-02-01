const dotenv = require("dotenv");
const express = require("express");
const db = require("./config/db");
dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.APP_PORT || 4000;

app.listen(port, () => {
  console.log("Server is running :D");
  db();
});
