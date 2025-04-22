require("dotenv").config();
const express = require("express");
const uploadRoutes = require("./routes/upload");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
app.use(cors());
app.use("/uploads", express.static(uploadsDir));
app.use(express.json());
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
