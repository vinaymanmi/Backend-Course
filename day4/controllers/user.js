const User=require("../models/user");
const bcrypt=require("bcrypt");
require("dotenv").config();
const jwt=require("jsonwebtoken")

const createAccount=async(req,res) => {

    try {
        const {name,email,password} = req.body;
        const cheackUser=await User.findOne({email})
        if(cheackUser){
            return res.status(401).send("Email is already exist please login")
        }
        const hashpassword=await bcrypt.hash(password,12)
        const userdata=await User.create({
            name,
            email,
            password: hashpassword
        })
        res.json({
            message:"Account created successfuly", 
            userdata
        })
    } catch (e) {
        res.send(e.message);
    }

}

const login=async (req,res) => {
    try {
        const {email,password}=req.body;
        const userdata = await User.findOne({email});
        const hashpassword= await bcrypt.compare(password,userdata.password); 
        if (!hashpassword) {
            throw new Error("user is not found");
        }
        if(userdata.password != password){
            throw new Error("Password is invalid");
        }

        const token=await jwt.sign(
            {id:userdata._id},
            process.env.secret_key,
            {expiresIn:"10h"}
        )
        

        res.json({
            message: "Welcome",
            userdata,
            token:token
        })
    } catch (e) {
        res.send(e.message);
    }
}

module.exports={createAccount,login}