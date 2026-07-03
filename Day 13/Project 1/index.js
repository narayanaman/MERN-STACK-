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
        const {email}=req.body;

        const oldStudent=await Student.findOne({email});
        if(oldStudent){
            return res.status(500).json({
                message:"Email ID Already Exist",
                student:oldStudent
            });
        }
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

app.get("/api/students",async(req,res)=>{
    try{
        const students=await Student.find();
        res.json({
            message:"All Students",
            data:students
        });
    }
    catch(err){
        console.log("Some error while retrieving",err);
    }
});


app.put("/api/students/:id",async(req,res)=>{
    try{
        //const id =req.params.id;
        const {id}=req.params;
        const student=await Student.findByIdAndUpdate(id,req.body);
        if(!student){
            return res.status(404).json({
                message:"Invalid ID to Update"
            });
        }
        res.json({
            message:"Student record Update",
            student
        });
    }
    catch(err){
        console.log("Unable to Update records");
    }
});

app.delete("/api/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({
                message:"Invalid ID for Deletion"
            });
        }
        res.joson({message:"Record Deleted",data:student});
    }
    catch(err){
        console.log("Unable to Delete record",err);
    }
});
const PORT=process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log("Server Stared for "+ PORT);
});