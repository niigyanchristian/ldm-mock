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

const Mock = mongoose.models.Mock || new mongoose.model("Mock", mockSchema);

module.exports = Mock;