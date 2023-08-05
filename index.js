const express = require("express");
const cors = require("cors");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post("/scrape", (req, res) => {
  scrapeLogic(req, res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
