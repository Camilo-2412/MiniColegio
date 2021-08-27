const Student = require("../models/student");
const Course = require("../models/course");
const bcrypt = require("bcrypt");


const registerStudent = async(req,res) =>{
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.id) return res.status(400).send("Incomplete Data");

    let existingStudent = await Student.findOne({email: req.body.email});
    if(existingStudent) return res.status(400).send("Student already register");

    let course = await Course.findOne({id:req.body.id});
    if(!course) return res.status(400).send("Course doesn't exist");

    let hash = await bcrypt.hash(req.body.password ,10);

    let student = new Student({
        name: req.body.name,
        email : req.body.email,
        password: hash,
        courseId: course._id,
        dbStatus: true,
    });

    let result = await student.save();
    if(!result) return res.status(400).send("Failed to register Student");

    try {
        let jwtToken = student.generateJWT();
        return res.status(200).send({jwtToken});
    } catch (e) {
        return res.status(400).send("Token generation failed");
    }
};

module.exports = {registerStudent};