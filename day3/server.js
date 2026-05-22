// console.log("hello");

//const var = require("express") => importing
const express = require("express"); 

//calling express
const app=express();

const mongoose = require("mongoose");


require("dotenv").config(); //from .env file
const port=process.env.port; //getting port value from .env
const mongo_url=process.env.mongo_url; //getting mongo_url value from .env

app.use(express.json()) //For API

//mongoose connecting
mongoose.connect(mongo_url) // changing "mongodb+srv://vinaymanmi08_db_user:vinay123@curd.55klxp7.mongodb.net/?appName=Curd" to mongo_url
.then(() => {
    console.log("MongoDB is successfully connected");
    //PORT number
    app.listen(port,() => { //changing 5000 to `port`
        console.log(`Server is running PORT ${port}`);
    });
})
.catch((e) => {
    console.log("Something went wrong",e);
})

// console.log("HI");

//Creating API's
app.get("/path",(request,responce)=>{
    responce.send("path api");
});



// app.get("/login",(req,res)=>{
//     const userdata=req.body;
//     console.log(userdata);
//     res.json({
//         message:"Login successfully",
//         userdata
//     })
// })

app.get("/login",(req,res)=>{
    try {
        const userdata=req.body;
        console.log(userdata);
        res.json({
            message:"Login successfully",
            userdata
        })
    } catch (error) {
        console.log("Something went wrong");
    }
})