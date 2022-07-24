// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  userUid: String,
  name: String,
  age: String,
  money: String,
  staked: String,
  stakedCrypto: String,
  nftAmount: String,
  nftBalanceUrl: Array,
  userNewTranaction: Array,
  logo: String,
  price: String,
});

// Define Model
const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;
