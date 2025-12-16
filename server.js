const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/week9db")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Item = require("./models/Item");

// READ ALL
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// CREATE
app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
