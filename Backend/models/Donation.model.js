const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    pancard: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
