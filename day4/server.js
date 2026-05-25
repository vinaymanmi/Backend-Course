// console.log("hello");
const express = require("express");
const mongoose = require("mongoose");

const app=express();

require("dotenv").config()
const port=process.env.port;
const mongo_url=process.env.mongo_url;

const {createAccount,login}=require("./controllers/user");
const { createNotebook,getNotes,updateNotebook,deleteNotebook} = require("./controllers/notes");


app.use(express.json());

app.post("/signin",createAccount);
app.post("/login",login);
app.post("/notebook",createNotebook); //POST for send data
app.get("/allNotes",getNotes);  //GET for getting/showing data
//PUT for Updateing data
app.put("/updatenotebook/:id",updateNotebook);

app.delete("/api/deletenotebook/:id",deleteNotebook) //DELETE data

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
