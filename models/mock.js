const mongoose = require("mongoose");
const stuSchema={
    studentId:String
}
const mockSchema = new mongoose.Schema({
    mockName: String,
    students: {
        type:[stuSchema],
        default:null
    },
});

const Mock = new mongoose.model("Mock", mockSchema);

module.exports = Mock;