const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./db/db");
const Teacher = require("./routes/teacher");
const Course = require("./routes/course");
const Student = require("./routes/student");
const Program = require("./routes/program");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/teacher" , Teacher);
app.use("/api/course" , Course);
app.use("/api/student" ,Student);
app.use("/api/program" , Program);

app.listen(process.env.PORT, () =>
    console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();