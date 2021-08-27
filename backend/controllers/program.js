const Program = require("../models/program");
const Teacher = require("../models/teacher");

const registerProgram = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.id ||
    !req.body.teacherId
  )
    return res.status(400).send("Incomplete data");

    let existingProgram = await Program.findOne({id: req.body.id});
    if(existingProgram) return res.status(400).send("Program already register");

    let teacher = await Teacher.findById(req.body.teacherId);
    if(!teacher) return res.status(400).send("Teacher doesn't exists");

    let program = new Program({
        name :req.body.name,
        description: req.body.description,
        id:req.body.id,
        teacherId:  teacher._id,
        dbStatus: true,
    });

    let result = await program.save();
    if(!result) return res.status(400).send("Error registering program");

    return res.status(200).send({result})
};

module.exports = { registerProgram };
