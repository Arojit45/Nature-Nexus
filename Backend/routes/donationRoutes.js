const express = require("express");
const router = express.Router();
const { submitDonation } = require("../controllers/donationController");

// POST /donation/submit
router.post("/submit", submitDonation);

module.exports = router;
