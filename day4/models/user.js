const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,  //email converted to lower case
        unique:true,  //Email must unique
        trim:true, //remove spaces from email
        validator(value){  //'validate' is a funcation withparameter 'value' taken by installing npm i validator
            if(!validator.isEmail(value)){  //if email is invalid 
                throw new Error("Invalid Email"); //throw or show invalid email
            }
        }
    },
    password:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isStrongPassword(value)){ //checks password is strong or not
                throw new Error("Please Enter strong password");
            }
        }
    }
})

module.exports=mongoose.model("User",userSchema);  //it exports all the data from userScheama