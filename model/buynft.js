// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const buynftSchema = new Schema({
  title: String,
  usdAmount: String,
  customerEmail: String,
});

// Define Model
const buynft = mongoose.model("buynft", buynftSchema);

module.exports = buynft;
