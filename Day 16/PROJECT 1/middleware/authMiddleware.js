const jwt = require("jsonwebtoken");
const User =require("../models/User");

const authMiddleware= async(req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || authHeader.startWith("Bearer")){
            return res.status(401).json({
                success:false,
                message:"Token Not Found"
            });
        }
        //Now work with  token.
        let token =authHeader.split(" ")[1];
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        const user=await User.findById(decoded.id).select("password");
        //without Password
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User Not Found"
            });
        }
        console.log("Middleware wala user",user);
        req.user=user;
        next();
    }
    catch(err){
        console.log("Some Error in authMiddleware",err);
        return res.json({
            success:false,
            message:"Invalid Token"
        });
    }
};
module.exports=authMiddleware;