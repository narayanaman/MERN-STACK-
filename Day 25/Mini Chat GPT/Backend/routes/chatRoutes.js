const express=require("express");
const { askQuestion, getAllChats, deleteAllChats } = require("../controllers/chatController");
const router=express.Router();

router.post("/chat",askQuestion);
router.get("/chat",getAllChats);
router.delete("/chat",deleteAllChats);

module.exports=router;

