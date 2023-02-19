const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    name:String,
    score:Number,
    mockid:String,
    position:{
        type:String,
        default:null
    },
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
    remarks:{
        type:String,
        default:null
    },
    aggregate:{
        type:Number,
        default:null
    }
});

const Result = mongoose.models.Result || new mongoose.model("Result", resultSchema);

module.exports = Result;