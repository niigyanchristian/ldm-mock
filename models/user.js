const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.models.User || new mongoose.model("User", userSchema);

module.exports = User;