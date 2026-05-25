// console.log("hello");
const express = require("express");
const mongoose = require("mongoose");

const app=express();

require("dotenv").config()
const port=process.env.port;
const mongo_url=process.env.mongo_url;

const {createAccount,login}=require("./controllers/user");
const { createNotebook,getNotes} = require("./controllers/notes");


app.use(express.json());

app.post("/signin",createAccount);
app.post("/login",login);
app.post("/notebook",createNotebook);
app.get("/allNotes",getNotes);

mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongoDB is connected")
    app.listen(port,()=>{
        console.log(`Server is running PORT number ${port}`)
    })
})
.catch((e)=>{
    console.log("ERROR",e);
})
