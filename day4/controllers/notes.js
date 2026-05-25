const notebook = require("../models/notes") //model name

const createNotebook = async(req,res)=>{
    try {
        const{heading,content}=req.body;
        const sendDate=await notebook.create({heading,content})
        res.json({
            message:"Notebook Created",
            sendDate
        })
    } catch (e) {
        res.send(e.message);
    }
}

const getNotes=async (req,res) => {
    try {
        const allNotebooks=await notebook.find();
        res.json({
            allNotebooks
        })
    } catch (e) {
        res.send(e.message)
    }
}

module.exports={createNotebook,getNotes}