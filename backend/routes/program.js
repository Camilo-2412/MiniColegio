const express = require("express");
const router = express.Router();
const ProgramController = require("../controllers/program");

router.post("/registerProgram" , ProgramController.registerProgram);

module.exports = router ;