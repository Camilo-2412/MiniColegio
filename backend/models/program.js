const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
    id: String,
    name:String,
    description:String,
    teacherId: {type: mongoose.Schema.ObjectId, ref:"teacher"},
    date : {type:Date, default:Date.now},
    dbStatus: Boolean,
});

const program = mongoose.model("program" , programSchema);
module.exports = program;