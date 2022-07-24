// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  usdTransferAmount: String,
  userEmail: String,
  senderEmail: String,
  nftName: String,
  withdrawAmount: String,
  userWallet: String,
  withdrawalChain: String,
  nftSellPrice: String,
  sellerEmail: String,
});

// Define Model
const order = mongoose.model("order", orderSchema);

module.exports = order;
