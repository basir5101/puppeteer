const express = require("express");
const cors = require("cors");
const { scrapeLogic } = require("./scrapeLogic");
const { getLabReport } = require("./getLabReport");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post("/bsmrstu/assignment", (req, res) => {
  scrapeLogic(req, res);
});


app.post("/bsmrstu/lab", (req, res) => {
  getLabReport(req, res);
});


app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
