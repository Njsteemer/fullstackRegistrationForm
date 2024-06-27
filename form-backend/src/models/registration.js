const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId : {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    confirmpassword: {
        type:String, 
        required:true
    }
});

//now we need to create a collections
const Register = mongoose.model("Register", userSchema);

module.exports = Register;
