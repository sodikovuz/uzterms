require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cron = require("node-cron");

const startScanner = require("./services/scanner");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/monitors", require("./routes/monitors"));
app.use("/api/events", require("./routes/events"));

cron.schedule("*/2 * * * *", async () => {
  console.log("Running scan...");
  await startScanner();
});

app.get("/", (req, res) => {
  res.json({ status: "running" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});