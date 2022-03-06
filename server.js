const express = require("express");
const { json } = require("express/lib/response");
const data = require("./db/receipts.json");
const app = express();
const port = 8080;

app.get("/receipts", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ data });
});

app.get("/receipts/:receipt", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let receipt = data.receipts.filter(item => item.id === req.params.receipt)
  res.send({ receipt });
});

app.listen(port, () => {
  console.log(`Cook book app listening on port ${port}`);
});
