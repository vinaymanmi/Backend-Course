const jwt=require("jsonwebtoken");
require("dotenv").config();

const auth=async (req,res,next) => { //next param to 
    try {

        //headers must be lowercase
        const token = await req.headers.authrization; //entring key and values in the header part of postman
        if(!token){
            return res.status(401).json({
                status:false,
                meaasage:"Token not found"
            })
        const decoded=await jwt.verify(token,process.env.secret_key);
        }
    } catch (error) {
        res.status(401).send(error.meaasage)
    }
}

module.exports=auth;