const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
const mongoose = require("mongoose");

const registerTeacher = async(req,res) =>{
    if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send("Incomplete data");

    let existingTeacher = await Teacher.findOne({email :req.body.email});
    if(existingTeacher) return res.status(400).send("The teacher is already registered");

    let hash = await bcrypt.hash(req.body.password , 10);

    let teacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        dbStatus: true,
    });

    let result = await teacher.save();
    if(!result) return res.status(400).send(("Failed to register teacher"));

    try {
        let jwtToken = teacher.generateJWT();
        res.status(200).send({jwtToken});
    } catch (e) {
        return res.status(400).send("Token generation failed")
    }
};


module.exports = {registerTeacher};