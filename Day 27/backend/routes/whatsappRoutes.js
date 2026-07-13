const express = require("express");
const { connectWhatsapp } = require("../controllers/whatsappController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/connect",authMiddleware,connectWhatsapp);

module.exports = router;