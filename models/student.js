const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    sex: String,
    mockId:String,
    English: {
        type:Number,
        default:0
    },
    Maths: {
        type:Number,
        default:0
    },
    Social: {
        type:Number,
        default:0
    },
    Science: {
        type:Number,
        default:0
    },
    RME: {
        type:Number,
        default:0
    },
    ICT: {
        type:Number,
        default:0
    },
    TWI: {
        type:Number,
        default:0
    },
    French: {
        type:Number,
        default:0
    },
    BDT: {
        type:Number,
        default:0
    },
    aggregate:{
        type:Number,
        default:54
    },
    remarks:{
        type:String,
        default:null
    },
    position:{
        type:String,
        default:null
    },
});

const Student = mongoose.models.Student || new mongoose.model("Student", studentSchema);

module.exports = Student;