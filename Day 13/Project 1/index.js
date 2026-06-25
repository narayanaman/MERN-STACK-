const express=require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/Student");
dotenv.config();
const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log("Unable to Connect to DB",err);
});

app.post("/api/students",async(req,res)=>{
    try{
    const student=await Student.create(req.body);
    res.status(201).json({
        message:"Student Record Saved",
        student
        });
    }
    catch(err){
        console.log("Unable to Store Student",err);
    }
});

const PORT=process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log("Server Stared for "+ PORT);
});