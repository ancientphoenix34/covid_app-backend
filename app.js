const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const entryrouter=require("./controllers/EntryRoute")

const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://event12:event12@cluster0.b2hgr1s.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewURLParser:true
}
)

app.use("/api/patient",entryrouter)

app.listen(3001,()=>{
    console.log("...server is running on 3001")
})