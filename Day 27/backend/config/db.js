const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MONGO DB CONNECTED");
    } catch (err) {
        console.log("MongoDb Error",err.message);
        process.exit(1);
    }
};

module.exports=connectDB;
