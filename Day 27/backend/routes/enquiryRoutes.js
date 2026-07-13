const express = require("express");
const router = express.Router();
const authMiddleware =require("../middleware/authMiddleware");
const { getEnquiries, getSingleEnguiry } = require("../controllers/enquiryController");

router.get("/",authMiddleware,getEnquiries);
router.get("/:id",authMiddleware,getSingleEnguiry);

module.exports=router;