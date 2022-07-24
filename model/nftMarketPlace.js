// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const NftMarketSchema = new Schema({
  title: String,
  usdAmount: String,
  percentage: String,
  imageURL: String,
  owner: String,
});

// Define Model
const NftMarket = mongoose.model("NftMarket", NftMarketSchema);

module.exports = NftMarket;
