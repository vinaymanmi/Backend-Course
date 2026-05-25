const mongoose = require("mongoose");

const notesSchema=new mongoose.Schema({
    heading:{
        type:String,
        require:true,
        uppercase:true
    },
    content:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model("notebook",notesSchema);