const express=require("express");
const cors = require("cors");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const chatRoutes=require("./routes/chatRoutes");

dotenv.config();

const app=express();

connectDB();

app.use(cors());  // cors => cross origin resourse sharing.
app.use(express.json());
app.get("/",()=>{
    res.send("Student Doubt Solver API is Running");
})
app.use("/api",chatRoutes);
const PORT =process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);
});