// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const top6UsersSchema = new Schema({
  logo: String,
  name: String,
  domain: String,
  subdomain: String,
  status: String,
});

// Define Model
const TopSixUser = mongoose.model("TopSixUser", top6UsersSchema);

module.exports = TopSixUser;
