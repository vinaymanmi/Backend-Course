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

const updateNotebook=async (req,res) => {
    try {
        const id=req.params.id;
        const {name,heading,content}=req.body;
        const updatenotebook=await notebook.findByIdAndUpdate(
            id,{name,heading,content},{new:true}
        )
        if(!updatenotebook){
            return res.send("Notes is not found ❌")
        }
        res.json({
            message:"Notes updated✅",
            updatenotebook
        })
    } catch (e) {
        res.send(e.message);
    }
}

const deleteNotebook= async (req,res) => {
    try {
        const id=req.params.id;
        const notes=await notebook.findByIdAndDelete(id);
        if(!notes){
            return res.status(401).send("Notebook not found");
        }
        res.send("Notebook is deleted");
    } catch (e) {
        res.send(e.message)
    }
}


module.exports={createNotebook,getNotes,updateNotebook,deleteNotebook}