const express = require("express");
const router = express.Router();

const { setAd } = require("../controllers/adController.js");

const protect = require("../middleware/authMiddleware.js");

router.route("/").post(protect, setAd);

module.exports = router;