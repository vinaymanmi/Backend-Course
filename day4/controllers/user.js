const User=require("../models/user");
const bcrypt=require("bcrypt");

const createAccount=async(req,res) => {

    try {
        const {name,email,password} = req.body;
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
        res.json({
            message: "Welcome",
            userdata
        })
    } catch (e) {
        res.send(e.message);
    }
}

module.exports={createAccount,login}