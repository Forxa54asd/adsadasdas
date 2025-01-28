const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ตั้งค่า static ไฟล์
app.use(express.static(path.join(__dirname, "public")));

// Routing หน้าแรก
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
