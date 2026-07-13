const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { saveSetting, getSetting } = require("../controllers/settingController");
const router =express.Router();
router.post("/",authMiddleware,saveSetting);
router.get("/",authMiddleware,getSetting);

module.exports=router;


