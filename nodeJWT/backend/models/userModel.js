const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true, "Please add first name"],
    },
    email:{
        type: String,
        unique: [true, "email already used"],
        required:[true, "Please add first email"],
    },
    password:{
        type: String,
        required:[true, "Please add first password"],
    },
    role: {
        type: String,
        default: "simple",
    }
});

module.exports = mongoose.model("User", userSchema);