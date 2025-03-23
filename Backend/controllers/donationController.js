exports.submitDonation = async (req, res) => {
  const { fullName, panCard, amount } = req.body;

  if (!fullName || !panCard || !amount) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // For now, just log the donation details
    console.log("📝 Donation Received:", { fullName, panCard, amount });

    // You could save to a database here (e.g., MongoDB)

    res.status(200).json({ success: true, message: "Payment successful" });
  } catch (error) {
    console.error("❌ Error saving donation:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error. Please try again." });
  }
};
