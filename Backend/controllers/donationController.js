const Donation = require("../models/Donation.model");

exports.submitDonation = async (req, res) => {
  const { fullName, panCard, amount } = req.body;

  if (!fullName || !panCard || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Save the donation to the database
    const donation = new Donation({
      fullname: fullName,
      pancard: panCard,
      amount,
    });

    await donation.save();

    console.log("📝 Donation Saved:", donation);

    res.status(200).json({ success: true, message: "Payment successful" });
  } catch (error) {
    console.error("❌ Error saving donation:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error. Please try again." });
  }
};
