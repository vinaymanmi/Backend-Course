const User=require("../models/user");

const createAccount=async(req,res) => {

    try {
        const {name,email,password} = req.body
        const userdata=await User.create({
            name,email,password
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
        if(!userdata){
            throw new Error("User not found");
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