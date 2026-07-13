// npm i express mongoose dotenv cors nodemon bcryptjs jsonwebtoken socket.io whatsapp-web.js qrcode-terminal axios
const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
require("node:dns").setServers(["8.8.8.8","8.8.4.4"]);

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.set("io", io);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", () => {
  res.send("Admission Whatsapp ERP is Running !!");
});

const authRoutes = require("./routes/authRoutes");
const settingRoutes = require("./routes/settingRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const whatsappRoutes = require("./routes/whatsappRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/setting", settingRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/whatsapp", whatsappRoutes);
// app.use("/api/auth/",require("./routes/authRoutes"));

io.on("connection", (socket) => {
  console.log("Socket Connected ", socket.id);

  socket.on("joinCollege", (collegeId) => {
    socket.join(collegeId);
    console.log("Join Room", collegeId);
  });
  socket.on("disconnect", () => {
    console.log("Socket Disconnected ", socket.id);
  });
});

const  PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log("Server Running on Port "+PORT);
});
