const express=require("express");

const app =express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("App is Running");
});
app.get("/students",(req,res)=>{
    res.json({
        message:"All students"
    });
});
app.post("/students",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Student Record",
        data:req.body
    });
});
app.listen(3000,()=>{
    console.log("seever is running");
});