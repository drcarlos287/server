// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const topsixnftSchema = new Schema({
  logo: String,
  name: String,
  domain: String,
  subdomain: String,
  status: String,
});

// Define Model
const TopSixNft = mongoose.model("TopSixNft", topsixnftSchema);

module.exports = TopSixNft;
