const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const savetube = require("./savetube");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/ping", (req, res) => {
  res.json({ status: true, message: "SaveTube API is running 🚀" });
});

app.get("/api/download", async (req, res) => {
  const { url, format } = req.query;
  const result = await savetube.download(url, format);
  res.status(result.status ? 200 : 400).json(result);
});

app.post("/api/download", async (req, res) => {
  const { url, format } = req.body;
  const result = await savetube.download(url, format);
  res.status(result.status ? 200 : 400).json(result);
});

module.exports = app;
