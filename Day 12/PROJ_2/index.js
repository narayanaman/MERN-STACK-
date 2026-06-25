const express=require("express");

const app=express();

app.get("/students/:roll/:name/:age",(req,res)=>{
    const {roll,name,age}=req.params;
    console.log(req.query);
    res.json({
        message:"Sigle Student",
        user_roll_no:roll,
        student_name:name,
        age:age
    });
});

app.get("/students",(req,res)=>{
    console.log(req.query);
    res.json({
        message:"Data inside query",
        data:req.query
    });
});

app.listen(5000,()=>{
    console.log("Server Started , Port no is 5000");
});