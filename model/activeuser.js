// Dependency
const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const ActiveUsersSchema = new Schema({
  users: String,
  sales: String,
  items: String,
});

// Define Model
const ActiveUsers = mongoose.model("ActiveUsersection", ActiveUsersSchema);

module.exports = ActiveUsers;
