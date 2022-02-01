const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors')
const db = require("./config/db");
dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.APP_PORT || 4000;

app.listen(port, () => {
  console.log("Server is running :D");
  db();
});
