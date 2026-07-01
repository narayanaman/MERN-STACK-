const express=require("express");

const mongoose=require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRouters");

const app =express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("DB Connected Successfully"))
.catch((err)=>{console.log("Unable to connect DB",err)});

app.use("/api/auth",authRoutes);

const PORT=process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log("Server has been start at "+PORT)
});