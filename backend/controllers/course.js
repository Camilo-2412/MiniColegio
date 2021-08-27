const Course = require("../models/course");

const registerCourse = async(req,res) =>{
    if(!req.body.grade ||  !req.body.id) return res.status(400).send("Incomplet Data");

    let existingCourse = await Course.findOne({id:req.body.id});
    if(existingCourse) return res.status(400).send("Course already register");

    let course = new Course({
        grade: req.body.grade,
        id: req.body.id,
        dbStatus: true,
    });

    let result = await course.save();
    if(!result) return res.status(400).send("Failed to register course");
    return res.status(200).send({result});
};

module.exports = {registerCourse};