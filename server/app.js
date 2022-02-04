const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors')
const db = require("./config/db");
dotenv.config();
const app = express();
const {lectureRouter, studentRouter, facultyMemberRouter,classroomRouter,authRouter,lectureRecordRouter} = require("./routes")

const port = process.env.APP_PORT || 4000;

app.use(express.json());

app.use(cors());
//routes
app.use("/lecture",lectureRouter);
app.use("/student",studentRouter);
app.use("/facultyMember",facultyMemberRouter);
app.use("/classroom",classroomRouter);
app.use("/auth",authRouter);
app.use("/lectureRecord",lectureRecordRouter);


app.listen(port, () => {
  console.log("Server is running on port 4000");
  db();
});
