const express=require("express");
const mongoose=require("mongoose");
const dotenv =require("dotenv");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
dotenv.config();

const User=require("./models/User");
const authMiddleware=require("./middleware/authMiddleware");

const app=express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY");
})
.catch((err)=>{
    console.log("Unable to Connect to DB",err);
});

app.post("/api/register",async (req,res)=>{
    try{
        const {name,email,password} =req.body;
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.json({
                success:false,
                message:"Email Already Exist"
            });
        }
        const hashPassword =await bcryptjs.hash(password,10);
        const user=await User.create({name,email,password:hashPassword});
        res.json({
            success:true,
            message:"User Registered Successfully",
            user
        });
    }
    catch(err){
        console.log("Unable to Register",err);
    }
});

app.post("/api/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user =  await User.findOne({email});
        if(!user){
            return res.json({
                success:false,
                message:"User  Not Found"
            });
        }
        //we will write below this...........
        const isMatch=await bcryptjs.compare(password,user.password);

        if(!isMatch){
            return res.json({
                success:false,
                message:"Invalid Password"
            });
        }
        const token=jwt.sign({
            id:user._id,email:user.email
        },process.env.SECRET_KEY,{expiresIn:"2d"});
        res.cookie("token",token,{httpOnly:true});
        res.json({
            success:true,
            message:"Login Success"
        });
    }
    catch(err){
        console.log("Unable to Login ",err);
    }
});


app.get("/api/home",authMiddleware,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to Home Page",
        user:req.user
    });
});


app.get("/api/logout",(req,res)=>{
    res.clearCookie("token");
    res.json({
        success:true,
        message:"You Have Logged Out Successfully"
    });
});

const PORT=process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log("Unable to Stared at "+ PORT);
});
