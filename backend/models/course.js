const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    grade: String,
    id: String,
    date: {type:Date, default :Date.now},
    dbStatus: Boolean,
});

const course = mongoose.model("course" , courseSchema);
module.exports = course;