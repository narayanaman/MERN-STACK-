const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { saveSetting, getSetting } = require("../controllers/settingController");

router.post("/",authMiddleware,saveSetting);
router.get("/",authMiddleware,getSetting);

module.exports=router;


