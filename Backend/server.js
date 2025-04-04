const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const donationRoutes = require("./routes/donationRoutes");
const connectDB = require("./DB/db"); // ✅ Import the DB connection function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/donation", donationRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
